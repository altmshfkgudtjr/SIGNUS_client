import React from 'react'
import Portal from '../../portal'
// components
import ModalBackground from '../../components/modal/ModalBackground'
import AuthModalWrapper from '../../components/modal/AuthModalWrapper'

type AuthModalProps = {
	display: boolean,
	onClose: () => void
};

const AuthModal = ({display, onClose}: AuthModalProps) => {
	return (
		<Portal id='modal'>
			{display && <ModalBackground>
				<AuthModalWrapper onClose={onClose} />
			</ModalBackground>}
		</Portal>
	);
}

export default AuthModal