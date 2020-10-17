import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// components
import SearchOptionWrapper from 'components/search/SearchOptionWrapper'
import SearchPostWrapper from 'components/search/SearchPostWrapper'
import PostTextWrapper from 'components/post/PostTextWrapper'
import PostImageWrapper from 'components/post/PostImageWrapper'
import PostLoadingWrapper from 'components/post/PostLoadingWrapper'
// modules
import { searchKeyword, loadPosts } from 'modules/search'
import { RootState } from 'store/index'
// lib
import { throttle } from 'lib/lazyEvent'

interface SearchProps {
	keyword: string
};
const Search = ({keyword}: SearchProps) => {
	const dispatch = useDispatch();
	const posts = useSelector((state: RootState) => state.search.posts);
	const [loading, setLoading] = useState<boolean>(false);
	const userValid = useSelector((state: RootState) => state.auth.login);
	const userLikedPosts: string[] = useSelector((state: RootState) => state.auth.user.favList).map(post => post._id);

	const loadingCount = new Array(8).fill(undefined);
	const LoadingPosts = loadingCount.map(
		(node, idx) => <PostLoadingWrapper key={idx} />
	);

	const Posts = posts.map((post, idx) => {
		if (typeof post['img'] === 'number') {
			return <PostTextWrapper key={idx} 
															post={post} 
															userValid={userValid}
															userLikedPosts={userLikedPosts} />;
		} else {
			return <PostImageWrapper key={idx} 
															 post={post} 
															 userValid={userValid}
															 userLikedPosts={userLikedPosts} />;
		}
	});

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

	/* 페이지네이션 등록 & 검색 */
	/* eslint-disable */
	useEffect(() => {
		dispatch(searchKeyword(keyword));

		document.addEventListener('scroll', pagination);
		return () => {
			document.removeEventListener('scroll', pagination);
		}
	}, [dispatch, keyword]);
	/* eslint-enable */

	return (
		<>
			<SearchOptionWrapper />
			<SearchPostWrapper keyword={keyword}>
				{Posts}
				{loading && LoadingPosts}
			</SearchPostWrapper>
		</>
	);
}

export default Search