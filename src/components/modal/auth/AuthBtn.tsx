import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../../lib/styles/styles'
import palette from '../../../lib/styles/palette'

interface AuthBtnProps {
	onClick(): void;
	message: string;
}
const AuthBtn = ({onClick, message}: AuthBtnProps) => {
	return <Btn onClick={onClick}>{message}</Btn>
}

export const Btn = styled.button`
	position: relative;
	width: 100%;
	height: 44px;
	font-size: 14px;
	line-height: 40px;
	margin: 2rem 0 1rem 0;
	border-radius: 4px;
	background-color: ${palette.teal4};
	cursor: pointer;
	color: #FFF;
	transition: .2s ${styles.transition};
	${styles.noselect}

	&:active,
	&:hover {
		background-color: ${palette.teal3};
	}
`;

export default AuthBtn