import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../../lib/styles/styles'
import palette from '../../../lib/styles/palette'
import media from '../../../lib/styles/media'

interface LogoutBtnProps {
	onClose(): void;
}
const LogoutBtn = ({onClose}: LogoutBtnProps) => {
	const onClick = () => {
		onClose();
	};

	return <Btn onClick={onClick}>로그아웃</Btn>;
};

const Btn = styled.div`
	position: relative;
	display: block;
	font-size: 14px;
	line-height: 24px;
	transition: .3s ${styles.transition};
	padding: 0 .5rem 0 0;
	border-left: 2px solid rgba(0,0,0,0);
	cursor: pointer;

	&:active,
	&:hover {
		padding: 0 0 0 .5rem;
		border-left: 2px solid ${palette.red4};
	}

	${media.small} {
		transition: .1s ${styles.transition};

		&:active,
		&:hover {
			padding: 0 .5rem 0 0;
			border-left: 2px solid rgba(0,0,0,0);
			background-color: ${palette.gray0};
		}
	}
`;

export default LogoutBtn