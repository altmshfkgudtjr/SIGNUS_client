import React from 'react'
import styled from 'styled-components'
// lib
import { mediaValue } from 'lib/styles/media'

interface SearchOptionCloseBtnProps {
	onClick(): void;
}
const SearchOptionCloseBtn = ({onClick}: SearchOptionCloseBtnProps) => {
	return <Btn onClick={onClick} src="/icons/1x/close.png" alt="닫기" />;
}

const Btn = styled.img`
	position: absolute;
	width: 24px;
	height: 24px;
	padding: 8px;
	top: 0;
	right: .5rem;
	cursor: pointer;

	&:active,
	&:hover {
		filter: invert(61%) sepia(19%) saturate(7010%) hue-rotate(122deg) brightness(94%) contrast(86%);
	}

	@media (min-width: ${mediaValue.small + 1}px) {
		display: none;
	}
`;

export default SearchOptionCloseBtn