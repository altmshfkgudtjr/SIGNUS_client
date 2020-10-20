import React from 'react'
import styled from 'styled-components'
// lib
import animations from 'lib/styles/animations'
import palette from 'lib/styles/palette'

const Loading = () => {
	return (
		<Container>
			<Content />
		</Container>
	);
}

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(255,255,255,.85);
`;

const Content  = styled.div`
	position: relative;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 3px solid ${palette.teal4};
	border-left-color: #FFF;
	animation: ${animations.spin} 1s linear infinite;
`;

export default Loading