import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: relative;
	width: auto;
	flex-grow: 1;
`;

type PostLayoutProps = {
	newsfeed: React.ReactNode
};

const PostLayout = ({newsfeed}: PostLayoutProps) => {
	return <Container>
		{newsfeed}
	</Container>;
}

export default PostLayout