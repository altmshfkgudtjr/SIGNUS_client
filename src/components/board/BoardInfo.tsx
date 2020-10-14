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
};
const BoardInfo = ({icon_src, small_info, large_info}: BoardInfoProps) => {
	return (
		<Container>
			<PageInfo icon_src={icon_src}
								small_info={small_info}
								large_info={large_info} />

			<OptionWrapper title="보기">
				<OptionItem message="격자" onClick={() => {}} selected={true} />
				<OptionItem message="목록" onClick={() => {}} selected={false} />
			</OptionWrapper>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	grid-row-end: span 1;

	${media.small} {
		display: none;
	}
`;

export default BoardInfo