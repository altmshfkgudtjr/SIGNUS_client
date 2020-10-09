import React from 'react'
import { Route } from 'react-router-dom'
// containers
import Header from '../containers/Header'
import Sidebar from '../containers/Sidebar'
import Board from '../containers/Board'
// components
import BoardLayout from '../components/board/BoardLayout'

const NewsfeedPage = () => {
	return (
		<>
			<Header></Header> 
			<BoardLayout>
				<Board newsfeed={
					<>
						<Route path="/" exact />
						<Route path="/best" exact />
						<Route path="/newsfeed/:mode(university|award|group|job)" exact />
					</>
				} />
				<Sidebar />
			</BoardLayout>
		</>
	);
}

export default NewsfeedPage