import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Portal from 'portal'
// components
import MenuModalWrapper from 'components/modal/menu/MenuModalWrapper'
import AuthInfoTitle from 'components/modal/auth/AuthInfoTitle'
import BackBtn from 'components/modal/auth/BackBtn'
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
import media from 'lib/styles/media'
import { mediaValue } from 'lib/styles/media'

interface MenuModalProps {
	display: boolean;
	onClose(): void;
}
const MenuModal = ({display, onClose}: MenuModalProps) => {
	const dispatch = useDispatch();
	const [isMobile, setIsMobile] = useState<boolean>(false);
	
	const loginValid = useSelector((state: RootState) => state.auth.login);
	const name = useSelector((state: RootState) => state.auth.user.nickname);
	
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
				{isMobile && <MenuHeaderWrapper>
					<BackBtn onClose={onClose} />
					<AuthInfoTitle message="메뉴" />
				</MenuHeaderWrapper>}
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

const MenuHeaderWrapper = styled.div`
	position: relative;
	display: none;
	margin-bottom: 1rem;

	${media.small} {
		display: flex;
	}
`;


export default MenuModal