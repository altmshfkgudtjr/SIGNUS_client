import React from 'react'
import { Route } from 'react-router-dom'
import { Helmet } from "react-helmet-async"
// containers
import Header from '../containers/Header'
import Sidebar from '../containers/Sidebar'
import Board from '../containers/Board'
// components
import BoardLayout from '../components/board/BoardLayout'

const NewsfeedPage = () => {
	const pathname = (window.location.pathname.split('/')[2] || window.location.pathname.split('/')[1]);
	let boardName = '', pagetitle = '';

	if (pathname === '') {
		boardName = 'Top News';
		pagetitle = '';
	} else if (pathname === 'best') {
		boardName = '인기';
		pagetitle = ` - ${boardName}`;
	} else if (pathname === 'university') {
		boardName = '대학';
		pagetitle = ` - ${boardName}`;
	} else if (pathname === 'award') {
		boardName = '공모전&행사';
		pagetitle = ` - ${boardName}`;
	} else if (pathname === 'group') {
		boardName = '동아리&모임';
		pagetitle = ` - ${boardName}`;
	} else if (pathname === 'job') {
		boardName = '진로&구인';
		pagetitle = ` - ${boardName}`;
	}

	return (
		<>
			<Helmet>
				<title>SIGNUS{pagetitle}</title>
			</Helmet>

			<Header />
			<BoardLayout>
				<Board boardName={boardName}/>
				<Sidebar />
			</BoardLayout>
		</>
	);
}

export default NewsfeedPage