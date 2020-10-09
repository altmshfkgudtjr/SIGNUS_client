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

const PostImageWrapper = () => {
	return (
		<Container>
			<PostImage src="" />
			
			<PostContentWrapper>
				<PostTitle message="청년 IT 프로토타입 공모전 <이노베이션 프로젝트> 참여팀 모집" />
				<PostBody message="지원자격 경력 신입·경력 학력 고졸이상 우대 기본 우대 21세(2000년 생)~35세(1986년... 생) 더보기 기본우대 21세 (2000년 생)~35세(1986년생), 컴퓨터 장인." />
				<PostDomain message="www.naver.com" />
				
				<Blank />

				<PostDate message="2020년 10월 9일" />
				<PostControllWrapper>
					<PostLikeBtn like={3} />				
					<PostShareBtn url="https://www.naver.com" />				
				</PostControllWrapper>
			</PostContentWrapper>
		</Container>
	);
}


const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: #FFF;
	width: 100%;
	box-shadow: ${styles.boxShadow.light};
	transition: .3s ${styles.transition};
	cursor: pointer;
	overflow: hidden;
	grid-row-end: span 2;
	border-radius: 4px;

	@media (min-width: 720px) {
		&:hover,
		&:active {
			transform: translate(0, -10px);
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