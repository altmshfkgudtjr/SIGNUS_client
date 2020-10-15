import React from 'react'
import { Helmet } from "react-helmet-async"
// containers
import Header from 'containers/Header'
import Sidebar from 'containers/Sidebar'
import Search from 'containers/Search'
// components
import SearchLayout from 'components/search/SearchLayout'

interface RouteProps {
	location: any;
}
const SearchPage = ({location}: RouteProps) => {
	const keyword = decodeURI(location.search.slice(3));

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