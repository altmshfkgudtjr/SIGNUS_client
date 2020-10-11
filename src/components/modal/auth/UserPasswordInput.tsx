import React, { forwardRef } from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../../lib/styles/styles'
import palette from '../../../lib/styles/palette'

interface UserPasswordInputProps {
	userPw: string;
	setUserPw: React.Dispatch<React.SetStateAction<string>>;
	onAction(): void;
	placeholder: string;
	valid: boolean;
	message?: string;
}
const UserPasswordInput = forwardRef(({userPw, setUserPw, onAction, placeholder, valid, message}: UserPasswordInputProps, ref: any) => {
	const onKeyUp = (e: any) => {
		if (e.keyCode === 13) {
			onAction();
			return;
		}
		setUserPw(e.target.value);
	};

	return (
		<Container>
			<Message>{message}</Message>
			<Input type='password' 
								placeholder={placeholder}
								onKeyUp={onKeyUp}
								defaultValue={userPw}
								ref={ref}
								maxLength={100}
								valid={valid} />
		</Container>
	);
});

const Container = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 1.2rem;
`;

interface InputStyled {
	defaultValue: string;
	valid: boolean;
}
const Input = styled.input<InputStyled>`
	position: relative;
	width: 100%;
	line-height: 36px;
	box-sizing: border-box;
	border-bottom: 2px solid ${props => props.valid
																				? props.defaultValue.length > 0 ? palette.teal4 : palette.gray1
																				: props.defaultValue.length > 0 ? palette.red4 : palette.red1
	};
	font-size: 14px;
	transition: .2s ${styles.transition};

	&::placeholder {
		color: ${palette.gray2};
	}

	&:focus {
		border-bottom: 2px solid ${props => props.valid
																					? palette.gray5
																					: palette.red4
		};
	}
`;

const Message = styled.div`
	position: absolute;
	width: 100%;
	font-size: 10px;
	line-height: 10px;
	top: -2px;
	text-align: right;
	color: ${palette.gray4};
`;

export default UserPasswordInput