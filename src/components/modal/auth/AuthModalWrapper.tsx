import React, { useState, useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
// components
import AuthInfoContent from './AuthInfoContent'
import Contour from './Contour'
import AuthLoginContent from './AuthLoginContent'
import AuthSignUpContent from './AuthSignUpContent'
// lib
import * as styles from '../../../lib/styles/styles'
import animations from '../../../lib/styles/animations'
import media from '../../../lib/styles/media'

interface AuthModalWrapperProps {
	onLogin(id: string, pw: string): void;
	onClose(): void;
}
const AuthModalWrapper = ({onLogin, onClose}: AuthModalWrapperProps) => {
	const [loginDisplay, setLoginDisplay] = useState<boolean>(true);
	const [signupDisplay, setSignupDisplay] = useState<boolean>(false);
	const ModalRef = useRef<HTMLInputElement>(null);

	/* 로그인 모달 닫기 */
	const closeModal = useCallback((e: any) => {
		const { current } = ModalRef;
		if (current && current.contains(e.target)) {
			return;
		} else {
			onClose();
		}
	}, [onClose]);

	useEffect(() => {
		document.addEventListener('click', closeModal);
		return () => {
			document.removeEventListener('click', closeModal);
		};
	}, [closeModal]);

	/* 회원가입 Form 열기 */
	const OpenSignUpContent = () => {
		setTimeout(function() {
			setLoginDisplay(false);
			setSignupDisplay(true);
		}, 0);
	}

	/* 로그인 Form 열기 */
	const OpenLoginContent = () => {
		setTimeout(function() {
			setLoginDisplay(true);
			setSignupDisplay(false);
		}, 0);
	}

	return (
		<Container ref={ModalRef}>
			<AuthInfoContent />
			<Contour />
			{loginDisplay && <AuthLoginContent onLogin={onLogin}
																				 onClose={onClose}
																				 OpenSignUpContent={OpenSignUpContent} />}
			{signupDisplay && <AuthSignUpContent OpenLoginContent={OpenLoginContent} />}
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	max-width: 700px;
	height: 400px;
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
		animation: .5s ${animations.fadeInRight};
	}
`;

export default AuthModalWrapper