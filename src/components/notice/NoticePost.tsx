import React from 'react'
import styled from 'styled-components'
// components
import NoticePostTitle from './NoticePostTitle'
import NoticePostInfo from './NoticePostInfo'
import NoticePostText from './NoticePostText'
// lib
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

const NoticePost = () => {
	return (
		<Container>
			<NoticePostTitle message="시그너스 v2 업데이트 변경사항" />
			<NoticePostInfo userId="SIGNUS" date="2020년 10월 1일" />
			<NoticePostText text={text} />
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: auto;
	flex-grow: 1;

	${media.small} {
		margin-top: .5rem;
		border-top: .5rem solid ${palette.gray1};
	}
`;

const text = `안녕하세요. 시그너스입니다.

항상 시그너스 서비스를 이용해 주시는 고객님께 깊은 감사를 드립니다. 

더욱 안정적인 서비스를 제공해 드리기 위해 시그너스계정 시스템 점검이 진행될 예정입니다. 

점검 시간 동안 시그너스 일부 서비스가 중단되오니 양해 부탁드립니다. 



1. 점검 일시

: 2020년 9월 22일 새벽 2시 ~ 6시 (GMT+09:00)

  (예상치 못한 문제로 작업이 지연될 경우 시간이 연장될 수 있습니다.)



2. 점검 영향

: 점검 시간 동안 아래 서비스 이용 불가

- 시그너스계정 가입

- 시그너스 서비스 탈퇴

- 시그너스 서비스를 이용 중인 시그너스계정 탈퇴 



서비스 이용에 불편을 드린 점 다시 한번 사과드리며, 

보다 편하고 안정적인 서비스로 보답하겠습니다. 



감사합니다. 
`;

export default NoticePost