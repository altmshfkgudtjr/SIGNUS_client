import React from 'react';
import styled from 'styled-components'
// lib
import { transition, noselect } from 'lib/styles/styles'
import palette from 'lib/styles/palette'

function ServerError() {
	/* 새로고침 */
	const onReload = () => {
		window.location.reload();
	}

	return (
	  <>
	    <Title>500 Server Error.</Title>
	    <Info>잠시 후 다시 시도해주세요.</Info>
	    <Btn onClick={onReload}>새로고침</Btn>
	  </>
	);
}

const Title = styled.div`
	position: relative;
	width: 100%;
	margin-top: 40vh;
	font-size: 3rem;
	color: #444;
	font-weight: 600;
	text-align: center;
`;

const Info = styled.div`
	position: relative;
	display: block;
	line-height: 2rem;
	margin: 15px auto;
	text-align: center;
	transition: .2s ${transition};
	${noselect}
`;

const Btn = styled.div`
	position: relative;
	display: block;
	width: 100px;
	height: 30px;
	font-size: 0.8rem;
	line-height: 28px;
	margin: 30px auto;
	border-radius: 4px;
	border: 1px solid ${palette.gray4};
	text-align: center;
	transition: .2s ${transition};
	cursor: pointer;
	${noselect}

	&:hover,
	&:active {
		background-color: ${palette.gray7};
		color: white;
	}
`;

export default ServerError