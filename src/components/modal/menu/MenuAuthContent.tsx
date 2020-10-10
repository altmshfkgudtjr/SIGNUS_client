import React, { useState } from 'react'
import styled from 'styled-components'
// containers
import AuthModal from '../../../containers/modal/AuthModal'
// components
import { Btn } from '../auth/LoginBtn'
// lib
import palette from '../../../lib/styles/palette'

interface MenuAuthContentProps {
	onClose(): void;
	loginValid: boolean;
}
const MenuAuthContent = ({onClose, loginValid}: MenuAuthContentProps) => {
	const [authModalShow, setAuthModalShow] = useState<boolean>(false);

	const onAuthModalShow = () => {
		setAuthModalShow(true);
		(document.querySelector('body') as HTMLElement).style.overflow = 'hidden';
	}

	const onAuthModalClose = () => {
		setAuthModalShow(false);
		(document.querySelector('body') as HTMLElement).removeAttribute('style');
	}

	const onLogin = () => {
		onAuthModalShow();
	}

	return (
		<>
			<Container>
				{!loginValid && <LoginBtn onClick={onLogin}>로그인</LoginBtn>}

			</Container>
			<AuthModal display={authModalShow} onClose={onAuthModalClose} />
		</>
	);
}

const Container = styled.div`
	position: relative;
	width: 100%;
	padding-bottom: .5rem;
	border-bottom: 1px solid ${palette.gray1};
	margin-bottom: 1rem;
`;

const LoginBtn = styled(Btn)`
	margin: .5rem 0;
`;

export default MenuAuthContent