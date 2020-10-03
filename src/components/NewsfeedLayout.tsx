import React from 'react'
import styled from 'styled-components'
// lib
import media from '../lib/styles/media'

const Layout = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	max-width: 1728px;
	min-height: 100vh;
	margin: 0 auto 200px auto;

	${media.xlarge} {
		max-width: 1396px;
	}
	${media.large} {
		max-width: 1064px;
	}
	${media.medium} {
		max-width: 100%;
	}
`;

type NewsfeedLayoutProps = {
	children: any;
};

const NewsfeedLayout = ({children}: NewsfeedLayoutProps) => {
	return (
		<Layout>
			{children}
		</Layout>
	);
}

export default NewsfeedLayout