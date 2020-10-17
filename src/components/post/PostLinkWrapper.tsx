import React from 'react'
import styled from 'styled-components'
// controllers
import * as postAPI from 'controllers/post'

interface PostLinkWrapperProps {
	postId: string;
	postUrl: string;
	children: React.ReactNode;
}
const PostLinkWrapper = ({postId, postUrl, children}: PostLinkWrapperProps) => {
	/* 조회수 API 실행 */
	const onClick = () => {
		postAPI.PostView(postId);
	}

	return <Container onClick={onClick}
										href={postUrl}
										target="_blank">{children}</Container>;
}

const Container = styled.a`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`;

export default PostLinkWrapper