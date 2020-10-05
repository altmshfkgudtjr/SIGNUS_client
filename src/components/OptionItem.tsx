import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../lib/styles/styles'
import palette from '../lib/styles/palette'

interface ContainerStyled {
   selected: boolean;
}
const Container = styled.div<ContainerStyled>`
	flex-grow: 1;
	position: relative;
	height: 2rem;
	display: inline-block;
	cursor: pointer;
	transition: .3s ${styles.transition};
	
	&:active,
	&:hover {
		& > div {
			background-color: ${palette.teal4};
		}
		& > span {
			color: inherit;
		}
	}

	${props => props.selected && `
		& > div {
			background-color: ${palette.teal4}
		}
		& > span {
			color: inherit
		}
	`};
`;

const Icon = styled.div`
	position: relative;
	display: inline-block;
	width: 8px;
	height: 8px;
	border-radius: 8px;
	margin: 12px 0;
	vertical-align: top;
	background-color: ${palette.gray3};
	margin-right: 1rem;
	transition: .2s ${styles.transition};
`;

const Message = styled.span`
	position: relative;
	font-size: 14px;
	line-height: 2rem;
	transition: .2s ${styles.transition};
	color: ${palette.gray3};
`;

type OptionItemProps = {
	message: string,
	onClick: ()=> void,
	selected: boolean
};

const OptionItem = ({message, onClick, selected}: OptionItemProps) => {
	return (
		<Container onClick={onClick} selected={selected}>
			<Icon />
			<Message>{message}</Message>
		</Container>
	);
}

export default OptionItem