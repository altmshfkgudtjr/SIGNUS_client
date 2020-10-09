import React from 'react'
import styled from 'styled-components'
// lib
import palette from '../../lib/styles/palette'

interface PostControllWrapperProps {
	children: React.ReactNode
}
const PostControllWrapper = ({children}: PostControllWrapperProps) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	position: relative;
	flex-shrink: 0;
	display: flex;
	width: 100%;
	height: 40px;
	border-top: 1px solid ${palette.gray1};
	margin-top: .5rem;
`;

export default PostControllWrapper