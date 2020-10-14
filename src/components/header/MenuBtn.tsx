import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
// containers
import MenuModal from '../../containers/modal/MenuModal'
// lib
import media, { mediaValue } from '../../lib/styles/media'

const MenuBtn = () => {
	const [modalShow, setModalShow] = useState<boolean>(false);

	const onShow = () => {
		setModalShow(true);
		if (window.innerWidth <= mediaValue.small) {
			(document.querySelector('body') as HTMLElement).style.overflow = 'hidden';
		}
	}

	const onClose = useCallback(() => {
		setModalShow(false);
		if (window.innerWidth <= mediaValue.small) {
			(document.querySelector('body') as HTMLElement).removeAttribute('style');
		}
	}, [setModalShow]);

	return (
		<>
			<Container onClick={onShow}>
				<Icon src="/icons/1x/menu.png" alt="메뉴" />
			</Container>
			<MenuModal display={modalShow} onClose={onClose} />
		</>
	);
}

const Container = styled.div`
	position: relative;
	width: auto;
	height: 40px;
	cursor: pointer;

	&:active,
	&:hover {
		filter: invert(61%) sepia(19%) saturate(7010%) hue-rotate(122deg) brightness(94%) contrast(86%);
	}
`;

const Icon  = styled.img`
	position: relative;
	width: 24px;
	height: 24px;
	padding: 8px;

	${media.small} {
		width: 20px;
		height: 20px;
		padding: 10px 7px;
	}
`;

export default MenuBtn