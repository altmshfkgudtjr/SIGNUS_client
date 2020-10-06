import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'
import palette from '../../lib/styles/palette'

interface ContainerStyled {
   searchDisplay: boolean;
}
const Container = styled.div<ContainerStyled>`
	position: relative;
	flex-basis: 50%;
	max-width: ${props => props.searchDisplay
								? '400px'
								: '0px'
	};
	margin-right: 2px;
	transition: .4s ${styles.transition};
`;

const Input = styled.input`
	position: relative;
	width: 100%;
	padding: 8px 0 4px 0;
	border-bottom: 1px solid #232625;

	::placeholder {
		color: ${palette.gray4};
	}
`;

type SearchInputProps = {
	searchDisplay: boolean,
	searchWord: string,
	setSearchWord: React.Dispatch<React.SetStateAction<string>>
};

const SearchInput = ({searchDisplay, searchWord, setSearchWord}: SearchInputProps) => {
	const onChange = (e: any) => {
		if (e.target && e.target.value) {
			setSearchWord(e.target.value);
		}
	}

	return (
		<Container searchDisplay={searchDisplay}>
			<Input placeholder="검색어를 입력해주세요."
						 value={searchWord}
						 onChange={onChange} />
		</Container>
	);
}

export default SearchInput