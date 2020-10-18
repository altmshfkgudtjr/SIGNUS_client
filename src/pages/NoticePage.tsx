import React from 'react'
import { Helmet } from "react-helmet-async"
// containers
import Header from 'containers/Header'
import Sidebar from 'containers/Sidebar'
import Notice from 'containers/notice/Notice'
// components
import NoticeLayout from 'components/notice/NoticeLayout'

interface RouteProps {
	match: any;
}
const NoticePage = ({match}: RouteProps) => {
	const noticeId = match.params['noticeId']

	return (
		<>
			<Helmet>
				<title>SIGNUS - 공지사항</title>
			</Helmet>

			<Header />
			<NoticeLayout>
				<Notice noticeId={noticeId} />
				<Sidebar />
			</NoticeLayout>
		</>
	);
}

export default NoticePage