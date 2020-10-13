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
import zIndex from '../../lib/styles/zIndex'

interface HeaderCoverProps {
	show: boolean;
	searchWord: string;
	setSearchWord: React.Dispatch<React.SetStateAction<string>>;
	setSearchModalDisplay: React.Dispatch<React.SetStateAction<boolean>>;
	loginValid: boolean;
	userName: string;
};
const HeaderCover = ({show, searchWord, setSearchWord, setSearchModalDisplay, loginValid, userName}: HeaderCoverProps) => {
	const [searchDisplay, setSearchDisplay] = useState<boolean>(false);

	return (
		<Container show={show}>
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

interface ContainerStyled {
   show: boolean;
}
const Container = styled.header<ContainerStyled>`
		position: fixed;
		width: 100%;
		height: 40px;
		padding: 10px 0;
		margin-bottom: 3rem;
		background-color: #FFF;
		transition: .3s ${styles.transition};
		z-index: ${zIndex.header};
		box-shadow: ${styles.boxShadow.header};
		top: ${props => props.show
				? `0px`
				: `-60px`
		};

		${media.small} {
			padding: 0;
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
		max-width: 98%;
	}
`;

const BtnWrapper = styled.div`
	position: relative;
	display: flex;
	flex-grow: 1;
	justify-content: flex-end;
`;

export default HeaderCover