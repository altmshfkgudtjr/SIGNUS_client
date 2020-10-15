import React, { useState, useEffect } from 'react'
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
	const [imgSrc, setImgSrc] = useState<string>('/icons/1x/home.png');

	useEffect(() => {
		if (boardName === 'Top News') {
			dispatch(addRecommendationPosts());
			setImgSrc('/icons/1x/home.png');
		} else if (boardName === '인기') {
			dispatch(addPopularityPosts());
			setImgSrc('/icons/1x/flame.png');
		} else if (boardName === '대학') {
			dispatch(addCategoryPosts('대학교'));
			setImgSrc('/icons/1x/graduate.png');
		} else if (boardName === '공모전&행사') {
			dispatch(addCategoryPosts('공모전-행사'));
			setImgSrc('/icons/1x/award.png');
		} else if (boardName === '동아리&모임') {
			dispatch(addCategoryPosts('진로-구인'));
			setImgSrc('/icons/1x/group.png');
		} else if (boardName === '진로&구인') {
			dispatch(addCategoryPosts('동아리-모임'));
			setImgSrc('/icons/1x/job.png');
		}
	}, [boardName, dispatch]);

	return (
		<PostLayout boardName={boardName} imgSrc={imgSrc} posts={posts} />
	);
}

export default Board