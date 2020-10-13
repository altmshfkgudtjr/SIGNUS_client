import React from 'react'
// import { useDispatch } from 'react-redux';
// components
import SearchLayout from 'components/search/SearchLayout'
// modules
// import { RootState } from 'store/index'

interface SearchProps {
	keyword: string
};
const Search = ({keyword}: SearchProps) => {
	// const dispatch = useDispatch();

	return (
		<SearchLayout>
			
		</SearchLayout>
	);
}

export default Search