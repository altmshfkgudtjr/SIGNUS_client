import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

interface NoticePostTextProps {
	text: string;
}
const NoticePostText = ({text}: NoticePostTextProps) => {
	const loading: boolean = text === '';
	
	return (
		<Container>
			{!loading && text}
			{loading && <div>
				<Loading width={80} />
				<Loading width={60} />
				<Loading width={70} />
				<Loading width={80} />
				<Loading width={80} />
				<Loading width={60} />
				<Loading width={70} />
			</div>}
		</Container>
	);
}

const Container = styled.div`
	word-break: keep-all;
	white-space: pre-wrap;
	padding-bottom: 4rem;
	border-bottom: 1px solid ${palette.gray3};
	margin: 4rem 0 1rem 0;

	${media.small} {
		margin: 4rem 0 2rem 0;
	}
`;

interface LoadingStyled {
	width: number
}
const Loading = styled.div<LoadingStyled>`
	display: inline-block;
	width: ${props => props.width+'%'};
	height: 18px;
	border-radius: 4px;
	background-color: ${palette.gray1};
	margin-bottom: 1rem;
`;

export default NoticePostText