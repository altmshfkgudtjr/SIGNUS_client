import React from 'react'
import styled from 'styled-components'

type CloseBtnProps = {
	setSearchModalDisplay: React.Dispatch<React.SetStateAction<boolean>>
};

const CloseBtn = ({setSearchModalDisplay}: CloseBtnProps) => {
	const onClick = () => {
		setSearchModalDisplay(false);
	}

	return (
		<Content onClick={onClick}>
			<Icon src="/icons/1x/close.png" alt="닫기" />
		</Content>
	);
}

const Content = styled.div`
	position: relative;
	width: 40px;
	height: 40px;

	&:active,
	&:hover {
		& > img {
			filter: invert(61%) sepia(19%) saturate(7010%) hue-rotate(122deg) brightness(94%) contrast(86%);
		}
	}
`;

const Icon = styled.img`
	position: relative;
	width: 20px;
	height: 20px;
	padding: 10px;
`;

export default CloseBtn