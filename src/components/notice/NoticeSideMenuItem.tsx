import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'

interface NoticeSideMenuItemProps {
	noticeId: string;
	message: string;
	date: string;
}
const NoticeSideMenuItem = ({noticeId, message, date}: NoticeSideMenuItemProps) => {
	return (
		<Container to={`/notice/${noticeId}`}>
			<Title>{message}</Title>
			<Date>{date}</Date>
		</Container>
	);
}

const Container = styled(Link)`
	position: relative;
	display: block;
	width: 100%;
	padding: 0 .5rem 0 0;
	box-sizing: border-box;
	border-left: 2px solid rgba(0,0,0,0);
	transition: .2s ${styles.transition};
	margin-bottom: 1rem;

	&:active,
	&:hover {
		border-left: 2px solid ${palette.teal4};
		padding: 0 0 0 .5rem;
	}
`;

const Title = styled.div`
	position: relative;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

const Date = styled.div`
	position: relative;
	font-size: 12px;
`;

export default NoticeSideMenuItem