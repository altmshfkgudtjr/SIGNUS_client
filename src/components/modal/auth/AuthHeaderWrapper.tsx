import React from 'react'
import styled from 'styled-components'

interface AuthHeaderWrapperProps {
	children: React.ReactNode;
}
const AuthHeaderWrapper = ({children}: AuthHeaderWrapperProps) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	position: relative;
	display: flex;
	margin-bottom: 1rem;
`;

export default AuthHeaderWrapper