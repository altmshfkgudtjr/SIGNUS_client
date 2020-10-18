import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

interface NoticeWriteSubmitBtnProps {
	onClick(): void;
	message: string;
}
const NoticeWriteSubmitBtn = ({onClick, message}: NoticeWriteSubmitBtnProps) => {
	return <Btn onClick={onClick}>{message}</Btn>;
}

const Btn = styled.button`
	display: block;
	margin-left: 2rem;
	padding: .5rem 1.5rem;
	background-color: ${palette.gray1};
	border-radius: 50px;
	transition: .1s ${styles.transition};
	box-shadow: ${styles.boxShadow.btn};
	font-size: 14px;

	&:hover {
		background-color: ${palette.gray2};
	}

	&:active {
		transform: translateY(4px);
		box-shadow: none;
		background-color: ${palette.teal2};
	}

	${media.small} {
		margin-left: 1rem;
	}
`;

export default NoticeWriteSubmitBtn