import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

interface NoticeWriteTitleProps {
	title: string;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
}
const NoticeWriteTitle = ({title, setTitle}: NoticeWriteTitleProps) => {
	const onChange = (e: any) => {
		if (e.target) {
			setTitle(e.target.value);
		}
	}

	return <Input type="text"
								placeholder="제목을 입력하세요"
								defaultValue={title}
								onChange={onChange} />;
}

const Input = styled.input`
	width: 100%;
	padding-bottom :1rem;
	border-bottom: 1px solid ${palette.gray2};
	margin-bottom: 1rem;
	font-size: 38px;

	&::placeholder {
		color: ${palette.gray3};
	}

	${media.small} {
		font-size: 28px;
	}
`;

export default NoticeWriteTitle