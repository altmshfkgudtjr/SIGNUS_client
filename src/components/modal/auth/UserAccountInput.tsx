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
}
const UserAccountInput = forwardRef(({userId, setUserId, onAction, placeholder}: UserAccountInputProps, ref: any) => {
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

	return <Input type='text'
								placeholder={placeholder}
								defaultValue={userId}
								onKeyUp={onKeyUp}
								ref={ref}></Input>;
});

const Input = styled.input`
	position: relative;
	width: 100%;
	line-height: 36px;
	box-sizing: border-box;
	border-bottom: 2px solid ${palette.gray1};
	font-size: 14px;
	transition: .2s ${styles.transition};
	margin-bottom: 1rem;

	&::placeholder {
		color: ${palette.gray2};
	}

	&:focus {
		border-bottom: 2px solid ${palette.gray5};
	}
`;

export default UserAccountInput