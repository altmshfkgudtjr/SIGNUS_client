import React from 'react'
import styled from 'styled-components'
// components
import SearchKeywordInfo from 'components/search/SearchKeywordInfo'
// lib
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

interface SearchPostWrapperProps {
	keyword: string;
	children: React.ReactNode;
};
const SearchPostWrapper = ({keyword, children}: SearchPostWrapperProps) => {
	return (
		<Container>
			<SearchKeywordInfo keyword={keyword} />
			<PostWrapper>
				{children}
			</PostWrapper>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: auto;
	flex-grow: 1;

	${media.small} {
		margin-top: .5rem;
		border-top: .5rem solid ${palette.gray1};
	}
`;

const PostWrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	grid-gap: 1rem;
	grid-auto-rows: 200px;

	${media.small} {
		display: block;
	}
`;

export default SearchPostWrapper