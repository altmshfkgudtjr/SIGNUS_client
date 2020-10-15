import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// components
import NoticePostInfo from './NoticePostInfo'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
// types
import { Notice as NoticeType } from 'modules/notice'

interface NoticeListItemProps {
	notice: NoticeType
}
const NoticeListItem = ({notice}: NoticeListItemProps) => {
	const post = notice.post.length > 100
									? notice.post.slice(0,100) + '...'
									: notice.post;
	return (
		<Container to={`/notice/${notice.id}`}>
			<Title>{notice.title}</Title>
			<Post>{post}</Post>
			<NoticePostInfo userId={notice.author} date={notice.date} />
		</Container>
	);
}

const Container = styled(Link)`
	display: block;
	width: 100%;
	box-sizing: border-box;
	padding: 1.5rem 1rem;
	border-bottom: 1px solid ${palette.gray2};
	transition: .3s ${styles.transition};

	&:active,
	&:hover {
		background-color: ${palette.gray1};
	}
`;

const Title = styled.div`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 1rem;
`;

const Post = styled.div`
	width: 100%;
	font-size: 14px;
	font-weight: 200;
	margin-bottom: 1rem;
`;

export default NoticeListItem