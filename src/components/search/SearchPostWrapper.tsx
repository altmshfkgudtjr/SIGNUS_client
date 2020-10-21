import React from 'react'
import styled from 'styled-components'
// components
import SearchKeywordInfo from 'components/search/SearchKeywordInfo'
import EmptyContent from 'components/search/EmptyContent'
// lib
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

interface SearchPostWrapperProps {
	keyword: string;
	view: string;
	empty: boolean;
	loading: boolean;
	children: React.ReactNode;
};
const SearchPostWrapper = ({keyword, view, empty, loading, children}: SearchPostWrapperProps) => {
	return (
		<Container>
			<SearchKeywordInfo keyword={keyword} />
			{!loading && empty && <EmptyContent />}
			<PostWrapper isList={view === 'LIST'}>
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

interface PostWrapperStyled {
	isList: boolean;
}
const PostWrapper = styled.div<PostWrapperStyled>`
	position: relative;
	display: ${props => props.isList
		? 'block'
		: 'grid'
	};
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	grid-gap: 1rem;
	grid-auto-rows: 200px;

	${media.small} {
		display: block;
	}
`;

export default SearchPostWrapper