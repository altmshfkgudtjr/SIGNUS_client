import React, { useState } from 'react'
import styled from 'styled-components'
// containers
import AuthModal from 'containers/modal/AuthModal'
// components
import { Btn } from 'components/modal/auth/AuthBtn'
import UserContent from './UserContent'
// lib
import palette from 'lib/styles/palette'
import * as commonUtils from 'lib/utils/commonUtils'

interface MenuAuthContentProps {
	onClose(): void;
	loginValid: boolean;
	name: string;
}
const MenuAuthContent = ({onClose, loginValid, name}: MenuAuthContentProps) => {
	const [authModalShow, setAuthModalShow] = useState<boolean>(false);

	const onAuthModalShow = () => {
		setAuthModalShow(true);
		commonUtils.modalToggle(true);
	}

	const onAuthModalClose = () => {
		setAuthModalShow(false);
		commonUtils.modalToggle(false);
	}

	const onLogin = () => {
		onAuthModalShow();
	}

	return (
		<>
			<Container>
				{!loginValid && <LoginBtn onClick={onLogin}>로그인</LoginBtn>}
				{loginValid && <UserContent name={name} />}
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