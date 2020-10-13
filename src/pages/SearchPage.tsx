import React from 'react'
import { Helmet } from "react-helmet-async"
import { useHistory } from 'react-router-dom';
import { Route } from 'react-router-dom'
// containers
import Header from 'containers/Header'
import Sidebar from 'containers/Sidebar'
import Search from 'containers/Search'
// components
import SearchLayout from 'components/search/SearchLayout'

const SearchPage = () => {
	const history = useHistory();
	const keyword = decodeURI(history.location.search.slice(3));

	return (
		<>
			<Helmet>
				<title>{`"${keyword}" - SIGNUS 검색결과`}</title>
			</Helmet>

			<Header />
			<SearchLayout>
				<Search keyword={keyword} />
				<Sidebar />
			</SearchLayout>
		</>
	);
}

export default SearchPage