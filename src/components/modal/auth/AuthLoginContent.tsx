import React from 'react'
import styled from 'styled-components'
// components
import CloseBtn from './CloseBtn'
import Logo from './Logo'
import UserAccountInput from './UserAccountInput'
import UserPasswordInput from './UserPasswordInput'
import LoginBtn from './LoginBtn'
import AuthSigninBtn from './AuthSigninBtn'
// lib
import media from '../../../lib/styles/media'

interface AuthLoginContentProps {
	onClose(): void;
}
const AuthLoginContent = ({onClose}: AuthLoginContentProps) => {
	return (
		<Container>
			<CloseBtn onClose={onClose} />
			<Logo />
			<UserAccountInput />
			<UserPasswordInput />
			<LoginBtn />
			<AuthSigninBtn />
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 50%;
	box-sizing: border-box;
	padding: 1rem;

	${media.small} {
		width: 100%;
		padding: 0 1rem;
	}
`;

export default AuthLoginContent