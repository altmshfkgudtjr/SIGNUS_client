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
		dispatch(Login(id, pw));
	}

	/* 사용자 인증 */
	const onCertification = (id: string, pw: string) => {
		dispatch(AuthorizingUser(id, pw));
		/* Redux-thunk Type Error를 해결한 후에, 아래 Code 이어붙이기 */
		// .then(() => {
		// 	openSignUpContent();
		// });
	}

	/* 회원가입 */
	const onSignUp = (id: string, pw: string) => {
		dispatch(SignUp(id, pw));
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
				</AuthModalWrapper>
			</ModalBackground>}
		</Portal>
	);
}

export default AuthModal