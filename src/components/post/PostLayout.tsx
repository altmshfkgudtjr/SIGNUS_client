import React from 'react'
import styled from 'styled-components'
// components
import BoardInfo from '../board/BoardInfo'
import BoardInfoMobile from '../board/BoardInfoMobile'
import PostTextWrapper from '../post/PostTextWrapper'
import PostImageWrapper from '../post/PostImageWrapper'
// lib
import media from '../../lib/styles/media'
// modules
import { Post } from '../../modules/newsfeed'

interface PostLayoutProps {
	boardName: string;
	posts: Post[]
};
const PostLayout = ({boardName, posts}: PostLayoutProps) => {
	const Posts = posts.map((post, idx) => {
		if (typeof post['img'] === 'number') {
			return <PostTextWrapper post={post} />;
		} else {
			return <PostImageWrapper post={post} />;
		}
	});

	return (
		<Container>
			<PostWrapper>
				<BoardInfo icon_src="/icons/1x/home.png"
									 small_info="뉴스피드"
									 large_info={boardName} />
				<BoardInfoMobile small_info="뉴스피드"
												 large_info={boardName} />
				{Posts}
			</PostWrapper>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: auto;
	flex-grow: 1;
`;

const PostWrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	grid-gap: 1rem;
	grid-auto-rows: 200px;

	${media.small} {
		display: block;
	}
`;

export default PostLayout