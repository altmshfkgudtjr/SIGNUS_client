import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'

interface NoticePostControllerProps {
	onEdit(): void;
	onDelete(): void;
}
const NoticePostController = ({onEdit, onDelete}: NoticePostControllerProps) => {
	return (
		<Container>
			<Btn onClick={onEdit}>수정</Btn>
			<Btn onClick={onDelete}>삭제</Btn>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: -1.75rem;

	${media.small} {
		margin-bottom: .5rem;
	}
`;

const Btn = styled.button`
	padding: 4px 1rem;
	background-color: ${palette.gray1};
	border-radius: 50px;
	transition: .1s ${styles.transition};
	margin-right: 1rem;
	box-shadow: ${styles.boxShadow.btn};
	font-size: 14px;

	&:last-child {
		margin-right: 0;
	}

	&:hover {
		background-color: ${palette.gray2};
	}

	&:active {
		transform: translateY(4px);
		box-shadow: none;
		background-color: ${palette.teal2};
	}
`;

export default NoticePostController