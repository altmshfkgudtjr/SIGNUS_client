import React from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize';
// lib
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

interface NoticeWritePostProps {
	post: string;
	setPost: React.Dispatch<React.SetStateAction<string>>;
}
const NoticeWritePost = ({post, setPost}: NoticeWritePostProps) => {
	const onChange = (e: any) => {
		if (e.target) {
			setPost(e.target.value);
		}
	}

	return <Textarea placeholder="내용을 입력하세요."
									 defaultValue={post}
									 onChange={onChange} />;
}

const Textarea = styled(TextareaAutosize)`
	width: 100%;
	padding-bottom :1rem;
	min-height: 50vh;
	margin-bottom: 1rem;
	white-space: pre-wrap;
	border: none;
	border-bottom: 1px solid ${palette.gray2};
	background-color: rgba(0,0,0,0);
	overflow: hidden;
	resize: none;

	&::placeholder {
		color: ${palette.gray3};
	}

	${media.small} {
		font-size: 14px;
	}
`;

export default NoticeWritePost