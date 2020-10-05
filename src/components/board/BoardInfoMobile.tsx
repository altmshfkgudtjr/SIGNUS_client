import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'
import palette from '../../lib/styles/palette'

const Container = styled.div`
	position: relative;
	display: flex;
	width: 95%;
	border-bottom: 1px solid ${palette.gray2};
	margin: 0 auto .5rem auto;

	@media (min-width: 702px) {
		display: none;
	}
`;

const Content = styled.div`
	position: relative;
	width: 100%;
	flex-grow: 1;
	${styles.noselect}
`;

const SmallInfo = styled.div`
	position: relative;
	font-size: 11px;
	font-weight: 600;
	opacity: .5;
`;

const LargeInfo = styled.div`
	position: relative;
	font-size: 24px;
	font-weight: 600;
`;

const OptionWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
`;

interface ContainerStyled {
   selected: boolean;
}
const OptionItem = styled.div<ContainerStyled>`
	position: relative;
	display: inline-block;
	vertical-align: bottom;
	width: 32px;
	height: 32px;
	margin-top: 18px;
	margin-left: 1rem;
	cursor: pointer;
	transition: .3s ${styles.transition};
	border-bottom: 1.5px solid rgba(0,0,0,0);

	&:first-child {
		margin-left: 0;
	}

	&:active,
	&:hover {
		& > img {
			filter: invert(61%) sepia(19%) saturate(7010%) hue-rotate(122deg) brightness(94%) contrast(86%);
		}
	}

	${props => props.selected && `
		border-bottom: 1.5px solid ${palette.teal4};

		& > img {
			filter: invert(61%) sepia(19%) saturate(7010%) hue-rotate(122deg) brightness(94%) contrast(86%);
		}
	`};
`;

const OptionIcon = styled.img`
	position: relative;
	display: block;
	width: 18px;
	height: 18px;
	margin: 7px auto;
`;


type BoardInfoMobileProps = {
	small_info: string,
	large_info: string
};

const BoardInfoMobile = ({small_info, large_info}: BoardInfoMobileProps) => {
	return (
		<Container>
			<Content>
				<SmallInfo>{small_info}</SmallInfo>
				<LargeInfo>{large_info}</LargeInfo>
			</Content>

			<OptionWrapper>
				<OptionItem selected={true}>
					<OptionIcon src="/icons/1x/card_view.png" alt="격자" />
				</OptionItem>
				<OptionItem selected={false}>
					<OptionIcon src="/icons/1x/list_view.png" alt="목록" />
				</OptionItem>
			</OptionWrapper>
		</Container>
	);
}

export default BoardInfoMobile