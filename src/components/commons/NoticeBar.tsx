import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

const NoticeBar = () => {
	const [display, setDisplay] = useState<boolean>(false);

	const prevDate = Number(window.localStorage.getItem('notice-date'));
	const nowDate = new Date().getTime();
	const day_3 = 3600 * 1000 * 24 * 3;		// 3일

	/* eslint-disable */
	useEffect(() => {
		if (prevDate && new Date(nowDate).getTime() - new Date(prevDate).getTime() <= day_3) {
			setDisplay(false);
		} else {
			window.localStorage.removeItem('notice-date');
			setDisplay(true);
		}
	}, []);
	/* eslint-enable */

	const onClose = () => {
		setDisplay(false);
		window.localStorage.setItem('notice-date', String(nowDate));
	}

	return (
		<>
			{display && <Container>
				<ContentWrapper>
					<Content></Content>

					<Btn onClick={onClose}>3일동안 보지않기</Btn>
				</ContentWrapper>
			</Container>}
		</>
	);
}

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 50px;
	background-color: ${palette.teal0};
	border-bottom: 1px solid ${palette.gray2};
	cursor: pointer;
`;

const ContentWrapper = styled.div`
	position: relative;
	max-width: 1628px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: auto;

	${media.xlarge} {
		max-width: 1396px;
	}
	${media.large} {
		max-width: 1232px;
	}
	${media.medium} {
		max-width: 95%;
	}
	${media.small} {
		max-width: 95%;
		height: 40px;
		font-size: 14px;
	}
`;

const Content = styled.div`
	position: relative;
`;

const Btn = styled.div`
	position: relative;
	height: 100%;
	line-height: 50px;
	color: ${palette.gray4};
	font-size: 14px;

	&:active,
	&:hover {
		color: ${palette.gray6};
		text-decoration: underline;
	}

	${media.small} {
		line-height: 40px;
	}
`;

export default NoticeBar