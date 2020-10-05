import React from 'react'
import styled from 'styled-components'
// lib
import media from '../../lib/styles/media'

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
		max-width: 100%;
	}
`;

type BoardLayoutProps = {
	children: any;
};

const BoardLayout = ({children}: BoardLayoutProps) => {
	return (
		<Layout>
			{children}
		</Layout>
	);
}

export default BoardLayout