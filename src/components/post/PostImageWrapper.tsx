import React from 'react'
import styled from 'styled-components'
// components
import PostLinkWrapper from './PostLinkWrapper'
import PostImage from './PostImage'
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

interface PostImageWrapperProps {
	post: Post;
	userValid: boolean;
	userLikedPosts: string[];
};
const PostImageWrapper = ({post, userValid, userLikedPosts}: PostImageWrapperProps) => {
	/* 조회수 API 실행 */
	const onClick = () => {
		postAPI.PostView(post._id['$oid']);
	}

	return (
		<Container>
			<a href={post.url} target="_blank" rel="noopener noreferrer">
				<PostImage src={post.img} />
			</a>

			<PostLinkWrapper postId={post._id['$oid']} 
											 postUrl={post.url}
											 onClick={onClick}>
				<PostContentWrapper>
					<PostTitle message={post.title} />
					<PostBody message={post.post} />
					<PostDomain message={post.url} />
					
					<Blank />

					<PostDate date={post.date} endDate={post.end_date} />
				</PostContentWrapper>
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
	grid-row-end: span 2;
	display: flex;
	flex-direction: column;
	align-content: space-between;
	background-color: #FFF;
	box-shadow: ${styles.boxShadow.light};
	transition: .4s ${styles.transition};
	cursor: pointer;
	overflow: hidden;
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
		min-height: 300px;
		margin-bottom: 1rem;
	}
`;

const Blank = styled.div`
	flex-grow: 1;
`;

const PostContentWrapper = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-content: space-between;
	box-sizing: border-box;
`;

export default PostImageWrapper