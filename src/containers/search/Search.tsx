import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// components
import SearchOptionWrapper from 'components/search/SearchOptionWrapper'
import SearchPostWrapper from 'components/search/SearchPostWrapper'
import PostTextWrapper from 'components/post/PostTextWrapper'
import PostImageWrapper from 'components/post/PostImageWrapper'
import PostLoadingWrapper from 'components/post/PostLoadingWrapper'
// modules
import { searchKeyword, loadPosts, setOptions } from 'modules/search'
import { RootState } from 'store/index'
// lib
import { throttle } from 'lib/lazyEvent'

interface SearchProps {
	keyword: string
};
const Search = ({keyword}: SearchProps) => {
	const dispatch = useDispatch();
	const posts = useSelector((state: RootState) => state.search.posts);
	const userValid = useSelector((state: RootState) => state.auth.login);
	const userLikedPosts: string[] = useSelector((state: RootState) => state.auth.user.favList).map(post => post._id);
	const searchOptions = useSelector((state: RootState) => state.search.searchOptions);

	const [loading, setLoading] = useState<boolean>(true);
	const [empty, setEmpty] = useState<boolean>(false);

	const loadingCount = new Array(8).fill(undefined);
	const LoadingPosts = loadingCount.map(
		(node, idx) => <PostLoadingWrapper key={idx} view={searchOptions.view} />
	);

	/* 페이지 보기 방식 변경: board-view */
	/* eslint-disable */
	useEffect(() => {
		const searchView = window.localStorage.getItem('sv');

		if (!!searchView && (searchView === 'GRID' || searchView === 'LIST')) {
			dispatch(setOptions({view: searchView, sort: searchOptions.sort}));
		} else {
			window.localStorage.setItem('sv', searchOptions.view);
		}
	}, []);
	/* eslint-enable */

	const Posts = posts.map((post, idx) => {
		if (typeof post['img'] === 'number') {
			return <PostTextWrapper key={idx} 
															post={post} 
															userValid={userValid}
															userLikedPosts={userLikedPosts}
															view={searchOptions.view} />;
		} else {
			return <PostImageWrapper key={idx} 
															 post={post} 
															 userValid={userValid}
															 userLikedPosts={userLikedPosts}
															 view={searchOptions.view} />;
		}
	});

	/* 검색 옵션 변경 */
	const setSearchOptions = (sort: string, view: string) => {
		if (view === 'LIST') {
			window.localStorage.setItem('sv', "LIST");
		} else {
			window.localStorage.setItem('sv', "GRID");
		}
		dispatch(setOptions({sort, view}));
	}

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

	/* 검색 옵션 변경 재검색 */
	useEffect(() => {
		setEmpty(false);
		setLoading(true);
		Promise.resolve(dispatch(searchKeyword(keyword))).then(() => {
			setLoading(false);
		});
	}, [dispatch, searchOptions.sort, keyword]);

	/* 검색 결과가 없을 때 */
	useEffect(() => {
		if (posts.length === 0) {
			setEmpty(true);
		} else {
			setEmpty(false);
		}
	}, [posts]);

	return (
		<>
			<SearchOptionWrapper sort={searchOptions.sort}
													 view={searchOptions.view}
													 setSearchOptions={setSearchOptions} />
			<SearchPostWrapper keyword={keyword}
												 view={searchOptions.view}
												 empty={empty}
												 loading={loading}>
				{Posts}
				{loading && LoadingPosts}
			</SearchPostWrapper>
		</>
	);
}

export default Search