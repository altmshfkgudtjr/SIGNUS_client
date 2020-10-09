import React, { useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
// components
import CloseBtn from '../auth/CloseBtn'
import MenuAuthContent from './MenuAuthContent'
import MenuBoardContent from './MenuBoardContent'
import NoticeBar from './NoticeBar'
import MenuLinkContent from './MenuLinkContent'
import LogoutBtn from './LogoutBtn'
// lib
import * as styles from '../../../lib/styles/styles'
import animations from '../../../lib/styles/animations'
import media from '../../../lib/styles/media'
import zIndex from '../../../lib/styles/zIndex'

interface MenuModalWrapperProps {
	onClose(): void;
}
const MenuModalWrapper = ({onClose}: MenuModalWrapperProps) => {
	const ModalRef = useRef<HTMLInputElement>(null);

	/* 메뉴 모달 닫기 */
	const closeModal = useCallback((e: any) => {
		const { current } = ModalRef;
		const modalElem = document.querySelector(`div[data-type=${"modalBackground"}]`) as HTMLElement;
		
		if ((current && current.contains(e.target))
				|| (modalElem && modalElem.contains(e.target))) {
			return;
		} else {
			onClose();
		}
	}, [onClose]);

	useEffect(() => {
		document.addEventListener('click', closeModal);
		return () => {
			document.removeEventListener('click', closeModal);
		};
	}, [closeModal]);

	return (
		<Container ref={ModalRef}>
			<CloseBtn onClose={onClose} />
			<MenuAuthContent onClose={onClose} />
			<MenuBoardContent onClose={onClose} />
			<NoticeBar />
			<MenuLinkContent onClose={onClose} />
			<LogoutBtn onClose={onClose} />
		</Container>
	);
}

const Container = styled.div`
	position: fixed;
	top: 10px;
	right: calc((100% - 1628px)/2);
	width: 100%;
	max-width: 320px;
	min-height: 500px;
	border-radius: 4px;
	background-color: #FFF;
	box-shadow: ${styles.boxShadow.regular};
	animation: .2s ${animations.fadeIn};
	box-sizing: border-box;
	padding: 1rem .5rem 2rem .5rem;
	z-index: ${zIndex.modal};

	${media.xlarge} {
		right: calc((100% - 1396px)/2);
	}
	${media.large} {
		right: calc((100% - 1232px)/2);
	}
	${media.medium} {
		right: calc((5%)/2);
	}
	${media.small} {
		top: 0;
		right: 0;
		height: 100%;
		width: 100%;
		max-width: 800px;
		animation: .5s ${animations.fadeInRight};
		padding: 1rem 2rem;
	}
`;

export default MenuModalWrapper