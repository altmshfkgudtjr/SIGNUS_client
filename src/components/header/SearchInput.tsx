import React, { useEffect, useRef, useCallback } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'
import palette from '../../lib/styles/palette'
import * as searchUtils from '../../lib/utils/searchUtils'

type SearchInputProps = {
	searchDisplay: boolean,
	setSearchDisplay: React.Dispatch<React.SetStateAction<boolean>>,
	searchWord: string,
	setSearchWord: React.Dispatch<React.SetStateAction<string>>
};

const SearchInput = ({searchDisplay, setSearchDisplay, searchWord, setSearchWord}: SearchInputProps) => {
	const InputContainerRef = useRef<HTMLInputElement>(null);
	const InputRef = useRef<HTMLInputElement>(null);
	const history = useHistory();

	/* 검색바 키 입력 이벤트 */
	const onKeyUp = (e: any) => {
		if (e.keyCode === 13) {
			const keyword = e.target.value;

			if (searchUtils.searchChecker(keyword)) {
				if (e.target) e.target.blur();
				history.push('/search?q=' + keyword);
			}
		} else if (e.target) {
			setSearchWord(e.target.value);
		}
	}

	/* 헤더 검색바 닫기 이벤트 */
	const closeSearchInput = useCallback((e: any) => {
		const { current } = InputContainerRef;
		if (!searchDisplay || (current && current.contains(e.target))) {
			return;
		} else {
			setSearchDisplay(false);
		}
	}, [searchDisplay, setSearchDisplay]);

	/* 검색바 열릴 때, 자동 포커스 실행 */
	/* eslint-disable */
	useEffect(() => {
		if (searchDisplay && InputRef.current) {
			InputRef.current.focus();
			InputRef.current.value = searchWord;
		}
	}, [searchDisplay]);
	/* eslint-enable */

	useEffect(() => {
		document.addEventListener('mousedown', closeSearchInput);
		return () => {
			document.removeEventListener('mousedown', closeSearchInput);
		};
	}, [closeSearchInput]);

	return (
		<Container searchDisplay={searchDisplay}
							 ref={InputContainerRef}>
			<Input placeholder="검색어를 입력해주세요."
						 defaultValue={searchWord}
						 onKeyUp={onKeyUp}
						 ref={InputRef} />
		</Container>
	);
}

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
	border-bottom: 1px solid ${palette.gray5};

	::placeholder {
		color: ${palette.gray4};
	}
`;

export default SearchInput