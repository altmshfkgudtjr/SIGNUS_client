import React, { useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../../lib/styles/styles'
import animations from '../../../lib/styles/animations'
import media from '../../../lib/styles/media'
import zIndex from '../../../lib/styles/zIndex'

interface MenuModalWrapperProps {
	onClose(): void;
	children: React.ReactNode
}
const MenuModalWrapper = ({onClose, children}: MenuModalWrapperProps) => {
	const ModalRef = useRef<HTMLInputElement>(null);

	/* 메뉴 모달 닫기 */
	const closeModal = useCallback((e: any) => {
		const { current } = ModalRef;
		const modalElem = document.querySelector(`div[data-type=${"modalBackground"}]`) as HTMLElement;
		const snackbarElem = !!e.path.filter((node: any) => node.id === 'snackbar')[0];
		
		if ((current && current.contains(e.target))
				|| (modalElem && modalElem.contains(e.target))
				 || snackbarElem) {
			return;
		} else {
			onClose();
		}
	}, [onClose]);

	useEffect(() => {
		document.addEventListener('mousedown', closeModal);
		return () => {
			document.removeEventListener('mousedown', closeModal);
		};
	}, [closeModal]);

	return (
		<Container ref={ModalRef}>
			{children}
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
	padding: 1rem 1rem 2rem 1rem;
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
		overflow: auto;
	}
	${media.xsmall} {
		padding: 1rem;
	}
`;

export default MenuModalWrapper