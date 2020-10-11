import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'
import media from '../../lib/styles/media'
import palette from '../../lib/styles/palette'
import animations from '../../lib/styles/animations'

interface SnackbarProps {
	onClick(): void;
	message: string;
	type: string;
}
const Snackbar = ({onClick, message, type}: SnackbarProps)=> {
	let imgSrc: string = '/icons/1x/info.png';
	if (type === 'success') {
		imgSrc = '/icons/1x/success.png';
	} else if (type === 'error') {
		imgSrc = '/icons/1x/warning.png';
	} else if (type === 'warning') {
		imgSrc = '/icons/1x/warning.png';
	} else if (type === 'info') {
		imgSrc = '/icons/1x/info.png';
	} else {
		imgSrc = '/icons/1x/info.png';
		type = 'info';
	}

	return (
	  <Container onClick={onClick} type={type}>
	  	<Content>
	  	  <Icon src={imgSrc} alt={type} />
	  	  {message}
	  	</Content>
	  </Container>
	);
}

interface ContainerStyled {
   type: string;
}
const Container = styled.div<ContainerStyled>`
	position: relative;
	width: 300px;
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
	animation: ${animations.fadeInBottom} .4s cubic-bezier(0.25,0.1,0.25,1),
				${animations.fadeOutBottom} .5s cubic-bezier(0.25,0.1,0.25,1) 3.6s;
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
	display: inline-block;
	width: 100%;
	height: auto;
	min-height: 2rem;
	line-height: 2rem;
	box-sizing: border-box;
	padding: 12px 20px;
	color: white;
	font-size: .9rem;
	font-weight: 200;
	word-break: keep-all;
	vertical-align: top;

	${media.small} {
		min-height: 1.6rem;
		line-height: 1.6rem;
	}
`;

const Icon = styled.img`
	position: relative;
	width: 20px;
	height: 20px;
	margin-top: 5px;
	padding-right: 16px;
	line-height: 2rem;
	filter: invert(99%) sepia(1%) saturate(53%) hue-rotate(98deg) brightness(118%) contrast(100%);
	vertical-align: top;

	${media.small} {
		margin-top: .1rem;
	}
`;

export default Snackbar