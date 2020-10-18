import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

interface NoticeWriteLayoutProps {
	children: React.ReactNode
}
const NoticeWriteLayout = ({children}: NoticeWriteLayoutProps) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	position: relative;
	width: 100%;
	max-width: 800px;
	min-height: 100%;
	margin: 0 auto 200px auto;
	box-sizing: border-box;
	padding: 1rem;

	${media.small} {
		padding: .5rem;
	}
`;

export default NoticeWriteLayout