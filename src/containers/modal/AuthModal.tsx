import React from 'react'
import { useDispatch } from 'react-redux';
import Portal from '../../portal'
// components
import ModalBackground from '../../components/modal/ModalBackground'
import AuthModalWrapper from '../../components/modal/auth/AuthModalWrapper'
// modules
import { Login, SignUp } from '../../modules/auth'

interface AuthModalProps {
	display: boolean;
	onClose(): void;
}
const AuthModal = ({display, onClose}: AuthModalProps) => {
	const dispatch = useDispatch();

	/* 로그인 */
	const onLogin = (id: string, pw: string) => {
		dispatch(Login(id, pw));
	}

	/* 회원가입 */
	const onSignUp = (id: string, pw: string) => {
		dispatch(SignUp(id, pw));
	}

	return (
		<Portal id='modal'>
			{display && <ModalBackground>
				<AuthModalWrapper onLogin={onLogin}
													onSignUp={onSignUp}
													onClose={onClose} />
			</ModalBackground>}
		</Portal>
	);
}

export default AuthModal