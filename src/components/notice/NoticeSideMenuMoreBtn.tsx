import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const NoticeSideMenuMoreBtn = () => {
	return <Btn to="/notice">more</Btn>;
}

const Btn = styled(Link)`
	position: relative;
	width: 40px;
	text-align: center;
	display: block;
	margin-left: auto;
	padding: 0;
	border-bottom: 1px solid ${palette.gray4};
	color: ${palette.gray4};

	&:active,
	&:hover {
		color: ${palette.gray7};
		border-bottom: 1px solid ${palette.gray7};
	}
`;

export default NoticeSideMenuMoreBtn