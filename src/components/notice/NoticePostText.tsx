import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

interface NoticePostTextProps {
	text: string;
}
const NoticePostText = ({text}: NoticePostTextProps) => {
	return <Container>{text}</Container>;
}

const Container = styled.div`
	margin: 4rem 0 1rem 0;
	word-break: keep-all;
	white-space: pre-wrap;
	padding-bottom: 4rem;
	border-bottom: 1px solid ${palette.gray3};

	${media.small} {
		margin: 4rem 0 2rem 0;
	}
`;

export default NoticePostText