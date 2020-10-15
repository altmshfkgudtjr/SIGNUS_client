import React from 'react'
import styled from 'styled-components'
// components
import NoticeListItem from 'components/notice/NoticeListItem'
// lib
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'
// types
import { Notice as NoticeType } from 'modules/notice'

interface NoticeListProps {
	noticeList: NoticeType[];
}
const NoticeList = ({noticeList}: NoticeListProps) => {
	const noticeItems = noticeList.map(notice =>
		<NoticeListItem key={notice.id}
										notice={notice} />
	);

	return (
		<Container>
			{noticeItems}
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 100%;
	flex-grow: 1;

	${media.small} {
		margin-top: .5rem;
		border-top: .5rem solid ${palette.gray1};
		padding: 1rem;
	}
`;

export default NoticeList