import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const Copyright = () => {
	const text = `© SIGNUS, 2020\nAll Rights Reserved. ver.1031`;

	return <Content>{text}</Content>;
}

const Content = styled.div`
	position: relative;
	font-size: 12px;
	color: ${palette.gray4};
	white-space: pre-wrap;
	margin-bottom: 1rem;
`;

export default Copyright