import React from 'react'
import styled from 'styled-components'
// components
import OriginCopyright from 'components/commons/Copyright'
// lib
import media from 'lib/styles/media'

const Copyright = () => {
	return <Container><OriginCopyright /></Container>;
}

const Container = styled.div`
	${media.small} {
		padding-top: 100px;
	}
`;

export default Copyright