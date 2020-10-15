import React from 'react'
import styled from 'styled-components'
// components
import PageInfo from 'components/commons/PageInfo'
import NoticeSideMenuTitle from 'components/notice/NoticeSideMenuTitle'
import NoticeSideMenuItem from 'components/notice/NoticeSideMenuItem'
import NoticeSideMenuMoreBtn from 'components/notice/NoticeSideMenuMoreBtn'
// lib
import media from 'lib/styles/media'
// types
import { Notice as NoticeType } from 'modules/notice'

interface NoticeSideMenuProps {
	info: string;
	noticeList: NoticeType[];
}
const NoticeSideMenu = ({info, noticeList}: NoticeSideMenuProps) => {
	const notices = noticeList.map(
		notice => <NoticeSideMenuItem key={notice.id}
																	noticeId={notice.id}
																	message={notice.title}
																	date={notice.date} />
	);

	return (
		<Container>
			<InfoContainer>
				<PageInfo icon_src="/icons/1x/message.png"
									small_info="공지사항"
									large_info={info} />
			</InfoContainer>
			
			<NoticeListWrapper>
				<NoticeSideMenuTitle />
				<ItemContainer>
					{notices}
				</ItemContainer>
				<NoticeSideMenuMoreBtn />
			</NoticeListWrapper>

		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 300px;
	min-width: 300px;
	padding-right: 2rem;

	${media.small} {
		width: 100%;
		padding-right: 0;
	}
`;

const InfoContainer = styled.div`
	position: relative;
	width: 100%;
	margin: auto;

	${media.small} {
		width: 95%;
		margin: 0 auto .5rem auto;
	}
`;

const NoticeListWrapper = styled.div`
	position: relative;

	${media.small} {
		display: none;
	}
`;

const ItemContainer = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 2rem;
`;

export default NoticeSideMenu