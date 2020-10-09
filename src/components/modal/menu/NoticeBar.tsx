import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../../lib/styles/styles'
import palette from '../../../lib/styles/palette'
import animations from '../../../lib/styles/animations'

const NoticeBar = () => {
	return (
		<Container>
			<Title>공지</Title>
			<MessageWrapper>
				<Message>시그너스 V1 업데이트 변경사항</Message>
			</MessageWrapper>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: 40px;
	border-radius: 4px;
	background-color: ${palette.gray1};
	box-sizing: border-box;
	padding: .5rem;
	margin-bottom: 1.5rem;
`;

const Title = styled.span`
	position: relative;
	font-size: 14px;
	line-height: 24px;
	color: ${palette.gray7};
	margin-right: 4px;
	${styles.noselect}
`;

const MessageWrapper = styled.div`
	position: relative;
	flex-grow: 1;
	width: auto;
	height: 24px;
	line-height: 24px;
	font-size: 14px;
	overflow: hidden;
	cursor: pointer;

	&:hover,
	&:active {
		& > div {
			text-decoration: underline;
			animation-play-state: paused;
		}
	}
`;

const Message = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	margin: 0;
	font-size: 14px;
	line-height: 24px;
	color: ${palette.teal4};
	text-align: center;
	transform: translateX(100%);
	animation: ${animations.noticeSlider} 15s linear infinite;
`;

export default NoticeBar