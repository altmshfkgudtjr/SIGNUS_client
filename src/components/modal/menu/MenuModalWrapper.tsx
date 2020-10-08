import React, { useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
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
		if (current && current.contains(e.target)) {
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
		</Container>
	);
}

const Container = styled.div`
	position: fixed;
	top: 10px;
	right: 1rem; // 이 부분 media로 조정 calc 이용
	width: 100%;
	max-width: 360px;
	min-height: 600px;
	border-radius: 4px;
	background-color: #FFF;
	box-shadow: ${styles.boxShadow.regular};
	animation: .2s ${animations.fadeIn};
	box-sizing: border-box;
	padding: .5rem;
	z-index: ${zIndex.modal};

	${media.small} {
		height: 100%;
		width: 100%;
		max-width: 800px;
		animation: .5s ${animations.fadeInRight};
	}
`;

export default MenuModalWrapper