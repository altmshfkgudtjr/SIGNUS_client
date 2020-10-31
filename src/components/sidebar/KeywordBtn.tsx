import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'
import * as styles from 'lib/styles/styles'

interface KeywordBtnProps {
	message: string;
}
const KeywordBtn = ({message}: KeywordBtnProps) => {
	return <Btn to={`/search?q=${message}`}>{message}</Btn>;
}

const Btn = styled(Link)`
	display: inline-block;
	margin: 0 1rem 1rem 0;
	padding: .5rem 1rem;
	background-color: ${palette.gray1};
	border-radius: 50px;
	transition: .1s ${styles.transition};
	box-shadow: ${styles.boxShadow.btn};

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
`;

export default KeywordBtn