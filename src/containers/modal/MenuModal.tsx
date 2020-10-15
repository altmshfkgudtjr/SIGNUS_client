import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Portal from '../../portal'
// components
import MenuModalWrapper from '../../components/modal/menu/MenuModalWrapper'
// modules
import { RootState } from '../../store/index'
import { Logout } from '../../modules/auth'

interface MenuModalProps {
	display: boolean;
	onClose(): void;
}
const MenuModal = ({display, onClose}: MenuModalProps) => {
	const loginValid = useSelector((state: RootState) => state.auth.login);
	const name = useSelector((state: RootState) => state.auth.user.id);
	const dispatch = useDispatch();

	/* 로그아웃 실행 함수 */
	const onLogout = () => {
		dispatch(Logout());
	}

	return (
		<Portal id='modal'>
			{display && <MenuModalWrapper onClose={onClose}
																		loginValid={loginValid}
																		onLogout={onLogout}
																		name={name} />}
		</Portal>
	);
}

export default MenuModal