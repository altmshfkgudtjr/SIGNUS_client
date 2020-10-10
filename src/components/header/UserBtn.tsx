import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'
import media from '../../lib/styles/media'
import palette from '../../lib/styles/palette'

interface UserBtnProps {
	name: string
}
const UserBtn = ({name}: UserBtnProps) => {
	return (
		<Container>
			<Name>{name}님</Name>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: auto;
	height: 40px;
	margin-right: 1rem;
	font-size: 14px;
	line-height: 40px;
	${styles.noselect}

	${media.small} {
		margin-right: .5rem;
	}
`;

const Name = styled.div`
	position: relative;
	height: 24px;
	line-height: 24px;
	max-width: 200px;
	vertical-align: top;
	font-size: 14px;
	font-weight: 600;
	color: ${palette.gray6};
	overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${media.small} {
  	max-width: 100px;
  }
`;

export default UserBtn