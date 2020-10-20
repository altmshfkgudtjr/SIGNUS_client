import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
// components
import NoticeSideMenu from 'components/notice/NoticeSideMenu'
import NoticePost from 'components/notice/NoticePost'
// modules
import { RootState } from 'store/index'
import { GetNotice, GetNoticeList, Validation, DeleteNotice } from 'modules/notice'

interface NoticeProps {
	noticeId: string;
}
const Notice = ({noticeId}: NoticeProps) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const userId = useSelector((state: RootState) => state.auth.user['id']);
	const isAdmin = useSelector((state: RootState) => state.auth.admin);
	const noticeList = useSelector((state: RootState) => state.notice.noticeList);
	const notice = useSelector((state: RootState) => state.notice.notice);

	/* 공지사항 API 호출 */
	useEffect(() => {
		dispatch(GetNotice(noticeId));
	}, [noticeId, dispatch]);

	/* 공지사항 권한 API 호출 */
	useEffect(() => {
		dispatch(Validation());
	}, [userId, isAdmin, dispatch]);

	/* 공지사항 목록 API 호출 */
	useEffect(() => {
		dispatch(GetNoticeList());
		window.scrollTo(0,0);
	}, [dispatch]);

	/* 공지사항 수정 */
	const onEdit = () => {
		history.push('/notice/write?id=' + noticeId);
	};

	/* 공지사항 삭제 */
	const onDelete = () => {
		const result = window.confirm("공지사항을 삭제하시겠습니까?");
		if (result) {
			Promise.resolve(dispatch(DeleteNotice(noticeId))).then(() => {
				history.push('/notice');
				window.location.reload();
			});
		}
	};

	return (
		<>
			<NoticeSideMenu info="Notice"
											noticeList={noticeList} />
			<NoticePost notice={notice}
									onEdit={onEdit}
									onDelete={onDelete} />
		</>
	);
}

export default Notice