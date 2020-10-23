import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// components
import NoticeSideMenu from 'components/notice/NoticeSideMenu'
import NoticeList from 'components/notice/NoticeList'
// modules
import { RootState } from 'store/index'

const Notice = () => {
	const dispatch = useDispatch();
	const noticeList = useSelector((state: RootState) => state.notice.noticeList);
	const isAdmin = useSelector((state: RootState) => state.auth.admin);

	/* 공지사항 목록 API 호출 */
	useEffect(() => {
		window.scrollTo(0,0);
	}, [dispatch]);

	return (
		<>
			<NoticeSideMenu info="Notice List"
											noticeList={noticeList} />
			<NoticeList noticeList={noticeList}
									isAdmin={isAdmin} />
		</>
	);
}

export default Notice