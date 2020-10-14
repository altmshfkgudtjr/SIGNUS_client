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

const SearchOptionWrapper = () => {
	// const [view, setView] = useState<string>('GRID');				// or LIST
	const [type, setType] = useState<string>('RELEVEANCE');	// or NEWEST
	const [term, setTerm] = useState<string>('YEAR');				// or ALL
	const [optionShow, setOptionShow] = useState<boolean>(true);

	const onChangeWindowWidth = () => {
		if (window.innerWidth <= mediaValue.small) {
			setOptionShow(false);
		} else {
			setOptionShow(true);
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
			{optionShow && <PageInfo icon_src="/icons/1x/search.png"
																small_info="검색"
																large_info="Search" />}
			<BoardInfoMobile small_info="검색"
											 large_info="Search" />

			{!optionShow && <SearchOptionBtn onClick={optionToggle} />}
			
			{optionShow && <OptionContainer>
				<SearchOption title="설정">
					<SearchOptionItem message="관련도순" onClick={() => { setType('RELEVEANCE') }} 
														selected={type==='RELEVEANCE'}/>
					<SearchOptionItem message="최신순" onClick={() => { setType('NEWEST') }}
														selected={type==='NEWEST'}/>
				</SearchOption>

				<SearchOption title="기간">
					<SearchOptionItem message="1년 이내" onClick={() => { setTerm('YEAR') }} 
														selected={term==='YEAR'}/>
					<SearchOptionItem message="전체" onClick={() => { setTerm('ALL') }} 
														selected={term==='ALL'}/>
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

	${media.small} {
		width: 100%;
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