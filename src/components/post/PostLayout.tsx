import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

interface PostLayoutProps {
	children: React.ReactNode;
	view: string;
};
const PostLayout = ({children, view}: PostLayoutProps) => {
	return (
		<Container>
			<PostWrapper isList={view === 'LIST'}>
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

interface PostWrapperStyled {
	isList: boolean;
}
const PostWrapper = styled.div<PostWrapperStyled>`
	position: relative;
	display: ${props => props.isList
		? 'flex'
		: 'grid'
	};
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 2rem;
	grid-auto-rows: 200px;

	${media.small} {
		display: block;
	}
`;

export default PostLayout