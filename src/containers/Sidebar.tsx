import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
// components
import ContentWrapper from '../components/sidebar/ContentWrapper'
import Title from '../components/sidebar/Title'
import NoticeSideMenuItem from 'components/notice/NoticeSideMenuItem'
import Copyright from 'components/commons/Copyright'
// lib
import media, { mediaQuery } from '../lib/styles/media'
// modules
import { RootState } from 'store/index'

const Sidebar = () => {
	const noticeList = useSelector((state: RootState) => state.notice.noticeList);

	const notices = noticeList.map(
		(notice, idx) => {
			// 표시될 공지사항 최대개수: 4개
			if (idx === 4) return null;
			return (
				<NoticeSideMenuItem key={notice.id}
														noticeId={notice.id}
														message={notice.title}
														date={notice.date} />
			);
		}
	);

	return (
		<Container>
			<StickyWrapper>
				<ContentWrapper>
						<Title message="공지사항"></Title>
						{notices}
					</ContentWrapper>
	
				<ContentWrapper>
					<Title message="인기 키워드"></Title>
				</ContentWrapper>

				<Copyright />
			</StickyWrapper>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 300px;
	box-sizing: border-box;
	padding-left: 2rem;

	${media.large} {
		max-width: 240px;
	}
	${media.medium} {
		min-width: 280px;
	}
	${mediaQuery(1000)} {
		min-width: 240px;
	}
	${mediaQuery(996)} {
		display: none;
	}
`;

const StickyWrapper = styled.div`
	position: sticky;
	top: 60px;
	width: 100%;
`;

export default Sidebar