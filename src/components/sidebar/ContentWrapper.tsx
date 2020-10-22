import React from 'react'
import styled from 'styled-components'

interface ContentWrapperProps {
	children: React.ReactNode;
}
const ContentWrapper = ({children}: ContentWrapperProps) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	position: relative;
	width: 100%;
	min-height: 200px;
	margin-bottom: 2rem;
`;

export default ContentWrapper