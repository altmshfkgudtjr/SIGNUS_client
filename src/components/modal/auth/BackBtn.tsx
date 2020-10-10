import React from 'react'
import styled from 'styled-components'
// lib
import media from '../../../lib/styles/media'

interface BackBtnProps {
	onClose(): void;
}
const BackBtn = ({onClose}: BackBtnProps) => {
	return (
		<Btn onClick={onClose}>
			<Icon src='/icons/1x/back.png' alt="뒤로가기" />
		</Btn>
	);
}

const Btn = styled.div`
	position: relative;
	width: 20px;
	height: 40px;
	margin-bottom: 1rem;
	cursor: pointer;

	&:active,
	&:hover {
		filter: invert(61%) sepia(19%) saturate(7010%) hue-rotate(122deg) brightness(94%) contrast(86%);
	}

	${media.small} {
		display: block;
	}
`;

const Icon = styled.img`
	position: relative;
	width: 20px;
	height: 20px;
	padding: 10px 0;
`;

export default BackBtn