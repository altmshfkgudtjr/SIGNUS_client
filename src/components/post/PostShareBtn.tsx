import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'
import palette from '../../lib/styles/palette'

interface PostShareBtnProps {
	url: string
}
const PostShareBtn = ({url}: PostShareBtnProps) => {
	const onClick = () => {
		console.log(url);
	};

	return (
		<Container onClick={onClick}>
			<Content>
				<Icon src="/icons/1x/export.png" alt="공유" />
				<Message>공유하기</Message>
			</Content>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: right;
	line-height: 20px;
	transition: .3s ${styles.transition};

	&:active,
	&:hover {
		background-color: ${palette.gray0};
	}
`;

const Content = styled.div`
	position: relative;
`;

const Icon = styled.img`
	position: relative;
	vertical-align: top;
	width: 14px;
	height: 14px;
	padding: 4px 6px 2px 0px;
`;

const Message = styled.span`
	position: relative;
	text-align: right;
	vertical-align: top;
	font-size: 14px;
	line-height: 20px;
`;

export default PostShareBtn