import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Helmet, HelmetProvider } from "react-helmet-async"
// components
import PostLayout from '../components/post/PostLayout'
// modules
import { RootState } from '../store/index'
import { addRecommendationPosts, addPopularityPosts, addCategoryPosts } from '../modules/newsfeed'

interface BoardProps {
	newsfeed: React.ReactNode;
};
const Board = ({newsfeed}: BoardProps) => {
	const dispatch = useDispatch();
	const pathname = (window.location.pathname.split('/')[2] || window.location.pathname.split('/')[1]);
	let boardName = '', pagetitle = '';

	if (pathname === '') {
		boardName = 'Top News';
		pagetitle = '';
		dispatch(addRecommendationPosts());
	} else if (pathname === 'best') {
		boardName = '인기';
		pagetitle = ` - ${boardName}`;
		dispatch(addPopularityPosts());
	} else if (pathname === 'university') {
		boardName = '대학';
		pagetitle = ` - ${boardName}`;
		dispatch(addCategoryPosts('대학교'));
	} else if (pathname === 'award') {
		boardName = '공모전&행사';
		pagetitle = ` - ${boardName}`;
		dispatch(addCategoryPosts('공모전-행사'));
	} else if (pathname === 'group') {
		boardName = '동아리&모임';
		pagetitle = ` - ${boardName}`;
		dispatch(addCategoryPosts('진로-구인'));
	} else if (pathname === 'job') {
		boardName = '진로&구인';
		pagetitle = ` - ${boardName}`;
		dispatch(addCategoryPosts('동아리-모임'));
	}

	const posts = useSelector((state: RootState) => state.newsfeed.posts);

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>SIGNUS{pagetitle}</title>
				</Helmet>
			</HelmetProvider>
			{newsfeed}

			<PostLayout boardName={boardName} posts={posts} />
		</>
	);
}

export default Board