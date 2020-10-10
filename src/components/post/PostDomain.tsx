import React from 'react'
import styled from 'styled-components'
// lib
import palette from '../../lib/styles/palette'

interface PostDomainProps {
	message: string
}
const PostDomain = ({message}: PostDomainProps) => {
	const domain = message.startsWith('http')
										? message.split('/')[2]
										: message;

	return <Content>{domain}</Content>;
}

const Content = styled.div`
	position: relative;
	flex-shrink: 0;
	width: fit-content;
	line-height: 20px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 14px;
	color: ${palette.gray3};

	&:active,
	&:hover {
		color: ${palette.gray6};
		text-decoration: underline;
	}
`;

export default PostDomain