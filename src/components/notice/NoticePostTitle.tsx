import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

interface NoticePostTitleProps {
	message: string;
}
const NoticePostTitle = ({message}: NoticePostTitleProps) => {
	return <Container>{message}</Container>;
}

const Container = styled.div`
	font-size: 38px;
	margin-bottom: 2rem;
	word-break: keep-all;

	${media.small} {
		font-size: 32px;
		margin-bottom: 1rem;
	}
`;

export default NoticePostTitle