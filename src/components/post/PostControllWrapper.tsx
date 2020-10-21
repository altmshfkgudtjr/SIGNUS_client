import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

interface PostControllWrapperProps {
	children: React.ReactNode;
	isList: boolean;
}
const PostControllWrapper = ({children, isList}: PostControllWrapperProps) => {
	return <Container isList={isList}>{children}</Container>;
}

interface ContainerStyled {
	isList: boolean;
}
const Container = styled.div<ContainerStyled>`
	position: relative;
	display: flex;
	flex-direction: ${props => props.isList
		? 'column'
		: 'row'
	};
	min-width: ${props => props.isList
		? '140px'
		: '100%'
	};
	height: ${props => props.isList
		? 'auto'
		: '40px'
	};
	border-top: ${props => props.isList
		? 'none'
		: `1px solid ${palette.gray1}`
	};
	margin-left: ${props => props.isList
		? '1rem'
		: '0'
	};

	${media.small} {
		flex-direction: row;
		min-width: 100%;
		height: 40px;
		border-top: 1px solid ${palette.gray1};
		margin-left: 0;
		margin-top: .5rem;
	}
`;

export default PostControllWrapper