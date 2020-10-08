import React from 'react'
import styled from 'styled-components'
// lib
import palette from '../../../lib/styles/palette'
import media from '../../../lib/styles/media'

const Contour = () => {
	return <Line></Line>;
}

const Line = styled.div`
	position: relative;
	width: 2px;
	height: 100%;
	background-color: ${palette.gray0};

	${media.small} {
		display: none;
	}
`;

export default Contour