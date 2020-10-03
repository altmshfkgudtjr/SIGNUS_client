import React from 'react'
import styled from 'styled-components'
// components
import Logo from '../components/header/Logo'
import SearchBtn from '../components/header/SearchBtn'
// lib
import media from '../lib/styles/media'
import * as styles from '../lib/styles/styles'

const Container = styled.header`
		position: relative;
		width: 100vw;
		height: 40px;
		padding: 10px 0;
`;

const Content = styled.div`
	position: relative;
	display: flex;
	max-width: 1728px;
	margin: auto;
	transition: .2s max-width ${styles.transition};
	${styles.noselect}

	${media.xlarge} {
		max-width: 1396px;
	}
	${media.large} {
		max-width: 1064px;
	}
	${media.medium} {
		max-width: 100%;
	}
`;

const BtnWrapper = styled.div`
	position: relative;
	display: flex;
	flex-grow: 1;
	justify-content: flex-end;
`;

const Header = () => {
	return (
		<Container>
			<Content>
				<Logo />
				<BtnWrapper>
					<SearchBtn />
				</BtnWrapper>
			</Content>
		</Container>
	);
}

export default Header