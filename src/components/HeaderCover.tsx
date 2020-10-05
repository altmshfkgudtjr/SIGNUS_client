import React from 'react'
import styled from 'styled-components'
// components
import Logo from './header/Logo'
import SearchBtn from './header/SearchBtn'
import MenuBtn from './header/MenuBtn'
import UserBtn from './header/UserBtn'
// lib
import media from '../lib/styles/media'
import * as styles from '../lib/styles/styles'
import zIndex from '../lib/styles/zIndex'

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

type HeaderCoverProps = {
	show: boolean
};

const HeaderCover = ({show}: HeaderCoverProps) => {
	return (
		<Container show={show}>
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

export default HeaderCover