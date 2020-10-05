import React from 'react'
import { Route } from 'react-router-dom'
// pages
import RecommendationPage from '../pages/newsfeed/RecommendationPage'
import PopularityPage from '../pages/newsfeed/PopularityPage'
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
				<PostLayout  newsfeed={
					<>
						<Route path="/" component={RecommendationPage} exact />
						<Route path="/best" component={PopularityPage} exact />
					</>
				}/>
				<Sidebar />
			</BoardLayout>
		</>
	);
}

export default NewsfeedPage