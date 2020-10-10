import React from 'react'
import styled from 'styled-components'

interface PostBodyProps {
	message: string
}
const PostBody = ({message}: PostBodyProps) => {
	const post = message.length < 45
								? message
								: message.slice(0, 45) + '...';

	return <Content>{post}</Content>;
}

const Content = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	font-size: 14px;
	line-height: 20px;
	overflow: hidden;
`;

export default PostBody