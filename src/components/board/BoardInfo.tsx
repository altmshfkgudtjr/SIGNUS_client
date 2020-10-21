import React from 'react'
import styled from 'styled-components'
// components
import PageInfo from 'components/commons/PageInfo'
import OptionWrapper from 'components/commons/OptionWrapper'
import OptionItem from 'components/commons/OptionItem'
// lib
import media from 'lib/styles/media'

interface BoardInfoProps {
	icon_src: string;
	small_info: string;
	large_info: string;
	view: string;
	setViewGrid(): void;
	setViewList(): void;
};
const BoardInfo = ({icon_src, small_info, large_info, view, setViewGrid, setViewList}: BoardInfoProps) => {
	return (
		<Container>
			<PageInfo icon_src={icon_src}
								small_info={small_info}
								large_info={large_info} />

			<OptionWrapper title="보기">
				<OptionItem message="격자" onClick={setViewGrid} selected={view === 'GRID'} />
				<OptionItem message="목록" onClick={setViewList} selected={view === 'LIST'} />
			</OptionWrapper>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	max-width: 300px;
	min-width: 300px;
	grid-row-end: span 1;

	${media.small} {
		display: none;
	}
`;

export default BoardInfo