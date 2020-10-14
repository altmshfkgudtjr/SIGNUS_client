import React from 'react'
import styled from 'styled-components'
// components
import PageInfo from 'components/commons/PageInfo'
// lib
import media from 'lib/styles/media'

const NoticeSideMenu = () => {
	return (
		<Container>
			<InfoContainer>
				<PageInfo icon_src="/icons/1x/message.png"
									small_info="공지사항"
									large_info="Notice" />
			</InfoContainer>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 300px;

	${media.small} {
		width: 100%;
	}
`;

const InfoContainer = styled.div`
	position: relative;
	width: 100%;
	margin: auto;

	${media.small} {
		width: 95%;
		margin: 0 auto .5rem auto;
	}
`;

export default NoticeSideMenu