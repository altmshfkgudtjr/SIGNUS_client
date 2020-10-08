import React from 'react'
import Portal from '../../portal'
// components
import MenuModalWrapper from '../../components/modal/menu/MenuModalWrapper'

interface MenuModalProps {
	display: boolean;
	onClose(): void;
}
const MenuModal = ({display, onClose}: MenuModalProps) => {
	return (
		<Portal id='modal'>
			{display && <MenuModalWrapper onClose={onClose} />}
		</Portal>
	);
}

export default MenuModal