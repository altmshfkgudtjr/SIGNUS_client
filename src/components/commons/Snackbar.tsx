import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'
import media from '../../lib/styles/media'
import palette from '../../lib/styles/palette'
import animations from '../../lib/styles/animations'

interface SnackbarProps {
	onClick(e: any): void;
	message: string;
	type: string;
}
const Snackbar = ({onClick, message, type}: SnackbarProps)=> {
	return (
	  <Container id='snackbar' onClick={onClick} type={type}>
	  	<Content>
	  	  <Message>{message}</Message>
	  	</Content>
	  </Container>
	);
}

interface ContainerStyled {
   type: string;
}
const Container = styled.div<ContainerStyled>`
	position: relative;
	width: auto;
	height: auto;
	min-height: 2rem;
	max-height: 800px;
	background-color: ${ props => {
			if (props.type === 'success') {
				return palette.teal5;
			} else if (props.type === 'warning') {
				return palette.red4;
			} else if (props.type === 'error') {
				return palette.orange4;
			} else if (props.type === 'info') {
				return palette.gray7;
			} else {
				return palette.gray7;
			}
		}};
	box-shadow: ${styles.boxShadow.regular};
	border-radius: 4px;
	animation: ${animations.fadeInBottom} .3s cubic-bezier(0.25,0.1,0.25,1),
				${animations.fadeOut} .4s cubic-bezier(0.25,0.1,0.25,1) 3.8s;
	cursor: pointer;
	transition: .2s ${styles.transition};
	${styles.noselect};

	&:active {
		transform: scale(.97, .97);
	}

	${media.small} {
		width: 100%;
		min-height: 1.8rem;
	}
`;

const Content = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: auto;
	min-height: 2rem;
	box-sizing: border-box;
	padding: 12px 20px;
	vertical-align: top;

	${media.small} {
		min-height: 1.6rem;
		line-height: 1.6rem;
	}
`;

const Message = styled.div`
	position: relative;
	flex-grow: 1;
	color: #FFF;
	font-size: 14px;
	line-height: 20px;
	font-weight: 200;
	word-break: keep-all;
`;

export default Snackbar