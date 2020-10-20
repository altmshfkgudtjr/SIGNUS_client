import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'

interface PageInfoProps {
	icon_src?: string;
	small_info: string;
	large_info: string;
}
const PageInfo = ({icon_src, small_info, large_info}: PageInfoProps) => {
	return (
		<Container>
			<Icon src={icon_src} alt="아이콘" />
			<InfoWrapper>
				<SmallInfo>{small_info}</SmallInfo>
				<LargeInfo>{large_info}</LargeInfo>
			</InfoWrapper>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	margin-bottom: 55px;
	${styles.noselect}

	${media.small} {
		width: 100%;
		margin-bottom: 0;
		flex-grow: 1;
	}
`;

const Icon = styled.img`
	position: relative;
	width: 66px;
	height: 66px;
	margin-right: 1rem;

	${media.small} {
		display: none;
	}
`;

const InfoWrapper = styled.div`
	position: relative;
	width: auto;
	flex-grow: 1;
`;

const SmallInfo = styled.div`
	position: relative;
	font-size: 14px;
	font-weight: 600;
	opacity: .5;

	${media.small} {
		font-size: 11px;
	}
`;

const LargeInfo = styled.div`
	position: relative;
	font-size: 38px;
	font-weight: 600;

	${media.small} {
		font-size: 24px;
	}
`;

export default PageInfo