import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
// components
import PostLayout from '../components/post/PostLayout'
// modules
import { RootState } from '../store/index'
import { addRecommendationPosts, addPopularityPosts, addCategoryPosts } from '../modules/newsfeed'

interface BoardProps {
	boardName: string;
};
const Board = ({boardName}: BoardProps) => {
	const dispatch = useDispatch();
	const posts = useSelector((state: RootState) => state.newsfeed.posts);
	let imgSrc: string = '/icons/1x/home.png';

	if (boardName === '') {
		boardName = 'Top News';
		dispatch(addRecommendationPosts());
		imgSrc = '/icons/1x/home.png';
	} else if (boardName === '인기') {
		dispatch(addPopularityPosts());
		imgSrc = '/icons/1x/flame.png';
	} else if (boardName === '대학') {
		dispatch(addCategoryPosts('대학교'));
		imgSrc = '/icons/1x/graduate.png';
	} else if (boardName === '공모전&행사') {
		dispatch(addCategoryPosts('공모전-행사'));
		imgSrc = '/icons/1x/award.png';
	} else if (boardName === '동아리&모임') {
		dispatch(addCategoryPosts('진로-구인'));
		imgSrc = '/icons/1x/group.png';
	} else if (boardName === '진로&구인') {
		dispatch(addCategoryPosts('동아리-모임'));
		imgSrc = '/icons/1x/job.png';
	}

	return (
		<PostLayout boardName={boardName} imgSrc={imgSrc} posts={posts} />
	);
}

export default Board