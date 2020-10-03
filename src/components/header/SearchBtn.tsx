import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: relative;
	width: 40px;
	height: 40px;
	cursor: pointer;
`;

const Icon  = styled.img`
	position: relative;
	width: 24px;
	height: 24px;
	padding: 8px;

	&:active,
	&:hover {
		filter: invert(61%) sepia(19%) saturate(7010%) hue-rotate(122deg) brightness(94%) contrast(86%);
	}
`;

const SearchBtn = () => {
	return <Container>
		<Icon src="/icons/1x/search.png" alt="검색" />
	</Container>;
}

export default SearchBtn