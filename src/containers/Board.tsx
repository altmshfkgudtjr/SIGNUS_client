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
	const userValid = useSelector((state: RootState) => state.auth.login);
	const userLikedPosts: string[] = useSelector((state: RootState) => state.auth.user.favList).map(post => post._id);
	
	const [imgSrc, setImgSrc] = useState<string>('/icons/1x/home.png');
	const [loading, setLoading] = useState<boolean>(true);

	const Posts = posts.map((post, idx) => {
		if (typeof post['img'] === 'number') {
			return <PostTextWrapper key={post['_id']['$oid']} 
															post={post} 
															userValid={userValid}
															userLikedPosts={userLikedPosts} />;
		} else {
			return <PostImageWrapper key={post['_id']['$oid']} 
															 post={post} 
															 userValid={userValid}
															 userLikedPosts={userLikedPosts} />;
		}
	});

	const loadingCount = new Array(8).fill(undefined);
	const LoadingPosts = loadingCount.map(
		(node, idx) => <PostLoadingWrapper key={idx} />
	);

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
			Promise.resolve(dispatch(loadPosts())).then(() => {
				setLoading(false);
			});
		}
	}, 100), [loading]);

	/* 페이지네이션 등록 */
	useEffect(() => {
		document.addEventListener('scroll', pagination);
		return () => {
			document.removeEventListener('scroll', pagination);
		}
	}, [pagination]);

	/* 게시판 정보 설정 */
	useEffect(() => {
		setLoading(true);
		if (boardName === 'Top News') {
			Promise.resolve(dispatch(addRecommendationPosts()))
			.then(() => {
				setLoading(false);
			});
			setImgSrc('/icons/1x/home.png');
		} else if (boardName === '인기') {
			Promise.resolve(dispatch(addPopularityPosts()))
			.then(() => {
				setLoading(false);
			});
			setImgSrc('/icons/1x/flame.png');
		} else if (boardName === '대학') {
			Promise.resolve(dispatch(addCategoryPosts('대학교')))
			.then(() => {
				setLoading(false);
			});
			setImgSrc('/icons/1x/graduate.png');
		} else if (boardName === '공모전&행사') {
			Promise.resolve(dispatch(addCategoryPosts('공모전-행사')))
			.then(() => {
				setLoading(false);
			});
			setImgSrc('/icons/1x/award.png');
		} else if (boardName === '동아리&모임') {
			Promise.resolve(dispatch(addCategoryPosts('진로-구인')))
			.then(() => {
				setLoading(false);
			});
			setImgSrc('/icons/1x/group.png');
		} else if (boardName === '진로&구인') {
			Promise.resolve(dispatch(addCategoryPosts('동아리-모임')))
			.then(() => {
				setLoading(false);
			});
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