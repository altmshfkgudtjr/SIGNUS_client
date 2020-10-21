import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

interface PostTitleProps {
	message: string
}
const PostTitle = ({message}: PostTitleProps) => {
	return <Content>{message}</Content>;
}

const Content = styled.div`
	position: relative;
	width: 100%;
	max-height: 72px;
	font-weight: 600;
	line-height: 20px;
	margin-bottom: 4px;
	word-break: keep-all;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;

	${media.xsmall} {
		word-break: break-all;
	}
`;

export default PostTitle