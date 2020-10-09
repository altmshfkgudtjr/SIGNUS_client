import React from 'react'
import styled from 'styled-components'
// components
import BoardBtn from './BoardBtn'
// lib
import * as styles from '../../../lib/styles/styles'
import palette from '../../../lib/styles/palette'

interface MenuBoardContentProps {
	onClose(): void;
}
const MenuBoardContent = ({onClose}: MenuBoardContentProps) => {
	return (
		<Container>
			<Title>카테고리</Title>
			<ItemWrapper>
				<BoardBtn src="/icons/1x/home.png" to="/" message="홈" onClose={onClose}></BoardBtn>
				<BoardBtn src="/icons/1x/flame.png" to="/best" message="인기" onClose={onClose}></BoardBtn>
				<BoardBtn src="/icons/1x/graduate.png" to="/newsfeed/university" message="대학" onClose={onClose}></BoardBtn>
				<BoardBtn src="/icons/1x/award.png" to="/newsfeed/award" message="공모전&행사" onClose={onClose}></BoardBtn>
				<BoardBtn src="/icons/1x/group.png" to="/newsfeed/group" message="동아리&모임" onClose={onClose}></BoardBtn>
				<BoardBtn src="/icons/1x/job.png" to="/newsfeed/job" message="진로&구인" onClose={onClose}></BoardBtn>
			</ItemWrapper>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 1rem;
`;

const Title = styled.div`
	position: relative;
	font-size: 14px;
	font-weight: 600;
	color: ${palette.gray7};
	margin-bottom: 1rem;
	${styles.noselect}
`;

const ItemWrapper = styled.div`
	position: relative;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(33%, 1fr));
`;

export default MenuBoardContent