import React from 'react'
import styled from 'styled-components'
// components
import PostLinkWrapper from './PostLinkWrapper'
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
// types
import { Post } from '../../modules/newsfeed'
// controllers
import * as postAPI from 'controllers/post'

interface PostTextWrapperProps {
	post: Post;
	userValid: boolean;
	userLikedPosts: string[];
};
const PostTextWrapper = ({post, userValid, userLikedPosts}: PostTextWrapperProps) => {
	/* 조회수 API 실행 */
	const onClick = () => {
		postAPI.PostView(post._id['$oid']);
	}

	return (
		<Container>
			<PostLinkWrapper postId={post._id['$oid']}
											 postUrl={post.url}
											 onClick={onClick}>
				<PostTitle message={post.title} />
				<PostBody message={post.post} />
				<PostDomain message={post.url} />
				
				<Blank />

				<PostDate date={post.date} endDate={post.end_date} />
			</PostLinkWrapper>

			<PostControllWrapper>
				<PostLikeBtn postId={post._id['$oid']}
										 like={post.fav_cnt}
										 userValid={userValid}
										 userLikedPosts={userLikedPosts} />				
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

const Blank = styled.div`
	flex-grow: 1;
`;

export default PostTextWrapper