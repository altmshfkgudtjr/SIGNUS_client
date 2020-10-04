import React from 'react'
import styled from 'styled-components'
// components
import ContentWrapper from '../components/sidebar/ContentWrapper'
import Title from '../components/sidebar/Title'
// lib
import { mediaQuery } from '../lib/styles/media'

const Container = styled.div`
	position: relative;
	width: 300px;
	box-sizing: border-box;
	padding-left: 2rem;

	${mediaQuery(1000)} {
		width: 250px;
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