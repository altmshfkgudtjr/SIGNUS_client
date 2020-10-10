import React from 'react'
import styled from 'styled-components'
// components
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
import media from '../../lib/styles/media'
// modules
import { Post } from '../../modules/newsfeed'

interface PostImageWrapperProps {
	post: Post;
};
const PostImageWrapper = ({post}: PostImageWrapperProps) => {
	return (
		<Container href={post.url} target="_blank">
			<PostImage src={post.img} />
			
			<PostContentWrapper>
				<PostTitle message={post.title} />
				<PostBody message={post.post} />
				<PostDomain message={post.url} />
				
				<Blank />

				<PostDate date={post.date} endDate={post.end_date} />
				<PostControllWrapper>
					<PostLikeBtn like={post.fav_cnt} />				
					<PostShareBtn url={post.url} />				
				</PostControllWrapper>
			</PostContentWrapper>
		</Container>
	);
}


const Container = styled.a`
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: #FFF;
	width: 100%;
	box-shadow: ${styles.boxShadow.light};
	transition: .4s ${styles.transition};
	cursor: pointer;
	overflow: hidden;
	grid-row-end: span 2;
	border-radius: 4px;

	@media (min-width: 703px) {
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
	position: relative;
	flex-grow: 1;
`;

const PostContentWrapper = styled.div`
	position: relative;
	width: 100%;
	flex-grow: 1;
	box-sizing: border-box;
	padding: .5rem;
`;

export default PostImageWrapper