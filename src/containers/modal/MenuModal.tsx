import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Portal from '../../portal'
// components
import MenuModalWrapper from '../../components/modal/menu/MenuModalWrapper'
// modules
import { RootState } from '../../store/index'
import { Logout } from '../../modules/auth'
import { GetNoticeList } from 'modules/notice'

interface MenuModalProps {
	display: boolean;
	onClose(): void;
}
const MenuModal = ({display, onClose}: MenuModalProps) => {
	const dispatch = useDispatch();
	
	const loginValid = useSelector((state: RootState) => state.auth.login);
	const name = useSelector((state: RootState) => state.auth.user.id);
	
	const noticeList = useSelector((state: RootState) => state.notice.noticeList);
	const notice = noticeList.length > 0 ? noticeList[0] : undefined;

	/* 로그아웃 실행 함수 */
	const onLogout = () => {
		dispatch(Logout());
	}

	/* 공지사항 리스트 호출 */
	useEffect(() => {
		dispatch(GetNoticeList());
	}, [dispatch]);

	return (
		<Portal id='modal'>
			{display && <MenuModalWrapper onClose={onClose}
																		loginValid={loginValid}
																		onLogout={onLogout}
																		name={name}
																		notice={notice} />}
		</Portal>
	);
}

export default MenuModal