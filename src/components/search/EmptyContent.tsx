import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'

const EmptyContent = () => {
	return (
		<Container>
			<Img src="/images/empty.png" alt="No Result" />
		</Container>
	);
}

const Container = styled.div`
	display: block;
	margin: 140px auto;
	${styles.noselect}

	${media.small} {
		margin: 100px auto;
	}
`;

const Img = styled.img`
	display: block;
	margin: auto;

	${media.small} {
		width: 300px;
	}
`;

export default EmptyContent