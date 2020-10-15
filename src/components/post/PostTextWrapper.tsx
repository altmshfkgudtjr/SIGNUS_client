import React from 'react'
import styled from 'styled-components'
// components
import PostTitle from './PostTitle'
import PostBody from './PostBody'
import PostDomain from './PostDomain'
import PostDate from './PostDate'
import PostControllWrapper from './PostControllWrapper'
import PostLikeBtn from './PostLikeBtn'
import PostShareBtn from './PostShareBtn'
// lib
import * as styles from '../../lib/styles/styles'
import media, { mediaValue } from '../../lib/styles/media'
// modules
import { Post } from '../../modules/newsfeed'

interface PostTextWrapperProps {
	post: Post;
};
const PostTextWrapper = ({post}: PostTextWrapperProps) => {
	return (
		<Container>
			<PostLink href={post.url} target="_blank">
				<PostTitle message={post.title} />
				<PostBody message={post.post} />
				<PostDomain message={post.url} />
				
				<Blank />

				<PostDate date={post.date} endDate={post.end_date} />
			</PostLink>

			<PostControllWrapper>
				<PostLikeBtn like={post.fav_cnt} />				
				<PostShareBtn url={post.url} />				
			</PostControllWrapper>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-content: space-between;
	background-color: #FFF;
	width: 100%;
	box-shadow: ${styles.boxShadow.light};
	transition: .4s ${styles.transition};
	cursor: pointer;
	overflow: hidden;
	grid-row-end: span 1;
	border-radius: 4px;
	box-sizing: border-box;
	padding: .5rem;

	@media (min-width: ${mediaValue.small + 1}px) {
		&:hover,
		&:active {
			transform: translate(0, -4px);
			box-shadow: ${styles.boxShadow.regular};
		}
	}

	${media.small} {
		display: block;
		min-height: 150px;
		margin-bottom: 1rem;
	}
`;

const PostLink = styled.a`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`;

const Blank = styled.div`
	flex-grow: 1;
`;

export default PostTextWrapper