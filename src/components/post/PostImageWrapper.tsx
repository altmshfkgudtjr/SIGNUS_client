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

interface PostImageWrapperProps {
	post: Post;
	userValid: boolean;
};
const PostImageWrapper = ({post, userValid}: PostImageWrapperProps) => {
	return (
		<Container>
			<PostLinkWrapper postId={post._id['$oid']} postUrl={post.url}>
				<PostImage src={post.img} />
				
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
										 userValid={userValid} />				
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
	padding: 0 .5rem .5rem .5rem;

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
	padding-top: .5rem;
`;

export default PostImageWrapper