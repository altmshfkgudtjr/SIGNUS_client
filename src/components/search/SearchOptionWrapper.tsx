import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// components
import PageInfo from 'components/commons/PageInfo'
import BoardInfoMobile from 'components/board/BoardInfoMobile'
import SearchOptionBtn from 'components/search/SearchOptionBtn'
import SearchOption from 'components/search/SearchOption'
import SearchOptionItem from 'components/search/SearchOptionItem'
import SearchOptionCloseBtn from 'components/search/SearchOptionCloseBtn'
// lib
import palette from 'lib/styles/palette'
import media, { mediaValue } from 'lib/styles/media'

interface SearchOptionWrapperProps {
	sort: string;
	view: string;
	setSearchOptions(sort: string, view: string): void;
}
const SearchOptionWrapper = ({sort, view, setSearchOptions}: SearchOptionWrapperProps) => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [optionShow, setOptionShow] = useState<boolean>(true);

	const onChangeWindowWidth = () => {
		if (window.innerWidth <= mediaValue.small) {
			setOptionShow(false);
			setIsMobile(true);
		} else {
			setOptionShow(true);
			setIsMobile(false);
		}
	};

	useEffect(() => {
		onChangeWindowWidth();
		window.addEventListener('resize', onChangeWindowWidth);
		return () => {
			window.removeEventListener('resize', onChangeWindowWidth);
		}
	}, []);

	/* 모바일 옵션메뉴 Toggle */
	const optionToggle = () => {
		setOptionShow(!optionShow);
	}

	return (
		<Container>
			{!isMobile && <PageInfo icon_src="/icons/1x/search.png"
															small_info="검색"
															large_info="Search" />}
			<BoardInfoMobile small_info="검색"
											 large_info="Search"
											 view={view}
											 setViewGrid={() => { setSearchOptions(sort, 'GRID') }}
											 setViewList={() => { setSearchOptions(sort, 'LIST') }} />

			{!optionShow && <SearchOptionBtn onClick={optionToggle} />}
			
			{optionShow && <OptionContainer>
				{!isMobile && <SearchOption title="보기">
					<SearchOptionItem message="격자" 
														onClick={() => { setSearchOptions(sort, 'GRID') }} 
														selected={view==='GRID'}/>
					<SearchOptionItem message="목록"
														onClick={() => { setSearchOptions(sort, 'LIST') }}
														selected={view==='LIST'}/>
				</SearchOption>}

				<SearchOption title="정렬">
					<SearchOptionItem message="관련도순" 
														onClick={() => { setSearchOptions("RELEVEANCE", view,) }} 
														selected={sort==='RELEVEANCE'}/>
					<SearchOptionItem message="최신순" 
														onClick={() => { setSearchOptions("NEWEST", view) }}
														selected={sort==='NEWEST'}/>
				</SearchOption>

				<SearchOptionCloseBtn onClick={optionToggle} />
			</OptionContainer>}
			
			</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 300px;
	padding-right: 2rem;
	flex-shrink: 0;

	${media.small} {
		width: 100%;
		padding-right: 0;
	}
`;

const OptionContainer = styled.div`
	position: relative;

	${media.small} {
		width: 100%;
		box-sizing: border-box;
		padding: 0 1rem .5rem 1rem;
		border-top: 1px solid ${palette.gray2};
		border-bottom: 1px solid ${palette.gray2};
		outline: 1rem solid ${palette.gray1};
		margin: 1rem 0 1rem 0;
	}
`;

export default SearchOptionWrapper