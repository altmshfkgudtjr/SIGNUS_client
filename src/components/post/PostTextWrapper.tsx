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
import * as styles from 'lib/styles/styles'
import media, { mediaValue } from 'lib/styles/media'
// types
import { Post } from 'modules/newsfeed'
// controllers
import * as postAPI from 'controllers/post'

interface PostTextWrapperProps {
	post: Post;
	userValid: boolean;
	userLikedPosts: string[];
	view: string;
};
const PostTextWrapper = ({post, userValid, userLikedPosts, view}: PostTextWrapperProps) => {
	const isList: boolean = (view === 'LIST');

	/* 조회수 API 실행 */
	const onClick = () => {
		postAPI.PostView(post._id['$oid']);
	}

	return (
		<Container isList={isList}>
			<PostLinkWrapper postId={post._id['$oid']}
											 postUrl={post.url}
											 onClick={onClick}
											 isList={isList}>
				<PostTitle message={post.title} />
				<PostBody message={post.post}
									isList={isList} />
				<PostDomain message={post.url} />
				
				<Blank />

				<PostDate date={post.date} endDate={post.end_date} />
			</PostLinkWrapper>

			<PostControllWrapper isList={isList}>
				<PostLikeBtn postId={post._id['$oid']}
										 like={post.fav_cnt}
										 userValid={userValid}
										 userLikedPosts={userLikedPosts}
										 isList={isList} />				
				<PostShareBtn url={post.url}
											isList={isList} />				
			</PostControllWrapper>
		</Container>
	);
}

interface ContainerStyled {
	isList: boolean;
}
const Container = styled.div<ContainerStyled>`
	position: relative;
	padding: ${props => props.isList
		? '.75rem'
		: '0'
	};
	display: flex;
	flex-direction: ${props => props.isList
		? 'row'
		: 'column'
	};
	align-content: space-between;
	background-color: #FFF;
	box-shadow: ${styles.boxShadow.light};
	transition: .4s ${styles.transition};
	cursor: pointer;
	overflow: hidden;
	grid-row-end: span 1;
	border-radius: 4px;
	box-sizing: border-box;
	${props => props.isList && `margin-bottom: 1rem`};

	@media (min-width: ${mediaValue.small + 1}px) {
		&:hover,
		&:active {
			transform: translate(0, -4px);
			box-shadow: ${styles.boxShadow.regular};
		}
	}

	${media.small} {
		flex-direction: column;
		min-height: 150px;
		margin-bottom: 1rem;
		padding: .75rem .75rem 0 .75rem;
	}
`;

const Blank = styled.div`
	flex-grow: 1;
`;

export default PostTextWrapper