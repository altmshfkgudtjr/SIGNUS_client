import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'

interface PostImageProps {
	src: (string | number);
	isList: boolean;
}
const PostImage = ({src, isList}: PostImageProps) => {
	const ImageSrc: string = String(src);

	/* 이미지를 Load 하지 못했을 때, 실행 */
	const onError = {'action': (e: any) => {
		e.target.onerror = null;				// 무한 Trigger 방지
		e.target.src = Math.random()<0.5? "/images/logoBgSmall.png":"/images/logoSmall.png";
	}};

	return (
		<Container isList={isList}>
			<Img src={ImageSrc} alt="Image"
					 onError={onError.action} />
		</Container>
	);
}

interface ContainerStyled {
	isList: boolean;
}
const Container = styled.div<ContainerStyled>`
	position: relative;
	width: ${props => props.isList
		? '108px'
		: '100%'
	};
	height: ${props => props.isList
		? '108px'
		: '204px'
	};
	margin-right: ${props => props.isList
		? '1rem'
		: '0'
	};
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	${styles.noselect}

	&:hover,
	&:active {
		> img {
			${props => props.isList
				? ''
				: 'transform: scale(.6, .6)'
			};
		}
	}

	& > img {
		max-width: 100%;
	}

	${media.small} {
		height: ${props => props.isList && '108px'};
	}
`;

const Img = styled.img`
	position: relative;
	display: block;
	height: auto;
	max-width: 100%;
	transition: .5s ${styles.transition};
`;

export default PostImage