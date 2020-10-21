import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'
import palette from '../../lib/styles/palette'
import animations from '../../lib/styles/animations'
import media from 'lib/styles/media'
// controllers
import * as postAPI from 'controllers/post'
// modules
import { initSnackbar } from 'modules/snackbar'

interface PostLikeBtnProps {
	postId: string;
	like: number;
	userValid: boolean;
	userLikedPosts: string[];
	isList: boolean;
}
const PostLikeBtn = ({postId, like, userValid, userLikedPosts, isList}: PostLikeBtnProps) => {
	const dispatch = useDispatch();
	const [liked, setLiked] = useState<boolean>(userLikedPosts.indexOf(postId) !== -1);
	const [likeCount, setLikeCount] = useState<number>(like);

	/* 포스트 Like/UnLike API 실행 */
	const onClick = () => {
		if (!userValid) {
			dispatch(initSnackbar("로그인이 필요합니다.", "warning"));
			return;
		}

		setLiked(!liked);
		const currentLikeCount = likeCount;
		const currentLiked = liked;
		if (liked) {
			setLikeCount(likeCount - 1);
			postAPI.PostUnlike(postId).then(res => {
				if (!res) {
					dispatch(initSnackbar("잠시 후 다시 시도해주세요.", "error"));
					setLiked(currentLiked);
					setLikeCount(currentLikeCount);
				}
			});
		} else {
			setLikeCount(likeCount + 1);
			postAPI.PostLike(postId).then(res => {
				if (!res) {
					dispatch(initSnackbar("잠시 후 다시 시도해주세요.", "error"));
					setLiked(currentLiked);
					setLikeCount(currentLikeCount);
				}
			});
		}
	}

	return (
		<Container onClick={onClick} isList={isList}>
			<Content>
				{liked 
					? <Icon doLike={true} src="/icons/1x/like_filled.png" alt="좋아요 수" />
					: <Icon doLike={false} src="/icons/1x/like_empty.png" alt="좋아요 수" />
				}
				<Like>{likeCount}</Like>
			</Content>
		</Container>
	);
}

interface ContainerStyled {
	isList: boolean;
};
const Container = styled.div<ContainerStyled>`
	position: relative;
	width: ${props => props.isList
		? '100%'
		: '50%'
	};
	height: ${props => props.isList
		? '50%'
		: '100%'
	};
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: right;
	line-height: 20px;
	transition: .3s ${styles.transition};

	&:active,
	&:hover {
		background-color: ${palette.gray0};
	}

	${media.small} {
		width: 50%;
		height: 100%;
	}
`;

const Content = styled.div`
	position: relative;
`;

interface IconStyled {
   doLike: boolean;
}
const Icon = styled.img<IconStyled>`
	position: relative;
	vertical-align: top;
	width: 14px;
	height: 14px;
	padding: 4px 3px 2px 3px;
	animation: .3s ${props => props.doLike
										? animations.doLike
										: 'none'
	};
`;

const Like = styled.div`
	position: relative;
	display: inline-block;
	width: 20px;
	text-align: right;
	vertical-align: top;
	font-size: 14px;
	line-height: 20px;
`;

export default PostLikeBtn