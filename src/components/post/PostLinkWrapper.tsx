import React from 'react'
import styled from 'styled-components'

interface PostLinkWrapperProps {
	postId: string;
	postUrl: string;
	onClick(): void;
	children: React.ReactNode;
}
const PostLinkWrapper = ({postId, postUrl, onClick, children}: PostLinkWrapperProps) => {
	return <Container onClick={onClick}
										href={postUrl}
										target="_blank"
										rel="noopener noreferrer">{children}</Container>;
}

const Container = styled.a`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	padding: .5rem;
`;

export default PostLinkWrapper