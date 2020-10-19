import React, { useState, useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
// containers
import AuthLoginContent from 'containers/modal/auth/AuthLoginContent'
import AuthAuthorizationContent from 'containers/modal/auth/AuthAuthorizationContent'
import AuthSignUpContent from 'containers/modal/auth/AuthSignUpContent'
// components
import AuthInfoContent from 'components/modal/auth/AuthInfoContent'
import Contour from 'components/modal/auth/Contour'
// lib
import * as styles from 'lib/styles/styles'
import animations from 'lib/styles/animations'
import media from 'lib/styles/media'

interface AuthModalWrapperProps {
	onLogin(id: string, pw: string): void;
	onSignUp(id: string, pw: string): void;
	onClose(): void;
	onCertification(id: string, pw: string): void;
}
const AuthModalWrapper = ({onLogin, onSignUp, onClose, onCertification}: AuthModalWrapperProps) => {
	const [loginDisplay, setLoginDisplay] = useState<boolean>(true);
	const [authorizationDisplay, setAuthorizationDisplay] = useState<boolean>(false);
	const [signupDisplay, setSignupDisplay] = useState<boolean>(false);
	const ModalRef = useRef<HTMLInputElement>(null);

	/* 로그인 모달 닫기 */
	const closeModal = useCallback((e: any) => {
		const { current } = ModalRef;
		const snackbarElem = !!e.path.filter((node: any) => node.id === 'snackbar')[0];
		
		if ((current && current.contains(e.target))
				|| snackbarElem) {
			return;
		} else {
			onClose();
		}
	}, [onClose]);

	useEffect(() => {
		document.addEventListener('mousedown', closeModal);
		return () => {
			document.removeEventListener('mousedown', closeModal);
		};
	}, [closeModal]);

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

	return (
		<Container ref={ModalRef}>
			<AuthInfoContent />
			<Contour />
			{loginDisplay && <AuthLoginContent onLogin={onLogin}
																				 onClose={onClose}
																				 openAuthorizationContent={openAuthorizationContent} />}
			{authorizationDisplay && <AuthAuthorizationContent onCertification={onCertification}
																												 onClose={onClose}
																												 openSignUpContent={openSignUpContent}
																												 openLoginContent={openLoginContent} />}
			{signupDisplay && <AuthSignUpContent onSignUp={onSignUp}
																					 openAuthorizationContent={openAuthorizationContent} />}
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	max-width: 700px;
	height: auto;
	min-height: 400px;
	border-radius: 4px;
	background-color: #FFF;
	box-shadow: ${styles.boxShadow.regular};
	animation: .5s ${animations.fadeIn};
	box-sizing: border-box;
	padding: 1rem;

	${media.small} {
		height: 100%;
		width: 100%;
		max-width: 800px;
		animation: .3s ${animations.fadeInRight};
	}
`;

export default AuthModalWrapper