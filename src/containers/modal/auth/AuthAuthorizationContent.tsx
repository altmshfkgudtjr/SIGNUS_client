import React, { useState, createRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// components
import BackBtn from 'components/modal/auth/BackBtn'
import AuthHeaderWrapper from 'components/modal/auth/AuthHeaderWrapper'
import AuthInfoTitle from 'components/modal/auth/AuthInfoTitle'
import UserAccountInput from 'components/modal/auth/UserAccountInput'
import UserPasswordInput from 'components/modal/auth/UserPasswordInput'
import AuthBtn from 'components/modal/auth/AuthBtn'
// lib
import media from 'lib/styles/media'
import * as authUtils from 'lib/utils/authUtils'
// modules
import { initSnackbar } from 'modules/snackbar'

interface AuthLoginContentProps {
	onCertification(id: string, pw: string): void;
	openLoginContent(): void;
}
const AuthAuthorizationContent = ({onCertification, openLoginContent}: AuthLoginContentProps) => {
	const dispatch = useDispatch();
	const [userId, setUserId] = useState<string>('');
	const [userPw, setUserPw] = useState<string>('');
	const [userIdValid, setUserIdValid] = useState<boolean>(true);
	const [userPwValid, setUserPwValid] = useState<boolean>(true);
	const InputIdRef: React.RefObject<HTMLInputElement> = createRef();
	const InputPwRef: React.RefObject<HTMLInputElement> = createRef();

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

		onCertification(userId, userPw);
	}

	return (
		<Container>
			<AuthHeaderWrapper>
				<BackBtn onClose={openLoginContent} />
				<AuthInfoTitle message="세종대학교학생 인증" />
			</AuthHeaderWrapper>
			<UserAccountInput userId={userId}
												setUserId={setUserId}
												onAction={onClick}
												ref={InputIdRef}
												placeholder="학번"
												valid={userIdValid} />
			<UserPasswordInput userPw={userPw}
												 setUserPw={setUserPw}
												 onAction={onClick}
												 ref={InputPwRef}
												 placeholder="비밀번호"
												 valid={userPwValid} />
			<AuthBtn onClick={onClick} message="인증" />
			<Info>포탈 학번 및 비밀번호 정보는 저장되지 않으며, 회원가입 시 최초 1회 사용됩니다.</Info>
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

const Info = styled.div`
	position: relative;
	font-size: 14px;
	margin-top: auto;

	${media.small} {
		margin-top: 3rem;
	}
`;

export default AuthAuthorizationContent