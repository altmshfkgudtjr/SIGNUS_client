import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// components
import NoticeSideMenu from 'components/notice/NoticeSideMenu'
import NoticePost from 'components/notice/NoticePost'
// modules
import { RootState } from 'store/index'
import { GetNotice, GetNoticeList, Validation } from 'modules/notice'

interface NoticeProps {
	noticeId: string;
}
const Notice = ({noticeId}: NoticeProps) => {
	const dispatch = useDispatch();
	const userId = useSelector((state: RootState) => state.auth.user['id']);
	const noticeList = useSelector((state: RootState) => state.notice.noticeList);
	const notice = useSelector((state: RootState) => state.notice.notice);

	/* 공지사항 API 호출 */
	useEffect(() => {
		dispatch(GetNotice(noticeId));
		dispatch(Validation(userId));
	}, [noticeId, userId, dispatch]);

	/* 공지사항 목록 API 호출 */
	useEffect(() => {
		dispatch(GetNoticeList());
	}, [dispatch]);

	/* 공지사항 수정 */
	const onEdit = () => {
		console.log("\n%c[미완성]", 'color: #dc3545', "공지사항 수정 기능\n\n");
	};

	/* 공지사항 삭제 */
	const onDelete = () => {
		console.log("\n%c[미완성]", 'color: #dc3545', "공지사항 삭제 기능\n\n");
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