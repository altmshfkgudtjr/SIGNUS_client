import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const NoticeSideMenuTitle = () => {
	return <Content>모아보기</Content>;
}

const Content = styled.div`
	position: relative;
	font-weight: 600;
	padding-bottom: .5rem;
	border-bottom: 1px solid ${palette.gray2};
	margin-bottom: 1rem;
`;

export default NoticeSideMenuTitle