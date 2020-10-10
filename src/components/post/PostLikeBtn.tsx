import React, { useState } from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'
import palette from '../../lib/styles/palette'
import animations from '../../lib/styles/animations'

interface PostLikeBtnProps {
	like: number
}
const PostLikeBtn = ({like}: PostLikeBtnProps) => {
	const [liked, setLiked] = useState<boolean>(false);
	const [likeCount, setLikeCount] = useState<number>(like);

	const onClick = () => {
		if (liked) {
			setLikeCount(likeCount - 1);
		} else {
			setLikeCount(likeCount + 1);
		}
		setLiked(!liked);
	}

	return (
		<Container onClick={onClick}>
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

const Container = styled.div`
	position: relative;
	width: 50%;
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