import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
// lib
import * as styles from '../../../lib/styles/styles'
import palette from '../../../lib/styles/palette'
import media from '../../../lib/styles/media'

interface LinkBtnProps {
	to: string;
	message: string;
	onClose(): void;
}
const LinkBtn = ({to, message, onClose}: LinkBtnProps) => {
	return <Content to={to} onClick={onClose}>{message}</Content>;
}

const Content = styled(Link)`
	position: relative;
	display: block;
	font-size: 14px;
	line-height: 30px;
	transition: .3s ${styles.transition};
	padding: 0 .5rem 0 0;
	border-left: 2px solid rgba(0,0,0,0);
	margin-bottom: .5rem;

	&:active,
	&:hover {
		padding: 0 0 0 .5rem;
		border-left: 2px solid ${palette.teal4};
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

export default LinkBtn