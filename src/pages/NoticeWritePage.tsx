import React from 'react'
import { Helmet } from "react-helmet-async"
// containers
import Header from 'containers/Header'
import NoticeWrite from 'containers/notice/NoticeWrite'

interface RouteProps {
	location: any;
}
const NoticeWritePage = ({location}: RouteProps) => {
	let noticeId: (string | null) = null;
	if (location.search !== "") {
		noticeId = location.search.slice(4);
	}
	
	return (
		<>
			<Helmet>
				<title>SIGNUS - 공지사항 작성</title>
			</Helmet>

			<Header />
			<NoticeWrite noticeId={noticeId} />
		</>
	);
}

export default NoticeWritePage