import React from 'react'
import styled from 'styled-components'

interface NoticePostTextProps {
	text: string;
}
const NoticePostText = ({text}: NoticePostTextProps) => {
	return <Container>{text}</Container>;
}

const Container = styled.div`
	margin: 4rem 0;
	word-break: keep-all;
	white-space: pre-wrap;
`;

export default NoticePostText