import React, { useState } from 'react'
import styled from 'styled-components'
// components
import Logo from './header/Logo'
import SearchInput from './header/SearchInput'
import SearchBtn from './header/SearchBtn'
import MenuBtn from './header/MenuBtn'
import UserBtn from './header/UserBtn'
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
	max-width: 1628px;
	margin: auto;
	transition: .2s max-width ${styles.transition};
	${styles.noselect}

	${media.xlarge} {
		max-width: 1396px;
	}
	${media.large} {
		max-width: 1232px;
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

type HeaderProps = {
	searchWord: string,
	setSearchWord: React.Dispatch<React.SetStateAction<string>>
};

const Header = ({searchWord, setSearchWord}: HeaderProps) => {
	const [searchDisplay, setSearchDisplay] = useState<boolean>(false);

	return (
		<Container>
			<Content>
				<Logo />
				<BtnWrapper>
					<SearchInput searchDisplay={searchDisplay}
											 searchWord={searchWord}
											 setSearchWord={setSearchWord} />
					<SearchBtn searchDisplay={searchDisplay}
										 setSearchDisplay={setSearchDisplay} />
					<UserBtn />
					<MenuBtn />
				</BtnWrapper>
			</Content>
		</Container>
	);
}

export default Header