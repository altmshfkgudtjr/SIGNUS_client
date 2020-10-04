import React from 'react'
import styled from 'styled-components'
// components
import BoardInfo from '../BoardInfo'
import PostTextWrapper from '../post/PostTextWrapper'
import PostImageWrapper from '../post/PostImageWrapper'
// lib
import { mediaQuery } from '../../lib/styles/media'

const Container = styled.div`
	position: relative;
	width: auto;
	flex-grow: 1;
`;

const PostWrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	grid-gap: 2rem;
	grid-auto-rows: 200px;

	${mediaQuery(702)} {
		display: block;
	}
`;

type PostLayoutProps = {
	newsfeed: React.ReactNode
};

const PostLayout = ({newsfeed}: PostLayoutProps) => {
	return <Container>
		{newsfeed}
		<PostWrapper>
			<BoardInfo icon_src="/icons/1x/home.png"
								 small_info="뉴스피드"
								 large_info="Top News" />
			<PostTextWrapper />
			<PostTextWrapper />
			<PostImageWrapper />
			<PostTextWrapper />
			<PostImageWrapper />
			<PostImageWrapper />
			<PostImageWrapper />
		</PostWrapper>
	</Container>;
}

export default PostLayout