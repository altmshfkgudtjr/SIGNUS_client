import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'
import { mediaQuery } from '../../lib/styles/media'

const Container = styled.div`
	position: relative;
	display: inline-block;
	background-color: #FFF;
	width: 100%;
	box-shadow: ${styles.boxShadow.light};
	transition: .3s ${styles.transition};
	cursor: pointer;
	overflow: hidden;
	grid-row-end: span 1;
	border-radius: 4px;

	&:hover,
	&:active {
		transform: translate(0, -10px);
		box-shadow: ${styles.boxShadow.regular};
	}

	${mediaQuery(702)} {
		margin-bottom: 1rem;
	}
`;

const PostTextWrapper = () => {
	return (
		<Container>
			
		</Container>
	);
}

export default PostTextWrapper