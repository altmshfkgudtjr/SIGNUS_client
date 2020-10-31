import React from 'react'
import styled from 'styled-components'
// lib
import * as postUtils from '../../lib/utils/postUtils'

interface PostDateProps {
	date: {$date: number},
	endDate: {$date: number}
}
const PostDate = ({date, endDate}: PostDateProps) => {
	const message: string = new Date(endDate.$date).getTime() === new Date(32503680000000).getTime()
														? postUtils.dateFormatter(date.$date)
														: postUtils.dateFormatter(endDate.$date);

	return (
		<Container>
			<Icon src="/icons/1x/time.png" alt="날짜" />
			<Content>{message}</Content>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 100%;
	text-align: right;
	line-height: 20px;
`;

const Icon = styled.img`
	position: relative;
	vertical-align: top;
	width: 14px;
	height: 14px;
	padding: 2px 6px 4px 3px;
`;

const Content = styled.span`
	position: relative;
	vertical-align: top;
	font-size: 14px;
	line-height: 20px;
`;

export default PostDate