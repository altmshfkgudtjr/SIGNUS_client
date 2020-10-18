import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

const NoticeWriteBtn = () => {
	return <Btn to="/notice/write">공지사항 쓰기</Btn>;
}

const Btn = styled(Link)`
	display: block;
	width: fit-content;
	margin: 0 0 1rem auto;
	padding: .5rem 1.5rem;
	background-color: ${palette.gray1};
	border-radius: 50px;
	transition: .1s ${styles.transition};
	box-shadow: ${styles.boxShadow.btn};
	font-size: 14px;

	&:last-child {
		margin-right: 0;
	}

	&:hover {
		background-color: ${palette.gray2};
	}

	&:active {
		transform: translateY(4px);
		box-shadow: none;
		background-color: ${palette.teal2};
	}

	${media.small} {
		position: fixed;
		width: auto;
		bottom: 1rem;
		right: 1rem;
	}
`;

export default NoticeWriteBtn