import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// lib
import media from '../../lib/styles/media'

const Content = styled.img`
	position: relative;
	height: 30px;
	padding: 5px;
	cursor: pointer;

	${media.small} {
		height: 28px;
		padding: 6px 0;
	}
`;

const Logo = () => {
	return (
		<Link to="/">
			<Content src="/images/logoSmall.png" alt="Logo" />
		</Link>
	);
}

export default Logo