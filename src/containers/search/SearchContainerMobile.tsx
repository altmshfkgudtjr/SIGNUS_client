import React from 'react'
import styled from 'styled-components'
// components
import SearchInput from '../../components/search/SearchInput'
import SearchBtn from '../../components/header/SearchBtn'
import CloseBtn from '../../components/search/CloseBtn'
// lib
import * as styles from '../../lib/styles/styles'
import zIndex from '../../lib/styles/zIndex'
import animations from '../../lib/styles/animations'

type SearchContainerMobileProps = {
	searchWord: string,
	setSearchWord: React.Dispatch<React.SetStateAction<string>>,
	setSearchModalDisplay: React.Dispatch<React.SetStateAction<boolean>>
};

const SearchContainerMobile = ({searchWord, setSearchWord, setSearchModalDisplay}: SearchContainerMobileProps) => {
	return (
		<Modal>
			<ModalContent>
				<SearchInput searchWord={searchWord}
										 setSearchWord={setSearchWord} />
				<SearchBtn searchWord={searchWord}
									 searchDisplay={true}
									 setSearchModalDisplay={setSearchModalDisplay} />
				<CloseBtn setSearchModalDisplay={setSearchModalDisplay} />
			</ModalContent>
		</Modal>
	);
}

const Modal = styled.div`
	position: fixed;
	width: 100%;
	max-width: 100%;
	height: 50px;
	top: 0;
	right: 0;
	animation: .4s ${animations.fadeInTop};
	box-shadow: ${styles.boxShadow.light};
	background-color: #FFF;
	border-radius: 4px 0 4px 4px;
	z-index: ${zIndex.header};
`;

const ModalContent = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	width: 95%;
	margin: auto;
	height: 40px;
	padding: 5px 0;
	animation: .3s ${animations.fadeInBottom} .2s;
`;

export default SearchContainerMobile