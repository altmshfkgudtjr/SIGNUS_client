import React from 'react'
import styled from 'styled-components'
// components
import PostTextWrapper from 'components/post/PostTextWrapper'
import PostImageWrapper from 'components/post/PostImageWrapper'
// lib
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'
// types
import { Post } from 'modules/newsfeed'

interface SearchPostWrapperProps {
	posts: Post[]
};
const SearchPostWrapper = ({posts}: SearchPostWrapperProps) => {
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
				{Posts}
			</PostWrapper>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: auto;
	flex-grow: 1;

	${media.small} {
		margin-top: .5rem;
		border-top: .5rem solid ${palette.gray1};
	}
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

export default SearchPostWrapper