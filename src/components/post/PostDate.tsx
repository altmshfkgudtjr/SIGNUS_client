import React from 'react'
import styled from 'styled-components'
// lib
import * as postUtils from '../../lib/utils/postUtils'

interface PostDateProps {
	date: string,
	endDate: string
}
const PostDate = ({date, endDate}: PostDateProps) => {
	const message: string = endDate
														? postUtils.dateFormatter(endDate)
														: postUtils.dateFormatter(date);

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
	padding: 4px 3px 2px 3px;
`;

const Content = styled.span`
	position: relative;
	vertical-align: top;
	font-size: 12px;
	line-height: 20px;
`;

export default PostDate