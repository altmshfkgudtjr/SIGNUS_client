import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

interface NoticePostTitleProps {
	message: string;
}
const NoticePostTitle = ({message}: NoticePostTitleProps) => {
	const loading: boolean = message === '';

	return (
		<Container>
			{!loading && message}
			{loading && <Loading />}
		</Container>
	);
}

const Container = styled.div`
	font-size: 42px;
	margin-bottom: 2rem;
	word-break: keep-all;
	font-weight: 600;

	${media.small} {
		font-size: 28px;
		margin-bottom: 1rem;
	}
`;

const Loading = styled.div`
	display: inline-block;
	width: 80%;
	height: 42px;
	border-radius: 20px;
	background-color: ${palette.gray1};
`;

export default NoticePostTitle