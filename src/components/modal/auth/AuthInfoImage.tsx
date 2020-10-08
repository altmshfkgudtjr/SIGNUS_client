import React from 'react'
import styled from 'styled-components'

const AuthInfoImage = () => {
	return (
		<Container>
			<InfoImg src="/images/loginInfo.png" alt="WITH" />
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	margin: 3.5rem auto 2rem auto;
`;

const InfoImg = styled.img`
	position: relative;
	display: block;
	margin: auto;
`;

export default AuthInfoImage