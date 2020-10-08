import React, { useState } from 'react'
import styled from 'styled-components'
// containers
import MenuModal from '../../containers/modal/MenuModal'
// lib
import media from '../../lib/styles/media'

const MenuBtn = () => {
	const [modalShow, setModalShow] = useState<boolean>(false);

	const onShow = () => {
		setModalShow(true);
	}

	const onClose = () => {
		setModalShow(false);
	}

	return <Container onClick={onShow}>
		<Icon src="/icons/1x/menu.png" alt="메뉴" />
		<MenuModal display={modalShow} onClose={onClose} />
	</Container>;
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

	${media.small} {
		margin-right: 4px;
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