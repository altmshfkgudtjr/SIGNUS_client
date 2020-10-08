import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../../lib/styles/styles'
import palette from '../../../lib/styles/palette'

const UserAccountInput = () => {
	const InputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (InputRef.current) {
			InputRef.current.focus();
		}
	}, []);

	return <Input type='text'
								placeholder="시그너스계정"
								ref={InputRef}></Input>;
}

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