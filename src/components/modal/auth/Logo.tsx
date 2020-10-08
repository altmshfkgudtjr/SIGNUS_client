import React from 'react'
import styled from 'styled-components'
// lib
import media from '../../../lib/styles/media'
import * as styles from '../../../lib/styles/styles'

const Logo = () => {
	return (
		<Container>
			<Content src="/images/logoSmall.png" alt="Logo" />		
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	height: 32px;
	margin-bottom: 1rem;
	${styles.noselect}

	${media.small} {
		height: 28px;
	}
`;

const Content = styled.img`
	position: relative;
	height: 100%;
`;

export default Logo