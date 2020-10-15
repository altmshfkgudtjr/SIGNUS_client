import React from 'react'
import styled from 'styled-components'
// components
import BoardInfo from 'components/board/BoardInfo'
import BoardInfoMobile from 'components/board/BoardInfoMobile'
import PostTextWrapper from 'components/post/PostTextWrapper'
import PostImageWrapper from 'components/post/PostImageWrapper'
// lib
import media from 'lib/styles/media'
// types
import { Post } from 'modules/newsfeed'

interface PostLayoutProps {
	boardName: string;
	imgSrc: string;
	posts: Post[]
};
const PostLayout = ({boardName, imgSrc, posts}: PostLayoutProps) => {
	const Posts = posts.map((post, idx) => {
		if (typeof post['img'] === 'number') {
			return <PostTextWrapper key={post['_id']['$oid']} post={post} />;
		} else {
			return <PostImageWrapper key={post['_id']['$oid']} post={post} />;
		}
	});

	return (
		<Container>
			<PostWrapper>
				<BoardInfo icon_src={imgSrc}
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
	width: 100%;
	flex-grow: 1;
`;

const PostWrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	gap: 1rem;
	grid-auto-rows: 200px;

	${media.small} {
		display: block;
	}
`;

export default PostLayout