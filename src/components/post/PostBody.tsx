import React from 'react'
import styled from 'styled-components'

interface PostBodyProps {
	message: string;
	isList: boolean;
}
const PostBody = ({message, isList}: PostBodyProps) => {
	const post = message.length < 40
								? message
								: message.slice(0, 40) + '...';

	if (message === '0') {
		return null;
	}
	return <Content isList={isList}>{post}</Content>;
}

interface ContentStyled {
	isList: boolean;
}
const Content = styled.div<ContentStyled>`
	position: relative;
	width: 100%;
	height: auto;
	font-size: 14px;
	line-height: 20px;
	overflow: hidden;
	${props => props.isList
		? `display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;`
		: ''
	};
`;

export default PostBody