import React from 'react'
import styled from 'styled-components'

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
`;

export default NoticePostTitle