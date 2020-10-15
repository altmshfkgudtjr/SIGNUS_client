import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

interface NoticePostInfoProps {
	userId: string;
	date: string;
}
const NoticePostInfo = ({userId, date}: NoticePostInfoProps) => {
	return (
		<Container>
			<Icon />
			<Writer>{userId}</Writer>
			│
			<Date>{date}</Date>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items:flex-start;
`;

const Icon = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 8px;
	margin: .5rem 0;
	vertical-align: top;
	box-shadow: 0 0 .5rem ${palette.teal4};
	background-color: ${palette.teal4};
	margin-right: 1rem;
`;

const Writer = styled.div`
	font-weight: 600;
	max-width: 130px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
;`;

const Date = styled.div`
	font-weight: 200;
`;

export default NoticePostInfo