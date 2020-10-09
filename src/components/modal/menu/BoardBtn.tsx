import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
// lib
import palette from '../../../lib/styles/palette'

interface BoardBtnProps {
	src: string;
	to: string;
	message: string;
	onClose(): void;
}
const BoardBtn = ({src, to, message, onClose}: BoardBtnProps) => {
	const onClick = () => {
		onClose();
	}

	return (
		<Content to={to} onClick={onClick}>
			<Icon src={src} alt={message} />
			<Message>{message}</Message>
		</Content>
	);
}

const Content = styled(Link)`
	position: relative;
	display: block;
	padding: .5rem;

	&:active,
	&:hover {
		* {
			opacity: 1;
			color: #000;
			filter: invert(61%) sepia(19%) saturate(7010%) hue-rotate(122deg) 
		}
	}
`;

const Icon = styled.img`
	position: relative;
	display: block;
	width: 32px;
	height: 32px;
	margin: auto;
	opacity: .7;
`;

const Message = styled.div`
	position: relative;
	width: 100%;
	text-align: center;
	font-size: 12px;
	font-weight: 400;
	line-height: 2rem;
	color: ${palette.gray7};
`;

export default BoardBtn