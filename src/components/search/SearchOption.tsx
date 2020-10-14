import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'

interface SearchOptionProps {
	title: string;
	children: React.ReactNode;
}
const SearchOption = ({title, children}: SearchOptionProps) => {
	return (
		<Container>
			<Title>{title}</Title>
			<ItemWrapper>
				{children}
			</ItemWrapper>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 100%;
	margin-top: 1rem;

	${media.small} {
		margin-top: .5rem;
	}
`;

const Title = styled.div`
	position: relative;
	width: 100%;
	line-height: 2rem;
	font-size: 14px;
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

export default SearchOption