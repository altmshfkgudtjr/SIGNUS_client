import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
	position: relative;
	width: 100%;
	font-size: 14px;
	line-height: 2rem;
	font-weight: 600;
	border-bottom: 1px solid #DDD;
	margin-bottom: .5rem;
`;

type TitleProps = {
	message: String
};

const Title = ({message}: TitleProps) => {
	return <Content>{message}</Content>;
}

export default Title