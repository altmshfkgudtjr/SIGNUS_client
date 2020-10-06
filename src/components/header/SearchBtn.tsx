import React, { useCallback } from 'react'
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
		width: 20px;
		height: 20px;
		padding: 10px 7px;
	}
`;

type SearchBtnProps = {
	searchDisplay: boolean,
	setSearchDisplay: React.Dispatch<React.SetStateAction<boolean>>
};

const SearchBtn = ({searchDisplay, setSearchDisplay}: SearchBtnProps) => {
	const onClick = useCallback(() => {
		if (searchDisplay) {
			setSearchDisplay(false);
		} else {
			setSearchDisplay(true);
		}
	}, [searchDisplay, setSearchDisplay]);

	return (
		<Container onClick={onClick}>
			<Icon src="/icons/1x/search.png" alt="검색" />
		</Container>
	);
}

export default SearchBtn