import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
// components
import NoticeWriteLayout from 'components/notice/NoticeWriteLayout'
import NoticeWriteTitle from 'components/notice/NoticeWriteTitle'
import NoticeWritePost from 'components/notice/NoticeWritePost'
import NoticeWriteSubmitBtn from 'components/notice/NoticeWriteSubmitBtn'
// modules
import { RootState } from 'store/index'
import { GetNotice, SendNotice } from 'modules/notice'

interface NoticeWriteProps {
	noticeId: (string | null);
}
const NoticeWrite = ({noticeId}: NoticeWriteProps) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const notice = useSelector((state: RootState) => state.notice.notice);

	const [title, setTitle] = useState<string>('');
	const [post, setPost] = useState<string>('');

	/* 공지사항 작성 or 수정 판별 */
	/* eslint-disable */
	useEffect(() => {
		if (!noticeId) {
			return;
		}

		if (noticeId === notice.id) {
			setTitle(notice.title);
			setPost(notice.post);
		} else {
			dispatch(GetNotice(noticeId))
			/* Redux-thunk Type Error를 해결한 후에, 아래 Code 이어붙이기 */
			// .catch(() => {
			// 	dispatch(initSnackbar("존재하지 않는 공지사항입니다.", "error"));
			// 	history.push('/notice');
			// });
		}
	}, [noticeId, dispatch]);
	/* eslint-enable */

	/* 공지사항 작성/수정 완료 함수 */
	const noticeSubmit = () => {
		dispatch(SendNotice(noticeId, title, post))
		/* Redux-thunk Type Error를 해결한 후에, 아래 Code 이어붙이기 */
		// .then((res) => {
		// 	if (res) {
		// 		history.push('/notice');
		// 		window.location.reload();
		// 	}
		// });
	}

	/* 공지사항 취소 함수 */
	const noticeCancel = () => {
		if (!noticeId) {
			history.push('/notice');
		} else {
			history.push('/notice/'+noticeId);
		}
	}

	return (
		<NoticeWriteLayout>
			<NoticeWriteTitle title={title} setTitle={setTitle} />
			<NoticeWritePost post={post} setPost={setPost} />
			<BtnWrapper>
				<NoticeWriteSubmitBtn onClick={noticeSubmit} message="작성하기" />
				<NoticeWriteSubmitBtn onClick={noticeCancel} message="취소하기" />
			</BtnWrapper>
		</NoticeWriteLayout>
	);
}

const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export default NoticeWrite