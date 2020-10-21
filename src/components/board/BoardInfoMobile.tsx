import React from 'react'
import styled from 'styled-components'
// components
import PageInfo from 'components/commons/PageInfo'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
import media, { mediaValue } from 'lib/styles/media'
// icons
import { CardViewIcon as cardViewIcon, ListViewIcon as listViewIcon } from 'static/svg'

interface BoardInfoMobileProps {
	small_info: string;
	large_info: string;
	view: string;
	setViewGrid(): void;
	setViewList(): void;
};
const BoardInfoMobile = ({small_info, large_info, view, setViewGrid, setViewList}: BoardInfoMobileProps) => {
	return (
		<Container>
			<PageInfo small_info={small_info}
								large_info={large_info} />

			<OptionWrapper>
				<OptionItem onClick={setViewGrid} selected={view === 'GRID'}>
					<CardViewIcon />
				</OptionItem>
				<OptionItem onClick={setViewList} selected={view === 'LIST'}>
					<ListViewIcon />
				</OptionItem>
			</OptionWrapper>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	display: flex;
	width: 95%;
	height: auto;
	border-bottom: 1px solid ${palette.gray2};
	margin: 0 auto .5rem auto;

	@media (min-width: ${mediaValue.small + 1}px) {
		display: none;
	}
`;

const OptionWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	margin-right: .5rem;

	${media.small} {
		margin-right: 0;
	}
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
			opacity: 1;
			filter: invert(61%) sepia(19%) saturate(7010%) hue-rotate(122deg) brightness(94%) contrast(86%);
		}
	}

	${props => props.selected && `
		border-bottom: 1.5px solid ${palette.teal4};

		& > img {
			opacity: 1;
			filter: invert(61%) sepia(19%) saturate(7010%) hue-rotate(122deg) brightness(94%) contrast(86%);
		}
	`};
`;

const CardViewIcon = styled(cardViewIcon)`
	position: relative;
	display: block;
	width: 22px;
	height: 22px;
	margin: 6px auto;
	opacity: .4;
`;

const ListViewIcon = styled(listViewIcon)`
	position: relative;
	display: block;
	width: 22px;
	height: 22px;
	margin: 6px auto;
	opacity: .4;
`;

export default BoardInfoMobile