import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'
import animations from 'lib/styles/animations'

interface NoticePostInfoProps {
	userId: string;
	date: string;
}
const NoticePostInfo = ({userId, date}: NoticePostInfoProps) => {
	const loading: boolean = userId === '';

	return (
		<Container>
			<Icon />
			{!loading && <Writer>{userId}</Writer>}
			{loading && <Loading />}
			│
			{!loading && <Date>{date}</Date>}
			{loading && <Loading />}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;

	${media.small} {
		& * {
			font-size: 14px;
		}
	}
`;

const Icon = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 8px;
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

const Loading = styled.div`
	width: 80px;
	height: 20px;
	background-color: ${palette.gray1};
	border-radius: 20px;
	animation: ${animations.blink} 1.5s infinite ease-in-out;
`;

export default NoticePostInfo