import React, { useState, createRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// components
import BackBtn from './BackBtn'
import UserAccountInput from './UserAccountInput'
import UserPasswordInput from './UserPasswordInput'
import AuthBtn from './AuthBtn'
// lib
import media from '../../../lib/styles/media'
import * as authUtils from '../../../lib/utils/authUtils'
// modules
import { initSnackbar } from '../../../modules/snackbar'

interface AuthSignUpContentProps {
	onSignUp(id: string, pw: string): void;
	openLoginContent(): void;
};
const AuthSignUpContent = ({onSignUp, openLoginContent}: AuthSignUpContentProps) => {
	const dispatch = useDispatch();
	const [userId, setUserId] = useState<string>('');
	const [userPw, setUserPw] = useState<string>('');
	const [userRePw, setUserRePw] = useState<string>('');
	const [userIdValid, setUserIdValid] = useState<boolean>(true);
	const [userPwValid, setUserPwValid] = useState<boolean>(true);
	const [userRePwValid, setUserRePwValid] = useState<boolean>(true);
	const InputIdRef: React.RefObject<HTMLInputElement> = createRef();
	const InputPwRef: React.RefObject<HTMLInputElement> = createRef();
	const InputRePwRef: React.RefObject<HTMLInputElement> = createRef();

	/* 회원가입 실행 */
	const onClick = () => {
		const validationId = authUtils.validationIdChecker(userId);
		const validationPw = authUtils.validationPwChecker(userPw);

		if (!authUtils.emptyChecker(userId) && InputIdRef.current) {
			dispatch(initSnackbar("아이디를 입력해주세요.", "warning"));
			InputIdRef.current.focus();
			setUserIdValid(false);
			return;
		} else if (!validationId['valid'] && InputIdRef.current) {
			InputIdRef.current.focus();
			dispatch(initSnackbar("아이디를 다시 입력해주세요.", "warning"));
			setUserIdValid(false);
			
			if (validationId['type'] === 'TOO_SHORT') {

			} else if (validationId['type'] === 'TOO_LONG') {

			}

			return;
		} else {
			setUserIdValid(true);
		}

		if (!authUtils.emptyChecker(userPw) && InputPwRef.current) {
			dispatch(initSnackbar("비밀번호를 입력해주세요.", "warning"));
			InputPwRef.current.focus();
			setUserPwValid(false);
			return;
		} else if (!validationPw['valid'] && InputPwRef.current) {
			InputPwRef.current.focus();
			dispatch(initSnackbar("비밀번호를 다시 입력해주세요.", "warning"));
			setUserPwValid(false);
			
			if (validationPw['type'] === 'TOO_SHORT') {

			} else if (validationPw['type'] === 'TOO_LONG') {

			}

			return;
		} else {
			setUserPwValid(true);
		}

		if (!authUtils.emptyChecker(userRePw) && InputRePwRef.current) {
			dispatch(initSnackbar("비밀번호 확인을 입력해주세요.", "warning"));
			InputRePwRef.current.focus();
			setUserRePwValid(false);
			return;
		} else if (!authUtils.validationRePwChecker(userPw, userRePw) && InputRePwRef.current) {
			InputRePwRef.current.focus();
			dispatch(initSnackbar("비밀번호가 일치하지 않습니다.", "warning"));
			setUserRePwValid(false);
			
			return;
		} else {
			setUserRePwValid(true);
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
												placeholder="계정"
												valid={userIdValid}
												message="아이디 길이는 2글자 이상이여야 합니다." />
			<UserPasswordInput userPw={userPw}
												 setUserPw={setUserPw}
												 onAction={onClick}
												 ref={InputPwRef}
												 placeholder="비밀번호"
												 valid={userPwValid}
												 message="비밀번호 길이는 6글자 이상이여야 합니다." />
			<UserPasswordInput userPw={userRePw}
												 setUserPw={setUserRePw}
												 onAction={onClick}
												 ref={InputRePwRef}
												 placeholder="비밀번호 확인"
												 valid={userRePwValid} />
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