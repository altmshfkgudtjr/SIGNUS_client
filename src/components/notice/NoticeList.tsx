import React from 'react'
import styled from 'styled-components'
// components
import NoticeListItem from 'components/notice/NoticeListItem'
import NoticeWriteBtn from 'components/notice/NoticeWriteBtn'
// lib
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'
// types
import { Notice as NoticeType } from 'modules/notice'

interface NoticeListProps {
	noticeList: NoticeType[];
	isAdmin: boolean;
}
const NoticeList = ({noticeList, isAdmin}: NoticeListProps) => {
	const noticeItems = noticeList.map(notice =>
		<NoticeListItem key={notice.id}
										notice={notice} />
	);

	return (
		<Container>
			{isAdmin && <NoticeWriteBtn />}
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
		border-top: 1px solid ${palette.gray2};
	}
`;

export default NoticeList