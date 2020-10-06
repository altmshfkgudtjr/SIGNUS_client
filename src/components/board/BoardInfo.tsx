import React from 'react'
import styled from 'styled-components'
// components
import OptionWrapper from '../commons/OptionWrapper'
import OptionItem from '../commons/OptionItem'
// lib
import * as styles from '../../lib/styles/styles'
import media from '../../lib/styles/media'

const Container = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	grid-row-end: span 1;

	${media.small} {
		display: none;
	}
`;

const Content = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	margin-bottom: 55px;
	${styles.noselect}
`;

const Icon = styled.img`
	position: relative;
	width: 66px;
	height: 66px;
	margin-right: 1rem;
`;

const InfoWrapper = styled.div`
	position: relative;
	width: auto;
	flex-grow: 1;
`;

const SmallInfo = styled.div`
	position: relative;
	font-size: 14px;
	font-weight: 600;
	opacity: .5;
`;

const LargeInfo = styled.div`
	position: relative;
	font-size: 40px;
	font-weight: 600;
`;

type BoardInfoProps = {
	icon_src: string,
	small_info: string,
	large_info: string
};

const BoardInfo = ({icon_src, small_info, large_info}: BoardInfoProps) => {
	return (
		<Container>
			<Content>
				<Icon src={icon_src} alt="아이콘" />
				<InfoWrapper>
					<SmallInfo>{small_info}</SmallInfo>
					<LargeInfo>{large_info}</LargeInfo>
				</InfoWrapper>
			</Content>

			<OptionWrapper title="보기">
				<OptionItem message="격자" onClick={() => {}} selected={true} />
				<OptionItem message="목록" onClick={() => {}} selected={false} />
			</OptionWrapper>
		</Container>
	);
}

export default BoardInfo