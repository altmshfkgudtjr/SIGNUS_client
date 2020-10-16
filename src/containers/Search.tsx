import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
// components
import SearchOptionWrapper from 'components/search/SearchOptionWrapper'
import SearchPostWrapper from 'components/search/SearchPostWrapper'
// modules
import { RootState } from 'store/index'

interface SearchProps {
	keyword: string
};
const Search = ({keyword}: SearchProps) => {
	// const dispatch = useDispatch();
	const posts = useSelector((state: RootState) => state.search.posts);

	useEffect(() => {
		window.scrollTo(0,0);
	}, []);

	return (
		<>
			<SearchOptionWrapper />
			<SearchPostWrapper posts={posts} />
		</>
	);
}

export default Search