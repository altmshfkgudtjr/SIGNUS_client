import React from 'react'
import styled from 'styled-components'
// components
import BoardInfo from '../board/BoardInfo'
import BoardInfoMobile from '../board/BoardInfoMobile'
import PostTextWrapper from '../post/PostTextWrapper'
import PostImageWrapper from '../post/PostImageWrapper'
// lib
import media from '../../lib/styles/media'

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

	${media.small} {
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
			<BoardInfoMobile small_info="뉴스피드"
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