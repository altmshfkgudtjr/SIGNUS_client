import React from 'react'
import styled from 'styled-components'
// components
import NoticePostTitle from './NoticePostTitle'
import NoticePostInfo from './NoticePostInfo'
import NoticePostController from './NoticePostController'
import NoticePostText from './NoticePostText'
import NoticePostLinkBtn from './NoticePostLinkBtn'
// lib
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'
// types
import { Notice as NoticeType } from 'modules/notice'

interface NoticePostProps {
	notice: NoticeType;
	onEdit(): void;
	onDelete(): void;
}
const NoticePost = ({notice, onEdit, onDelete}: NoticePostProps) => {
	return (
		<Container>
			<NoticePostTitle message={notice.title} />
			{notice['valid'] && <NoticePostController onEdit={onEdit}
																								onDelete={onDelete} />}
			<NoticePostInfo userId={notice.author} date={notice.date} />
			<NoticePostText text={notice.post} />
			<NoticePostLinkBtn/>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	flex-grow: 1;

	${media.small} {
		margin-top: .5rem;
		border-top: .5rem solid ${palette.gray1};
		padding: 1rem;
	}
`;

export default NoticePost