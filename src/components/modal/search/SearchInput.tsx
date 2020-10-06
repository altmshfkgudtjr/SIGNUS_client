import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
// lib
import palette from '../../../lib/styles/palette'
import * as searchUtils from '../../../lib/utils/searchUtils'

type SearchInputProps = {
	searchWord: string,
	setSearchWord: React.Dispatch<React.SetStateAction<string>>
};

const SearchInput = ({searchWord, setSearchWord}: SearchInputProps) => {
	const InputContainerRef = useRef<HTMLInputElement>(null);
	const InputRef = useRef<HTMLInputElement>(null);
	const history = useHistory();

	/* 검색바 키 입력 이벤트 */
	const onKeyUp = (e: any) => {
		if (e.keyCode === 13) {
			const prevKeyword = e.target.value;
			const keyword = searchUtils.changeKeyword(prevKeyword);

			if (searchUtils.searchChecker(keyword)) {
				history.push('/search/' + keyword);
			}
		} else if (e.target) {
			setSearchWord(e.target.value);
		}
	}

	/* 검색바 열릴 때, 자동 포커스 실행 */
	/* eslint-disable */
	useEffect(() => {
		if (InputRef.current) {
			InputRef.current.focus();
			InputRef.current.value = searchWord;
		}
	}, []);
	/* eslint-enable */

	return (
		<Container ref={InputContainerRef}>
			<Input placeholder="검색어를 입력해주세요."
						 defaultValue={searchWord}
						 onKeyUp={onKeyUp}
						 ref={InputRef} />
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 100%;
	max-width: 400px;
	margin-right: 4px;
`;

const Input = styled.input`
	position: relative;
	width: 100%;
	padding: 10px 0 4px 0;
	border-bottom: 1px solid ${palette.gray5};
	font-size: 14px;

	::placeholder {
		color: ${palette.gray4};
	}
`;

export default SearchInput