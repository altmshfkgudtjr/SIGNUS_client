import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

interface PostLinkWrapperProps {
	postId: string;
	postUrl: string;
	onClick(): void;
	isList: boolean;
	children: React.ReactNode;
}
const PostLinkWrapper = ({postId, postUrl, onClick, children, isList}: PostLinkWrapperProps) => {
	return <Container isList={isList}
										onClick={onClick}
										href={postUrl}
										target="_blank"
										rel="noopener noreferrer">{children}</Container>;
}

interface ContainerStyled {
	isList: boolean;
}
const Container = styled.a<ContainerStyled>`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	padding: ${props => props.isList
		? '.5rem'
		: '1rem 1rem .5rem 1rem'
	};

	${media.small} {
		padding: ${props => props.isList
			? '0'
			: '.5rem 0'
		};
	}
`;

export default PostLinkWrapper