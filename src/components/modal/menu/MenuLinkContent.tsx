import React from 'react'
import styled from 'styled-components'
// components
import BoardBtn from './BoardBtn'
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
`;

export default MenuLinkContent