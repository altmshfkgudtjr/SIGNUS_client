import React, { useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'
import animations from '../../lib/styles/animations'

type AuthModalWrapperProps = {
	onClose: () => void
}

const AuthModalWrapper = ({onClose}: AuthModalWrapperProps) => {
	const ModalRef = useRef<HTMLInputElement>(null);

	/* 로그인 모달 닫기 */
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
	position: relative;
	width: 100%;
	max-width: 600px;
	height: 400px;
	border-radius: 4px;
	background-color: #FFF;
	box-shadow: ${styles.boxShadow.regular};
	animation: .5s ${animations.fadeIn};
`;

export default AuthModalWrapper