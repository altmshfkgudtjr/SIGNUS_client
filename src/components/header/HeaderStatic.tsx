import React, { useState } from 'react'
import styled from 'styled-components'
// components
import Logo from './Logo'
import SearchInput from './SearchInput'
import SearchBtn from './SearchBtn'
import MenuBtn from './MenuBtn'
import LoginBtn from './LoginBtn'
import UserBtn from './UserBtn'
// lib
import media from '../../lib/styles/media'
import * as styles from '../../lib/styles/styles'

interface HeaderProps {
	searchWord: string;
	setSearchWord: React.Dispatch<React.SetStateAction<string>>;
	setSearchModalDisplay: React.Dispatch<React.SetStateAction<boolean>>;
	loginValid: boolean;
	userName: string;
};
const Header = ({searchWord, setSearchWord, setSearchModalDisplay, loginValid, userName}: HeaderProps) => {
	const [searchDisplay, setSearchDisplay] = useState<boolean>(false);

	return (
		<Container>
			<Content>
				<Logo />
				<BtnWrapper>
					<SearchInput searchDisplay={searchDisplay}
											 setSearchDisplay={setSearchDisplay}
											 searchWord={searchWord}
											 setSearchWord={setSearchWord} />
					<SearchBtn searchWord={searchWord}
										 searchDisplay={searchDisplay}
										 setSearchDisplay={setSearchDisplay}
										 setSearchModalDisplay={setSearchModalDisplay} />
					{loginValid && <UserBtn name={userName} />}
					{!loginValid && <LoginBtn />}
					<MenuBtn />
				</BtnWrapper>
			</Content>
		</Container>
	);
}

const Container = styled.header`
		position: relative;
		width: 100%;
		height: 40px;
		padding: 10px 0;
		margin-bottom: 3rem;

		${media.small} {
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
		max-width: 95%;
	}
`;

const BtnWrapper = styled.div`
	position: relative;
	display: flex;
	flex-grow: 1;
	justify-content: flex-end;
`;

export default Header