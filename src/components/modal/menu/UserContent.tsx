import React from 'react'
import styled from 'styled-components'
// lib
import media from '../../../lib/styles/media'

interface UserContentProps {
	name: string;
}
const UserContent = ({name}: UserContentProps) => {
	const greetingList: string[] = [
		'님 환영합니다!',
		'님 반갑습니다!',
		'님 좋은 하루입니다!'
	];
	const message = greetingList[Math.floor(Math.random()*10) % greetingList.length];

	return (
		<Container>
			<Name>{name}</Name>
			<Message>{message}</Message>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	height: 44px;

	${media.small} {
		height: auto;
	}
`;

const Name = styled.span`
	position: relative;
	font-size: 14px;
	font-weight: 600;
	overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Message = styled.span`
	position: relative;
	flex-shrink: 0;
	font-size: 14px;
`;

export default UserContent