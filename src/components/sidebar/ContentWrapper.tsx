import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: relative;
	width: 100%;
	min-height: 200px;
	margin-bottom: 1rem;
`;

type ContentWrapperProps = {
	children: React.ReactNode
}

const ContentWrapper = ({children}: ContentWrapperProps) => {
	return <Container>{children}</Container>;
}

export default ContentWrapper