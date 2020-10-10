import React, { useState, createRef } from 'react'
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
import * as authUtils from '../../../lib/utils/authUtils'

interface AuthLoginContentProps {
	onLogin(id: string, pw: string): void;
	onClose(): void;
}
const AuthLoginContent = ({onLogin, onClose}: AuthLoginContentProps) => {
	const [userId, setUserId] = useState<string>('');
	const [userPw, setUserPw] = useState<string>('');
	const InputIdRef: React.RefObject<HTMLInputElement> = createRef();
	const InputPwRef: React.RefObject<HTMLInputElement> = createRef();

	const onClick = () => {
		if (!authUtils.emptyChecker(userId) && InputIdRef.current) {
			console.log("\n%c[Snackbar]", 'color: #ff9800', "ID를 입력해주십시오.", "\n\n");
			InputIdRef.current.focus();
			return;
		} else if (!authUtils.emptyChecker(userPw) && InputPwRef.current) {
			console.log("\n%c[Snackbar]", 'color: #ff9800', "PW를 입력해주십시오.", "\n\n");
			InputPwRef.current.focus();
			return;
		}
		onLogin(userId, userPw);
	}

	return (
		<Container>
			<CloseBtn onClose={onClose} />
			<Logo />
			<UserAccountInput userId={userId}
												setUserId={setUserId}
												onLogin={onClick}
												ref={InputIdRef} />
			<UserPasswordInput userPw={userPw}
												 setUserPw={setUserPw}
												 onLogin={onClick}
												 ref={InputPwRef} />
			<LoginBtn onClick={onClick} />
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