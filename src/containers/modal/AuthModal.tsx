import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Portal from 'portal'
// containers
import AuthLoginContent from 'containers/modal/auth/AuthLoginContent'
import AuthAuthorizationContent from 'containers/modal/auth/AuthAuthorizationContent'
import AuthSignUpContent from 'containers/modal/auth/AuthSignUpContent'
// components
import ModalBackground from 'components/modal/ModalBackground'
import AuthModalWrapper from 'components/modal/auth/AuthModalWrapper'
import AuthInfoContent from 'components/modal/auth/AuthInfoContent'
import Contour from 'components/modal/auth/Contour'
import Loading from 'components/commons/Loading'
// modules
import { Login, SignUp, AuthorizingUser, deleteAuthorization } from 'modules/auth'

interface AuthModalProps {
	display: boolean;
	onClose(): void;
}
const AuthModal = ({display, onClose}: AuthModalProps) => {
	const dispatch = useDispatch();

	const [loginDisplay, setLoginDisplay] = useState<boolean>(true);
	const [authorizationDisplay, setAuthorizationDisplay] = useState<boolean>(false);
	const [signupDisplay, setSignupDisplay] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	
	/* 로그인 Form 열기 */
	const openLoginContent = () => {
		setTimeout(function() {
			setLoginDisplay(true);
			setAuthorizationDisplay(false);
			setSignupDisplay(false);
		}, 0);
	}

	/* 사용자 인증 Form 열기 */
	const openAuthorizationContent = () => {
		setTimeout(function() {
			setLoginDisplay(false);
			setAuthorizationDisplay(true);
			setSignupDisplay(false);
		}, 0);
	}

	/* 회원가입 Form 열기 */
	const openSignUpContent = () => {
		setTimeout(function() {
			setLoginDisplay(false);
			setAuthorizationDisplay(false);
			setSignupDisplay(true);
		}, 0);
	}

	/* 로그인 */
	const onLogin = (id: string, pw: string) => {
		setLoading(true);
		Promise.resolve(dispatch(Login(id, pw))).finally(() => {
			setLoading(false);
		});
	}

	/* 사용자 인증 */
	const onCertification = (id: string, pw: string) => {
		setLoading(true);
		Promise.resolve(dispatch(AuthorizingUser(id, pw))).then(() => {
			openSignUpContent();
		}).finally(() => {
			setLoading(false);
		});
	}

	/* 회원가입 */
	const onSignUp = (id: string, pw: string, nickname: string) => {
		setLoading(true);
		Promise.resolve(dispatch(SignUp(id, pw, nickname))).finally(() => {
			setLoading(false);
		})
	}

	/* 사용자 권한 초기화 & 모달 닫기 */
	const onCloseAndInit = () => {
		dispatch(deleteAuthorization());
		onClose();
	}

	return (
		<Portal id='modal'>
			{display && <ModalBackground>
				<AuthModalWrapper onClose={onCloseAndInit}>
					<AuthInfoContent />
					
					<Contour />
					
					{loginDisplay && <AuthLoginContent onLogin={onLogin}
																						 onClose={onClose}
																						 openAuthorizationContent={openAuthorizationContent} />}
					{authorizationDisplay && <AuthAuthorizationContent onCertification={onCertification}
																														 openLoginContent={openLoginContent} />}
					{signupDisplay && <AuthSignUpContent onSignUp={onSignUp}
																							 openAuthorizationContent={openAuthorizationContent} />}
					{loading && <Loading />}
				</AuthModalWrapper>
			</ModalBackground>}
		</Portal>
	);
}

export default AuthModal