import React, { useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import animations from 'lib/styles/animations'
import media from 'lib/styles/media'

interface AuthModalWrapperProps {
	onClose(): void;
	children: React.ReactNode;
}
const AuthModalWrapper = ({onClose, children}: AuthModalWrapperProps) => {
	const ModalRef = useRef<HTMLInputElement>(null);

	/* 로그인 모달 닫기 */
	const closeModal = useCallback((e: any) => {
		const { current } = ModalRef;
		const snackbarElem = !!e.path.filter((node: any) => node.id === 'snackbar')[0];
		
		if ((current && current.contains(e.target))
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
	position: relative;
	display: flex;
	width: 100%;
	max-width: 700px;
	height: auto;
	min-height: 400px;
	border-radius: 4px;
	background-color: #FFF;
	box-shadow: ${styles.boxShadow.regular};
	animation: .5s ${animations.fadeIn};
	box-sizing: border-box;
	padding: 1rem;

	${media.small} {
		height: 100%;
		width: 100%;
		max-width: 800px;
		animation: .3s ${animations.fadeInRight};
	}
`;

export default AuthModalWrapper