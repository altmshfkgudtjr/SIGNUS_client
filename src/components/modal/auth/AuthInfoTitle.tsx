import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

interface AuthInfoTitleProps {
	message: string;
}
const AuthInfoTitle = ({message}: AuthInfoTitleProps) => {
	return <Content>{message}</Content>;
}

const Content = styled.div`
	position: relative;
	font-size: 18px;
	line-height: 28px;

	${media.small} {
		line-height: 26px;
	}
`;

export default AuthInfoTitle