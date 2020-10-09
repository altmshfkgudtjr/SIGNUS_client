import React from 'react'
import styled from 'styled-components'
// components
import LinkBtn from './LinkBtn'
// lib
import * as styles from '../../../lib/styles/styles'
import palette from '../../../lib/styles/palette'

interface MenuLinkContentProps {
	onClose(): void;
}
const MenuLinkContent = ({onClose}: MenuLinkContentProps) => {
	return (
		<Container>
			<Title>메뉴</Title>
			<ItemWrapper>
				<LinkBtn to="/notice" message="공지사항" onClose={onClose} />
			</ItemWrapper>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 100%;
	padding-bottom: .5rem;
	border-bottom: 1px solid ${palette.gray1};
	margin-bottom: 1rem;
`;

const Title = styled.div`
	position: relative;
	font-size: 16px;
	font-weight: 600;
	color: ${palette.gray7};
	margin-bottom: 1rem;
	${styles.noselect}
`;

const ItemWrapper = styled.div`
	position: relative;
	width: 100%;
`;

export default MenuLinkContent