import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Portal from 'portal'
// components
import MenuModalWrapper from 'components/modal/menu/MenuModalWrapper'
import CloseBtn from 'components/modal/auth/CloseBtn'
import MenuAuthContent from 'components/modal/menu/MenuAuthContent'
import MenuBoardContent from 'components/modal/menu/MenuBoardContent'
import NoticeBar from 'components/modal/menu/NoticeBar'
import MenuLinkContent from 'components/modal/menu/MenuLinkContent'
import LogoutBtn from 'components/modal/menu/LogoutBtn'
import Copyright from 'components/modal/menu/Copyright'
// modules
import { RootState } from 'store/index'
import { Logout } from 'modules/auth'
// lib
import { mediaValue } from 'lib/styles/media'

interface MenuModalProps {
	display: boolean;
	onClose(): void;
}
const MenuModal = ({display, onClose}: MenuModalProps) => {
	const dispatch = useDispatch();
	const [isMobile, setIsMobile] = useState<boolean>(false);
	
	const loginValid = useSelector((state: RootState) => state.auth.login);
	const name = useSelector((state: RootState) => state.auth.user.id);
	
	const noticeList = useSelector((state: RootState) => state.notice.noticeList);
	const notice = noticeList.length > 0 ? noticeList[0] : undefined;

	/* 로그아웃 실행 함수 */
	const onLogout = () => {
		dispatch(Logout());
	}

	const onChangeWindowWidth = () => {
		if (window.innerWidth <= mediaValue.small) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	useEffect(() => {
		onChangeWindowWidth();
		window.addEventListener('resize', onChangeWindowWidth);
		return () => {
			window.removeEventListener('resize', onChangeWindowWidth);
		}
	}, []);

	return (
		<Portal id='modal'>
			{display && <MenuModalWrapper onClose={onClose}>
				<CloseBtn onClose={onClose} />
				<MenuAuthContent onClose={onClose}
												 loginValid={loginValid}
												 name={name} />
				<MenuBoardContent onClose={onClose} />
				<NoticeBar notice={notice} onClose={onClose} />
				<MenuLinkContent onClose={onClose} />
				{loginValid && <LogoutBtn onClose={onClose} onLogout={onLogout} />}
				{isMobile && <Copyright />}
			</MenuModalWrapper>}
		</Portal>
	);
}

export default MenuModal