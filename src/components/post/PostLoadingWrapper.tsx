import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'
import animations from 'lib/styles/animations'

const PostLoadingWrapper = () => {
	return (
		<Container>
			<Image />
			<TextContainer>
				<Title />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</TextContainer>
		</Container>
	);
}

const Container = styled.div`
	grid-row-end: span 2;
	display: flex;
	flex-direction: column;
	background-color: #FFF;
	box-shadow: ${styles.boxShadow.light};
	border-radius: 4px;
	animation: ${animations.blink} 1.5s infinite ease-in-out;

	${media.small} {
		display: block;
		margin-bottom: 1rem;
	}
`;

const Image = styled.div`
	width: 100%;
	height: 222px;
	background-color: ${palette.gray1};

	${media.small} {
		display: none;
	}
`;

const TextContainer = styled.div`
	width: 100%;
	flex-grow: 1;
	box-sizing: border-box;
	padding: 1rem;
`;

const Title = styled.div`
	width: 60%;
	height: 1.2rem;
	border-radius: 4px;
	background-color: ${palette.gray0};
	margin-bottom: 1rem;
`;

const Post = styled.div`
	display: inline-block;
	width: 30%;
	height: 1rem;
	border-radius: 4px;
	background-color: ${palette.gray0};
	margin-bottom: .5rem;
	margin-right: .5rem;

	&:nth-child(3) {
		width: 20%;
	}

	&:nth-child(4) {
		width: 40%;
	}

	&:nth-child(5) {
		width: 70%;
	}

	&:nth-child(6) {
		width: 10%;
	}
`;

export default PostLoadingWrapper