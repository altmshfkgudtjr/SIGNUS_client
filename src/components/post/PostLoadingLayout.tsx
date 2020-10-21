import React from 'react'
import styled from 'styled-components'

interface PostLoadingLayoutProps {
	children: React.ReactNode
}
const PostLoadingLayout = ({children}: PostLoadingLayoutProps) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	flex-grow: 1;
`;

export default PostLoadingLayout