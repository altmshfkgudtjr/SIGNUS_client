import React from 'react'
import { Helmet } from "react-helmet-async"
// containers
import Header from 'containers/Header'
import Sidebar from 'containers/Sidebar'
import NoticeList from 'containers/NoticeList'
// components
import NoticeLayout from 'components/notice/NoticeLayout'

const NoticeListPage = () => {
	return (
		<>
			<Helmet>
				<title>SIGNUS - 공지사항 목록</title>
			</Helmet>

			<Header />
			<NoticeLayout>
				<NoticeList />
				<Sidebar />
			</NoticeLayout>
		</>
	);
}

export default NoticeListPage