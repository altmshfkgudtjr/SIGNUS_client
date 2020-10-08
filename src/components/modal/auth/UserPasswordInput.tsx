import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../../lib/styles/styles'
import palette from '../../../lib/styles/palette'

const UserPasswordInput = () => {
	return <Input type='password' placeholder="비밀번호"></Input>
}

const Input = styled.input`
	position: relative;
	width: 100%;
	line-height: 36px;
	box-sizing: border-box;
	padding: 0 4px;
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

export default UserPasswordInput