import Fetch from './fetch'
/* 
	:::: 공지사항 단일반환 & 전체반환 ::::
*/
export const GetNotice = (postId: (string | null)) => {
	const url = postId 
								? "/api/signus/v1/notice/"+postId
								: "/api/signus/v1/notice";

	return Fetch(url, "GET").then((res) => {
		if (res.msg === 'success') {
			return JSON.parse(res.result);
		} else {
			return false;
		}
	});
}

/* 
	:::: 공지사항 추가 ::::
*/
export const AddNotice = (title: string, post: string) => {
	const sendData = {
		title: title,
		post: post
	};

	return Fetch("/api/signus/v1/notice", "PUT", sendData).then((res) => {
		if (res.msg === 'success') {
			return res.result;
		} else {
			return false;
		}
	});
}

/* 
	:::: 공지사항 수정 ::::
*/
export const UpdateNotice = (title: string, post: string, noticeId: string) => {
	const sendData = {
		title: title,
		post: post
	};

	return Fetch("/api/signus/v1/notice/"+noticeId, "PATCH", sendData).then((res) => {
		if (res.msg === 'success') {
			return res.result;
		} else {
			return false;
		}
	});
}

/* 
	:::: 공지사항 삭제 ::::
*/
export const DeleteNotice = (noticeId: string) => {
	return Fetch("/api/signus/v1/notice/"+noticeId, "DELETE").then((res) => {
		if (res.msg === 'success') {
			return res.result;
		} else {
			return false;
		}
	});
}