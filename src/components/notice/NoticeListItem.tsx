import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// types
import { Notice as NoticeType } from 'modules/notice'

interface NoticeListItemProps {
	notice: NoticeType
}
const NoticeListItem = ({notice}: NoticeListItemProps) => {
	console.log(notice);
	return (
		<Container to={`/notice/${notice.id}`}>
			
		</Container>
	);
}

const Container = styled(Link)`
	position: relative;
	display: block;
	width: 100%;
	margin-bottom: 1rem;
`;

export default NoticeListItem