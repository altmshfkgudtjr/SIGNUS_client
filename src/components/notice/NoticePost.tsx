import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

const NoticePost = () => {
	return (
		<Container></Container>
	);
}

const Container = styled.div`
	position: relative;
	width: auto;
	flex-grow: 1;

	${media.small} {
		margin-top: .5rem;
		border-top: .5rem solid ${palette.gray1};
	}
`;

export default NoticePost