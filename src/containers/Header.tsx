import React, { useState, useEffect, useCallback, useRef } from 'react'
// components
import HeaderStatic from '../components/HeaderStatic'
import HeaderCover from '../components/HeaderCover'
// lib
import { throttle } from '../lib/lazyEvent'

const Header = () => {
	const [searchWord, setSearchWord] = useState<string>('');
	const [scrolled, setScrolled] = useState<boolean>(false);
	const prevScrollTop = useRef(0);

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
										setSearchWord={setSearchWord} />
			<HeaderCover show={scrolled}
									 searchWord={searchWord}
									 setSearchWord={setSearchWord} />
		</>
	);
}

export default Header

