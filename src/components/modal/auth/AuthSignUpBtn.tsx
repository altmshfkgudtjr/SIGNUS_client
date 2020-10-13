import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../../lib/styles/styles'
import palette from '../../../lib/styles/palette'

interface AuthSignUpBtnProps {
	openSignUpContent(): void;
}
const AuthSignUpBtn = ({openSignUpContent}: AuthSignUpBtnProps) => {
	return (
		<Container>
			<Info>아직 계정이 없으신가요?</Info>
			<Btn onClick={openSignUpContent}>계정 만들기</Btn>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 20px;
	margin-top: 52px;
	text-align: right;
`;

const Info = styled.span`
	position: relative;
	font-size: 14px;
	color: ${palette.gray7};
	margin-right: .5rem;
`;

const Btn = styled.button`
	position: relative;
	font-size: 14px;
	color: ${palette.teal4};
	${styles.noselect};
	transition: .2s ${styles.transition};
	border-bottom: 1px solid rgba(0,0,0,0);
	padding: 0;

	&:active,
	&:hover {
		border-bottom: 1px solid ${palette.teal4};
	}
`;

export default AuthSignUpBtn