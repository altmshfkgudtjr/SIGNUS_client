import React from 'react'
import styled from 'styled-components'
// components
import AuthInfoImage from './AuthInfoImage'
// lib
import media from '../../../lib/styles/media'

const AuthInfoContent = () => {
	return (
		<Container>
			<AuthInfoImage />
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 50%;

	${media.small} {
		display: none;
	}
`;

export default AuthInfoContent