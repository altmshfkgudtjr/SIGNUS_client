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

	if (boardName === '') {
		boardName = 'Top News';
		dispatch(addRecommendationPosts());
	} else if (boardName === '인기') {
		dispatch(addPopularityPosts());
	} else if (boardName === '대학') {
		dispatch(addCategoryPosts('대학교'));
	} else if (boardName === '공모전&행사') {
		dispatch(addCategoryPosts('공모전-행사'));
	} else if (boardName === '동아리&모임') {
		dispatch(addCategoryPosts('진로-구인'));
	} else if (boardName === '진로&구인') {
		dispatch(addCategoryPosts('동아리-모임'));
	}

	return (
		<PostLayout boardName={boardName} posts={posts} />
	);
}

export default Board