import React from 'react'
import styled from 'styled-components'
// lib
import media from '../../lib/styles/media'

const Container = styled.div`
	position: relative;
	width: auto;
	height: 40px;
	margin-right: 1rem;
	cursor: pointer;

	&:active,
	&:hover {
		filter: invert(61%) sepia(19%) saturate(7010%) hue-rotate(122deg) brightness(94%) contrast(86%);
	}

	${media.small} {
		margin-right: .5rem;
	}
`;

const Icon  = styled.img`
	position: relative;
	width: 24px;
	height: 24px;
	padding: 8px;

	${media.small} {
		width: 18px;
		height: 18px;
		padding: 11px 7px;
	}
`;

const SearchBtn = () => {
	return <Container>
		<Icon src="/icons/1x/search.png" alt="검색" />
	</Container>;
}

export default SearchBtn