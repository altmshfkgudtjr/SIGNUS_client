import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

interface NoticeLayoutProps {
	children: React.ReactNode
};
const NoticeLayout = ({children}: NoticeLayoutProps) => {
	return (
		<Layout>
			{children}
		</Layout>
	);
}

const Layout = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	max-width: 1628px;
	min-height: 100vh;
	margin: 0 auto 200px auto;

	${media.xlarge} {
		max-width: 1396px;
	}
	${media.large} {
		max-width: 1232px;
	}
	${media.medium} {
		max-width: 95%;
	}
	${media.small} {
		display: block;
		max-width: 100%;
	}
`;

export default NoticeLayout