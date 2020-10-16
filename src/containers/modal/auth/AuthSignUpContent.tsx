import React, { useState, createRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// components
import BackBtn from 'components/modal/auth/BackBtn'
import UserAccountInput from 'components/modal/auth/UserAccountInput'
import UserPasswordInput from 'components/modal/auth/UserPasswordInput'
import AuthBtn from 'components/modal/auth/AuthBtn'
// lib
import media from 'lib/styles/media'
import * as authUtils from 'lib/utils/authUtils'
// modules
import { initSnackbar } from 'modules/snackbar'

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
		const idValidation = authUtils.validationIdChecker(userId);
		const pwValidation = authUtils.validationPwChecker(userPw);
		const rePwValidation = authUtils.validationRePwChecker(userPw, userRePw);

		if (!idValidation.valid) {
			if (idValidation.type === 'EMPTY') {
				dispatch(initSnackbar("아이디를 입력해주세요.", "warning"));
			} else if (idValidation.type === 'TOO_SHORT') {
				dispatch(initSnackbar("아이디가 너무 짧습니다.", "warning"));
			} else if (idValidation.type === 'TOO_LONG') {
				dispatch(initSnackbar("아이디가 너무 깁니다. (50자 이하)", "warning"));
			}

			if (InputIdRef.current) {
				InputIdRef.current.focus();
			}
			setUserIdValid(false);

			return;
		} else {
			setUserIdValid(true);
		}

		if (!pwValidation.valid) {
			if (pwValidation.type === 'EMPTY') {
				dispatch(initSnackbar("비밀번호를 입력해주세요.", "warning"));
			} else if (pwValidation.type === 'TOO_SHORT') {
				dispatch(initSnackbar("비밀번호가 너무 짧습니다.", "warning"));
			} else if (pwValidation.type === 'TOO_LONG') {
				dispatch(initSnackbar("비밀번호가 너무 깁니다. (100자 이하)", "warning"));
			}

			if (InputPwRef.current) {
				InputPwRef.current.focus();
			}
			setUserPwValid(false);

			return;
		} else {
			setUserPwValid(true);
		}

		if (!rePwValidation.valid) {
			if (rePwValidation.type === 'EMPTY') {
				dispatch(initSnackbar("비밀번호 확인을 입력해주세요.", "warning"));
				} else if (rePwValidation.type === 'DIFFERENCE') {
				dispatch(initSnackbar("비밀번호가 일치하지 않습니다.", "warning"));
			}

			if (InputRePwRef.current) {
				InputRePwRef.current.focus();
			}
			setUserRePwValid(false);

			return false;
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
												message="아이디는 2글자 이상이여야 합니다." />
			<UserPasswordInput userPw={userPw}
												 setUserPw={setUserPw}
												 onAction={onClick}
												 ref={InputPwRef}
												 placeholder="비밀번호"
												 valid={userPwValid}
												 message="비밀번호는 6글자 이상이여야 합니다." />
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