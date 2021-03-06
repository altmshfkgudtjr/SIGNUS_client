import React, { useState, useEffect, createRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// components
import BackBtn from 'components/modal/auth/BackBtn'
import AuthInfoTitle from 'components/modal/auth/AuthInfoTitle'
import Logo from 'components/modal/auth/Logo'
import UserAccountInput from 'components/modal/auth/UserAccountInput'
import UserPasswordInput from 'components/modal/auth/UserPasswordInput'
import AuthBtn from 'components/modal/auth/AuthBtn'
import AuthSignUpBtn from 'components/modal/auth/AuthSignUpBtn'
// lib
import media from 'lib/styles/media'
import * as authUtils from 'lib/utils/authUtils'
// modules
import { initSnackbar } from 'modules/snackbar'

interface AuthLoginContentProps {
	onLogin(id: string, pw: string): void;
	onClose(): void;
	openAuthorizationContent(): void;
}
const AuthLoginContent = ({onLogin, onClose, openAuthorizationContent}: AuthLoginContentProps) => {
	const dispatch = useDispatch();
	const [userId, setUserId] = useState<string>('');
	const [userPw, setUserPw] = useState<string>('');
	const [userIdValid, setUserIdValid] = useState<boolean>(true);
	const [userPwValid, setUserPwValid] = useState<boolean>(true);
	const InputIdRef: React.RefObject<HTMLInputElement> = createRef();
	const InputPwRef: React.RefObject<HTMLInputElement> = createRef();

	/* 자동 포커스 실행 */
	/* eslint-disable */
	useEffect(() => {
		if (InputIdRef.current) {
			InputIdRef.current.focus();
		}
	}, []);
	/* eslint-enable */

	const onClick = () => {
		if (!authUtils.emptyChecker(userId) && InputIdRef.current) {
			dispatch(initSnackbar("아이디를 입력해주세요.", "warning"));
			setUserIdValid(false);
			InputIdRef.current.focus();
			return;
		} else {
			setUserIdValid(true);
		}

		if (!authUtils.emptyChecker(userPw) && InputPwRef.current) {
			dispatch(initSnackbar("비밀번호를 입력해주세요.", "warning"));
			setUserPwValid(false);
			InputPwRef.current.focus();
			return;
		} else {
			setUserPwValid(true);
		}

		onLogin(userId, userPw);
	}

	return (
		<Container>
			<AuthHeaderWrapper>
				<BackBtn onClose={onClose} />
				<AuthInfoTitle message="로그인" />
			</AuthHeaderWrapper>
			<Logo />
			<UserAccountInput userId={userId}
												setUserId={setUserId}
												onAction={onClick}
												ref={InputIdRef}
												placeholder="시그너스계정"
												valid={userIdValid} />
			<UserPasswordInput userPw={userPw}
												 setUserPw={setUserPw}
												 onAction={onClick}
												 ref={InputPwRef}
												 placeholder="비밀번호"
												 valid={userPwValid} />
			<AuthBtn onClick={onClick} message="로그인" />
			<AuthSignUpBtn onClick={openAuthorizationContent} />
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 50%;
	box-sizing: border-box;
	padding: 1rem;

	${media.small} {
		width: 100%;
		padding: 0 1rem;
	}
	${media.xsmall} {
		padding: 0;
	}
`;

const AuthHeaderWrapper = styled.div`
	position: relative;
	display: none;
	margin-bottom: 1rem;

	${media.small} {
		display: flex;
	}
`;

export default AuthLoginContent