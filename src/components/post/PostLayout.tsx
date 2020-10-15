import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

interface PostLayoutProps {
	children: React.ReactNode;
};
const PostLayout = ({children}: PostLayoutProps) => {
	return (
		<Container>
			<PostWrapper>
				{children}
			</PostWrapper>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 100%;
	flex-grow: 1;
`;

const PostWrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	gap: 1rem;
	grid-auto-rows: 200px;

	${media.small} {
		display: block;
	}
`;

export default PostLayout