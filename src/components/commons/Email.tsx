import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const Email = () => {
	const email = "signus.iml@gmail.com";

	return <Content href={`mailto:${email}`}>문의</Content>
}

const Content = styled.a`
	position: relative;
	font-size: 12px;
	color: ${palette.gray4};
	white-space: pre-wrap;

	&:active,
	&:hover {
		color: ${palette.gray7};
	}
`;

export default Email