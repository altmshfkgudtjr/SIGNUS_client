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
import * as styles from 'lib/styles/styles'
import media, { mediaValue } from 'lib/styles/media'
// types
import { Post } from 'modules/newsfeed'
// controllers
import * as postAPI from 'controllers/post'

interface PostImageWrapperProps {
	post: Post;
	userValid: boolean;
	userLikedPosts: string[];
	view: string;
};
const PostImageWrapper = ({post, userValid, userLikedPosts, view}: PostImageWrapperProps) => {
	const isList: boolean = (view === 'LIST');
	
	/* 조회수 API 실행 */
	const onClick = () => {
		postAPI.PostView(post._id['$oid']);
	}

	return (
		<Container isList={isList}>
			<Content isList={isList}>
				<a href={post.url} target="_blank" rel="noopener noreferrer">
					<PostImage src={post.img} isList={isList} />
				</a>

				<PostLinkWrapper postId={post._id['$oid']} 
												 postUrl={post.url}
												 onClick={onClick}
												 isList={isList}>
					<PostContentWrapper>
						<PostTitle message={post.title} />
						<PostBody message={post.post}
											isList={isList} />
						<PostDomain message={post.url} />
						
						<Blank />

						<PostDate date={post.date} endDate={post.end_date} />
					</PostContentWrapper>
				</PostLinkWrapper>
			</Content>

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
	grid-row-end: span 2;
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
		display: block;
		min-height: ${props => props.isList
			? 'auto'
			: '300px'
		};
		margin-bottom: 1rem;
		padding: .75rem .75rem 0 .75rem;
	}
`;

const Blank = styled.div`
	flex-grow: 1;
`;

interface ContentStyled {
	isList: boolean;
}
const Content = styled.div<ContentStyled>`
	display: flex;
	flex-grow: 1;
	flex-direction: ${props => props.isList
		? 'row'
		: 'column'
	};
`;

const PostContentWrapper = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-content: space-between;
	box-sizing: border-box;
`;

export default PostImageWrapper