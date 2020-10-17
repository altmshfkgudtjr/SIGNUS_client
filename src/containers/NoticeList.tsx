import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// components
import NoticeSideMenu from 'components/notice/NoticeSideMenu'
import NoticeList from 'components/notice/NoticeList'
// modules
import { RootState } from 'store/index'
import { GetNoticeList } from 'modules/notice'

const Notice = () => {
	const dispatch = useDispatch();
	const noticeList = useSelector((state: RootState) => state.notice.noticeList);
	
	/* 공지사항 목록 API 호출 */
	useEffect(() => {
		dispatch(GetNoticeList());
		window.scrollTo(0,0);
	}, [dispatch]);

	return (
		<>
			<NoticeSideMenu info="Notice List"
											noticeList={noticeList} />
			<NoticeList noticeList={noticeList} />
		</>
	);
}

export default Notice