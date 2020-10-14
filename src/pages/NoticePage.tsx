import React from 'react'
import { Helmet } from "react-helmet-async"
// containers
import Header from 'containers/Header'
import Sidebar from 'containers/Sidebar'
import Notice from 'containers/Notice'
// components
import NoticeLayout from 'components/notice/NoticeLayout'

const NoticePage = () => {
	return (
		<>
			<Helmet>
				<title>SIGNUS - 공지사항</title>
			</Helmet>

			<Header />
			<NoticeLayout>
				<Notice />
				<Sidebar />
			</NoticeLayout>
		</>
	);
}

export default NoticePage