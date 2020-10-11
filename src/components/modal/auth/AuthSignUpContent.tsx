import React, { useState, createRef } from 'react'
import styled from 'styled-components'
// components
import BackBtn from './BackBtn'
import UserAccountInput from './UserAccountInput'
import UserPasswordInput from './UserPasswordInput'
import AuthBtn from './AuthBtn'
// lib
import media from '../../../lib/styles/media'
import * as authUtils from '../../../lib/utils/authUtils'

interface AuthSignUpContentProps {
	onSignUp(id: string, pw: string): void;
	openLoginContent(): void;
};
const AuthSignUpContent = ({onSignUp, openLoginContent}: AuthSignUpContentProps) => {
	const [userId, setUserId] = useState<string>('');
	const [userPw, setUserPw] = useState<string>('');
	const [userRePw, setUserRePw] = useState<string>('');
	const InputIdRef: React.RefObject<HTMLInputElement> = createRef();
	const InputPwRef: React.RefObject<HTMLInputElement> = createRef();
	const InputRePwRef: React.RefObject<HTMLInputElement> = createRef();

	/* 회원가입 실행 */
	const onClick = () => {
		if (!authUtils.emptyChecker(userId) && InputIdRef.current) {
			console.log("\n%c[Snackbar]", 'color: #ff9800', "ID를 입력해주십시오.", "\n\n");
			InputIdRef.current.focus();
			return;
		} else if (!authUtils.emptyChecker(userPw) && InputPwRef.current) {
			console.log("\n%c[Snackbar]", 'color: #ff9800', "PW를 입력해주십시오.", "\n\n");
			InputPwRef.current.focus();
			return;
		} else if (!authUtils.emptyChecker(userRePw) && InputRePwRef.current) {
			console.log("\n%c[Snackbar]", 'color: #ff9800', "PW 재확인을 입력해주십시오.", "\n\n");
			InputRePwRef.current.focus();
			return;
		}

		if (!authUtils.validationIdChecker(userId) && InputIdRef.current) {
			console.log("\n%c[Snackbar]", 'color: #ff9800', "ID가 유효하지않습니다.", "\n\n");
			InputIdRef.current.focus();
			return;
		} else if (!authUtils.validationPwChecker(userPw) && InputPwRef.current) {
			console.log("\n%c[Snackbar]", 'color: #ff9800', "PW가 유효하지않습니다.", "\n\n");
			InputPwRef.current.focus();
			return;
		} else if (!authUtils.validationRePwChecker(userPw, userRePw) && InputRePwRef.current) {
			console.log("\n%c[Snackbar]", 'color: #ff9800', "PW 재확인값이 유효하지않습니다.", "\n\n");
			InputRePwRef.current.focus();
			return;
		}

		onSignUp(userId, userPw);
	}

	return (
		<Container>
			<BackBtn onClose={openLoginContent} />
			<UserAccountInput userId={userId}
												setUserId={setUserId}
												onAction={onClick}
												ref={InputIdRef}
												placeholder="계정" />
			<UserPasswordInput userPw={userPw}
												 setUserPw={setUserPw}
												 onAction={onClick}
												 ref={InputPwRef}
												 placeholder="비밀번호" />
			<UserPasswordInput userPw={userRePw}
												 setUserPw={setUserRePw}
												 onAction={onClick}
												 ref={InputRePwRef}
												 placeholder="비밀번호 확인" />
			<AuthBtn onClick={onClick} message="가입하기" />
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

export default AuthSignUpContent