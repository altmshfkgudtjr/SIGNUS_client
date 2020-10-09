import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'

interface PostImageProps {
	src: string;
}
const PostImage = ({src}: PostImageProps) => {
	/* 이미지를 Load 하지 못했을 때, 실행 */
	const onError = {'action': (e: any) => {
		e.target.onerror = null;				// 무한 Trigger 방지
		e.target.src= Math.random()<0.5? "/images/logoBgSmall.png":"/images/logoSmall.png";
	}};

	return (
		<Container>
			<Img src={src} alt="Image"
					 onError={onError.action} />
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 232px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	${styles.noselect}
	&:hover,
	&:active {
		> img {
			transform: scale(1.4, 1.4);
		}
	}
`;

const Img = styled.img`
	position: relative;
	display: block;
	width: auto;
	max-height: 100%;
	transition: .5s ${styles.transition};
`;

export default PostImage