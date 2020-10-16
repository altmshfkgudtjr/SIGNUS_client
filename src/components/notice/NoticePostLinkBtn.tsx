import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// icons
import { LeftIcon as leftIcon } from 'static/svg'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

const NoticePostLinkBtn = () => {
	return (
		<Btn to="/notice">
			<LeftIcon />
			<Title>목록으로 이동하기</Title>
		</Btn>
	);
}

const Btn = styled(Link)`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 300px;
	flex-grow: 1;
	padding: 1rem;
	cursor: pointer;
	border-radius: 4px;
	transition: .2s ${styles.transition};

	&:active,
	&:hover {
		background-color: ${palette.gray1};
	}

	${media.small} {
		padding: .5rem;
	}
`;

const LeftIcon = styled(leftIcon)`
	position: relative;
	width: 34px;
	height: 34px;
	margin-right: 1rem;

	${media.small} {
		width: 24px;
		height: 24px;
	}
`;

const Title = styled.div`
	font-size: 18px;
	font-weight: 600;

	${media.small} {
		font-size: 1rem;
	}
`;

export default NoticePostLinkBtn