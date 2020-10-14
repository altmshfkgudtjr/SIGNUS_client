import React, { useState } from 'react'
import styled from 'styled-components'
// containers
import AuthModal from '../../containers/modal/AuthModal'
// lib
import media from '../../lib/styles/media'
import palette from '../../lib/styles/palette'

const LoginBtn = () => {
	const [modalShow, setModalShow] = useState<boolean>(false);

	const onShow = () => {
		setModalShow(true);
		(document.querySelector('body') as HTMLElement).style.overflow = 'hidden';
	}

	const onClose = () => {
		setModalShow(false);
		(document.querySelector('body') as HTMLElement).removeAttribute('style');
	}

	return (
		<>
			<Container onClick={onShow}>
				<Icon src="/icons/1x/user.png" alt="사용자" />
				<Message>로그인</Message>
			</Container>
			<AuthModal display={modalShow} onClose={onClose} />
		</>
	);
}

const Container = styled.div`
	position: relative;
	width: auto;
	height: 40px;
	margin-right: 1rem;
	font-size: 14px;
	line-height: 40px;
	cursor: pointer;

	&:active,
	&:hover {
		filter: invert(61%) sepia(19%) saturate(7010%) hue-rotate(122deg) brightness(94%) contrast(86%);

		& > span {
			color: #000;
		}
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

const Message = styled.span`
	position: relative;
	height: 24px;
	vertical-align: top;
	font-size: 14px;
	font-weight: 600;
	color: ${palette.gray6};
	
	${media.small} {
		display: none;
	}
`;


export default LoginBtn