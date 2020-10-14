import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'
import { mediaValue } from 'lib/styles/media'

interface SearchOptionBtn {
	onClick(): void;
}
const SearchOptionBtn = ({onClick}: SearchOptionBtn) => {
	return <Btn onClick={onClick}>검색옵션</Btn>;
}

const Btn = styled.button`
	position: relative;
	display: block;
	font-size: 14px;
	color: ${palette.gray4};
	margin-left: auto;
	margin-right: .5rem;

	@media (min-width: ${mediaValue.small + 1}px) {
		display: none;
	}
`;

export default SearchOptionBtn