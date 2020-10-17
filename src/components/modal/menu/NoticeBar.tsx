import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
// lib
import * as styles from '../../../lib/styles/styles'
import palette from '../../../lib/styles/palette'
import animations from '../../../lib/styles/animations'
// type
import { Notice } from 'modules/notice'
import * as commonUtils from 'lib/utils/commonUtils'

interface NoticeBarProps {
	notice: (Notice | undefined);
	onClose(): void;
}
const NoticeBar = ({notice, onClose}: NoticeBarProps) => {
	const location = useLocation();

	const title = notice ? notice.title : "공지사항이 없습니다.";
	const link = notice ? `/notice/${notice.id}` : location.pathname;

	const onClick = () => {
		commonUtils.modalToggle(false);
		if (!notice || location.pathname === `/notice/${notice.id}`) {
			onClose();
		}
	}

	return (
		<Container to={link} onClick={onClick}>
			<Title>공지</Title>
			<MessageWrapper>
				<Message>{title}</Message>
			</MessageWrapper>
		</Container>
	);
}

const Container = styled(Link)`
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