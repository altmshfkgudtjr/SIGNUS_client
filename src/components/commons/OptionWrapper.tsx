import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'

const Container = styled.div`
	position: relative;
	width: 100%;
`;

const Title = styled.div`
	position: relative;
	width: 100%;
	line-height: 2rem;
	font-size: 12px;
	font-weight: 600;
	border-bottom: 1px solid #DDD;
	margin-bottom: .5rem;
	${styles.noselect}
`;

const ItemWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: space-around;
`;

type OptionWrapperProps = {
	title: string,
	children: React.ReactNode
};

const OptionWrapper = ({title, children}: OptionWrapperProps) => {
	return (
		<Container>
			<Title>{title}</Title>
			<ItemWrapper>
				{children}
			</ItemWrapper>
		</Container>
	);
}

export default OptionWrapper