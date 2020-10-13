import React, { useEffect, forwardRef } from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../../lib/styles/styles'
import palette from '../../../lib/styles/palette'

interface UserAccountInputProps {
	userId: string;
	setUserId: React.Dispatch<React.SetStateAction<string>>;
	onAction(): void;
	placeholder: string;
	valid: boolean;
	message?: string;
}
const UserAccountInput = forwardRef(({userId, setUserId, onAction, placeholder, valid, message}: UserAccountInputProps, ref: any) => {
	/* 자동 포커스 실행 */
	/* eslint-disable */
	useEffect(() => {
		if (ref.current) {
			ref.current.focus();
		}
	}, []);
	/* eslint-enable */

	const onKeyUp = (e: any) => {
		if (e.keyCode === 13) {
			onAction();
			return;
		}
		setUserId(e.target.value);
	};

	return (
		<Container>
			<Message>{message}</Message>
			<Input type='text'
								placeholder={placeholder}
								defaultValue={userId}
								onKeyUp={onKeyUp}
								ref={ref}
								maxLength={100}
								valid={valid} />
		</Container>
	);
});

const Container = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 20px;
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
	font-size: 12px;
	line-height: 12px;
	top: -2px;
	text-align: right;
	color: ${palette.gray4};
`;

export default UserAccountInput