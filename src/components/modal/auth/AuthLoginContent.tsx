import React, { useState, createRef } from 'react'
import styled from 'styled-components'
// components
import CloseBtn from './CloseBtn'
import Logo from './Logo'
import UserAccountInput from './UserAccountInput'
import UserPasswordInput from './UserPasswordInput'
import AuthBtn from './AuthBtn'
import AuthSignUpBtn from './AuthSignUpBtn'
// lib
import media from '../../../lib/styles/media'
import * as authUtils from '../../../lib/utils/authUtils'

interface AuthLoginContentProps {
	onLogin(id: string, pw: string): void;
	onClose(): void;
	openSignUpContent(): void;
}
const AuthLoginContent = ({onLogin, onClose, openSignUpContent}: AuthLoginContentProps) => {
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
												onAction={onClick}
												ref={InputIdRef}
												placeholder="시그너스계정" />
			<UserPasswordInput userPw={userPw}
												 setUserPw={setUserPw}
												 onAction={onClick}
												 ref={InputPwRef}
												 placeholder="비밀번호" />
			<AuthBtn onClick={onClick} message="로그인" />
			<AuthSignUpBtn openSignUpContent={openSignUpContent} />
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