import React from 'react'
import styled from 'styled-components'
// components
import ContentWrapper from '../components/sidebar/ContentWrapper'
import Title from '../components/sidebar/Title'
// lib
import media, { mediaQuery } from '../lib/styles/media'

const Container = styled.div`
	position: relative;
	width: 300px;
	box-sizing: border-box;
	padding-left: 2rem;

	${media.large} {
		max-width: 240px;
	}
	${media.medium} {
		max-width: 300px;
	}
	${mediaQuery(1000)} {
		width: 240px;
	}
	${mediaQuery(960)} {
		display: none;
	}
`;

const StickyWrapper = styled.div`
	position: sticky;
	top: 60px;
	width: 100%;
`;

const Sidebar = () => {
	return (
		<Container>
			<StickyWrapper>
				<ContentWrapper>
						<Title message="공지사항"></Title>
					</ContentWrapper>
	
				<ContentWrapper>
					<Title message="인기 키워드"></Title>
				</ContentWrapper>
			</StickyWrapper>
		</Container>
	);
}

export default Sidebar