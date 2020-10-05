import React from 'react'
import styled from 'styled-components'
// components
import Logo from '../components/header/Logo'
import SearchBtn from '../components/header/SearchBtn'
import MenuBtn from '../components/header/MenuBtn'
import UserBtn from '../components/header/UserBtn'
// lib
import media from '../lib/styles/media'
import * as styles from '../lib/styles/styles'

const Container = styled.header`
		position: relative;
		width: 100%;
		height: 40px;
		padding: 10px 0;
		margin-bottom: 3rem;

		${media.small} {
			width: 98%;
			padding: 5px 0;
			margin: auto;
			margin-bottom: .5rem;
		}
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
		max-width: 95%;
	}
	${media.small} {
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
					<UserBtn />
					<MenuBtn />
				</BtnWrapper>
			</Content>
		</Container>
	);
}

export default Header