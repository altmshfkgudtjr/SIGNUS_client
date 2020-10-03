import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Content = styled.img`
	position: relative;
	height: 40px;
	cursor: pointer;
`;

const Logo = () => {
	return (
		<Link to="/">
			<Content src="/images/logoSmall.png" alt="Logo" />
		</Link>
	);
}

export default Logo