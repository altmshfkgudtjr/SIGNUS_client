import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'
import palette from '../../lib/styles/palette'
import media from 'lib/styles/media'
// utils
import * as postUtils from 'lib/utils/postUtils'
// modules
import { initSnackbar } from 'modules/snackbar'

interface PostShareBtnProps {
	url: string;
	isList: boolean;
}
const PostShareBtn = ({url, isList}: PostShareBtnProps) => {
	const dispatch = useDispatch();
	const [copy, setCopy] = useState<boolean>(false);
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	
	const onClick = () => {
		dispatch(initSnackbar("게시글 URL이 복사되었습니다.", "success"));
		setCopy(true);
		setTimeout(() => {
			if (textareaRef.current) {
				postUtils.clipboardCopy(textareaRef.current).then(() => {
					setCopy(false);
				});
			}
		}, 0);
	};

	return (
		<Container onClick={onClick} isList={isList}>
			<Content>
				<Icon src="/icons/1x/export.png" alt="공유" />
				<Message>공유하기</Message>
			</Content>

			{copy && <UnvisibleInput ref={textareaRef} defaultValue={url} />}
		</Container>
	);
}

interface ContainerStyled {
	isList: boolean;
};
const Container = styled.div<ContainerStyled>`
	position: relative;
	width: ${props => props.isList
		? '100%'
		: '50%'
	};
	height: ${props => props.isList
		? '50%'
		: '100%'
	};
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: right;
	line-height: 20px;
	transition: .3s ${styles.transition};

	&:active,
	&:hover {
		background-color: ${palette.gray0};
	}

	${media.small} {
		width: 50%;
		height: 100%;
	}
`;

const Content = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

const Icon = styled.img`
	position: relative;
	width: 14px;
	height: 14px;
	padding-right: 6px;
`;

const Message = styled.span`
	position: relative;
	text-align: right;
	font-size: 14px;
	line-height: 20px;
`;

const UnvisibleInput = styled.textarea`
	width: 0px;
	height: 0px;
`;

export default PostShareBtn