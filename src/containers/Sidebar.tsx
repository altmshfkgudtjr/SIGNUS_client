import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
// components
import ContentWrapper from '../components/sidebar/ContentWrapper'
import Title from '../components/sidebar/Title'
import NoticeSideMenuItem from 'components/notice/NoticeSideMenuItem'
import KeywordBtn from 'components/sidebar/KeywordBtn'
import Copyright from 'components/commons/Copyright'
import Email from 'components/commons/Email'
// lib
import media, { mediaQuery } from '../lib/styles/media'
// modules
import { RootState } from 'store/index'
import { getTopKeywords } from 'modules/search'
import { GetNoticeList } from 'modules/notice'

const Sidebar = () => {
	const dispatch = useDispatch();
	const noticeList = useSelector((state: RootState) => state.notice.noticeList);
	const keywordList = useSelector((state: RootState) => state.search.topKeywords);

	const notices = noticeList.map(
		(notice, idx) => {
			// 표시될 공지사항 최대개수: 4개
			if (idx >= 4) return null;
			return (
				<NoticeSideMenuItem key={notice.id}
														noticeId={notice.id}
														message={notice.title}
														date={notice.date} />
			);
		}
	);

	const keywords = keywordList.map(
		(keyword, idx) => {
			// 표시될 키워드 최대개수: 10개
			if (idx >= 10) return null;
			return (
				<KeywordBtn key={idx}
										message={keyword} />
			);
		}
	);

	/* 공지사항 리스트 호출 */
	useEffect(() => {
		dispatch(GetNoticeList());
		dispatch(getTopKeywords());
	}, [dispatch]);

	return (
		<Container>
			<StickyWrapper>
				<ContentWrapper>
						<Title message="공지사항"></Title>
						{notices}
					</ContentWrapper>
	
				<ContentWrapper>
					<Title message="인기 키워드"></Title>
					{keywords}
				</ContentWrapper>

				<Copyright />
				<Email />
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