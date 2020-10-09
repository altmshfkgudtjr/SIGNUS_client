import React from 'react'
import styled from 'styled-components'
// lib
import zIndex from '../../lib/styles/zIndex'
import animations from '../../lib/styles/animations'

type ModalBackgroundType = {
	children: React.ReactNode
};
const ModalBackground = ({children}: ModalBackgroundType) => {
	return <Background data-type="modalBackground">{children}</Background>;
};

const Background = styled.div`
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	background-color: rgba(249, 249, 249, 0.85);
	z-index: ${zIndex.modal};
	animation: .2s ${animations.fadeIn};
`;

export default ModalBackground