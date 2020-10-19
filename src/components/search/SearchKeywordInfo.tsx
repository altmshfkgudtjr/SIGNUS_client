import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

interface SearchKeywordInfoProps {
	keyword: string;
};
const SearchKeywordInfo = ({keyword}: SearchKeywordInfoProps) => {
	return <Container>{`"${keyword}"에 대한 검색결과입니다.`}</Container>;
}

const Container = styled.div`
	width: 100%;
	padding-bottom: .5rem;
	border-bottom: 1px solid ${palette.gray2};
	margin-bottom: 1rem;
	word-break: keep-all;

	${media.small} {
		width: 95%;
		margin: 1rem auto .5rem auto;
		border-bottom: 1px solid rgba(0,0,0,0);
	}
`;

export default SearchKeywordInfo