import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
// containers
import SearchContainerMobile from './search/SearchContainerMobile'
// components
import HeaderStatic from '../components/header/HeaderStatic'
import HeaderCover from '../components/header/HeaderCover'
// lib
import { throttle } from '../lib/lazyEvent'
// modules
import { RootState } from '../store/index'

const Header = () => {
	const [searchModalDisplay, setSearchModalDisplay] = useState<boolean>(false);
	const [searchWord, setSearchWord] = useState<string>('');
	const [scrolled, setScrolled] = useState<boolean>(false);
	const prevScrollTop = useRef(0);
	const loginValid = useSelector((state: RootState) => state.auth.login);
	const userName = useSelector((state: RootState) => state.auth.user.id);

	/* 스크롤했을 때, Header 노출 여부 결정 함수 */
	const handleScrolled = useCallback(throttle(() => {
		const scrollTop = window.scrollY;
		const nextDirection = prevScrollTop.current > scrollTop ? 'UP' : 'DOWN';

		if (scrollTop <= 100) {
			setScrolled(false);
		} else if (nextDirection === 'DOWN') {
			setScrolled(false);
		} else {
			setScrolled(true);
		}

		prevScrollTop.current = scrollTop;
	}, 100), []);

	useEffect(() => {
		document.addEventListener("scroll", handleScrolled);
		return () => {
			document.removeEventListener("scroll", handleScrolled);
		}
	}, [handleScrolled]);

	return (
		<>
			<HeaderStatic searchWord={searchWord}
										setSearchWord={setSearchWord}
										setSearchModalDisplay={setSearchModalDisplay}
										loginValid={loginValid}
										userName={userName} />
			<HeaderCover show={scrolled}
									 searchWord={searchWord}
									 setSearchWord={setSearchWord}
									 setSearchModalDisplay={setSearchModalDisplay}
									 loginValid={loginValid}
									 userName={userName} />
			{searchModalDisplay && <SearchContainerMobile searchWord={searchWord}
																										setSearchWord={setSearchWord}
																										setSearchModalDisplay={setSearchModalDisplay} />}
		</>
	);
}

export default Header

