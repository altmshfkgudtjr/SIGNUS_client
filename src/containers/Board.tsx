import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// components
import PostLayout from '../components/post/PostLayout'
import BoardInfo from 'components/board/BoardInfo'
import BoardInfoMobile from 'components/board/BoardInfoMobile'
import PostTextWrapper from 'components/post/PostTextWrapper'
import PostImageWrapper from 'components/post/PostImageWrapper'
import PostLoadingWrapper from 'components/post/PostLoadingWrapper'
// modules
import { RootState } from '../store/index'
import { addRecommendationPosts, addPopularityPosts, addCategoryPosts, loadPosts } from '../modules/newsfeed'
// lib
import { throttle } from 'lib/lazyEvent'

interface BoardProps {
	boardName: string;
};
const Board = ({boardName}: BoardProps) => {
	const dispatch = useDispatch();
	const posts = useSelector((state: RootState) => state.newsfeed.posts);
	const [imgSrc, setImgSrc] = useState<string>('/icons/1x/home.png');
	const [loading, setLoading] = useState<boolean>(true);

	const Posts = posts.map((post, idx) => {
		if (typeof post['img'] === 'number') {
			return <PostTextWrapper key={post['_id']['$oid']} post={post} />;
		} else {
			return <PostImageWrapper key={post['_id']['$oid']} post={post} />;
		}
	});

	const loadingCount = new Array(8).fill(undefined);
	const LoadingPosts = loadingCount.map(
		(node, idx) => <PostLoadingWrapper key={idx} />
	);

	useEffect(() => {
		if (Posts.length === 0) {
			setLoading(true);
		} else {
			setLoading(false);
		}
	}, [Posts]);

	/* 페이지네이션 함수 */
	const pagination = useCallback(throttle(async () => {
		const { scrollTop } =document.documentElement;
		const { scrollHeight } = document.body;
		const { innerHeight } = window;
		const scrollBottom = scrollHeight - innerHeight - scrollTop;

		if (loading || scrollBottom === 0) {
			return;
		}

		if (scrollBottom < 1000) {
			setLoading(true);
			await dispatch(loadPosts());
			setLoading(false);
		}
	}, 100), [loading]);

	/* 페이지네이션 등록 */
	useEffect(() => {
		window.scrollTo(0,0);

		document.addEventListener('scroll', pagination);
		return () => {
			document.removeEventListener('scroll', pagination);
		}
	});

	/* 게시판 정보 설정 */
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
		<PostLayout>
			<BoardInfo icon_src={imgSrc}
								 small_info="뉴스피드"
								 large_info={boardName} />
			<BoardInfoMobile small_info="뉴스피드"
											 large_info={boardName} />
			{Posts}

			{loading && LoadingPosts}
		</PostLayout>
	);
}

export default Board