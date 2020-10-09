import React from 'react'
import { Route } from 'react-router-dom'
// containers
import Header from '../containers/Header'
import Sidebar from '../containers/Sidebar'
// components
import BoardLayout from '../components/board/BoardLayout'
import PostLayout from '../components/post/PostLayout'

const NewsfeedPage = () => {
	return (
		<>
			<Header></Header> 
			<BoardLayout>
				<PostLayout newsfeed={
					<>
						<Route path="/" exact />
						<Route path="/best" exact />
						<Route path="/newsfeed/:mode(university|award|group|job)" exact />
					</>
				}/>
				<Sidebar />
			</BoardLayout>
		</>
	);
}

export default NewsfeedPage