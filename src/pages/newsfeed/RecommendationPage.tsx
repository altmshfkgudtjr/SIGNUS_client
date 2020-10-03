import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async"

const RecommendationPage = ()=> {
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>SIGNUS</title>
				</Helmet>
			</HelmetProvider>
		</>
	);
}

export default RecommendationPage