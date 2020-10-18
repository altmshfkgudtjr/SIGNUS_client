import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// components
import NoticePostInfo from './NoticePostInfo'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'
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

	${media.small} {
		width: 95%;
		border-bottom: none;
		box-shadow: ${styles.boxShadow.light};
		padding: 1rem .5rem;
		margin: .5rem auto 0 auto;
	}
`;

const Title = styled.div`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 1rem;

	${media.small} {
		font-size: 16px;
		margin-bottom: .5rem;
	}
`;

const Post = styled.div`
	width: 100%;
	font-size: 14px;
	font-weight: 200;
	margin-bottom: 1rem;

	${media.small} {
		margin-bottom: .5rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
`;

export default NoticeListItem