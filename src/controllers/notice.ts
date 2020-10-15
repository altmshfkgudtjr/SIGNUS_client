import Fetch from './fetch'

/* 
	:::: 공지사항 단일반환 & 전체반환 ::::
*/
export const GetNotice = (postId: (string | null)) => {
	// 임시 반환값
	if (postId) {
		return new Promise((resolve, reject) => {
			resolve({
				_id: "5f860df0asd0fxcxz6",
				title: "시그너스 v2 업데이트 변경사항",
				author: "altmgudtjr",
				date: "2020년 10월 9일",
				post: `안녕하세요. 시그너스입니다.

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
`
			});
		});	
	} else {
		return new Promise((resolve, reject) => {
			resolve([
				{
					_id: "5f860df0asd0fxcxz6",
					title: "시그너스 v2 업데이트 변경사항",
					author: "altmgudtjr",
					date: "2020년 10월 9일",
					post: ``
				},
				{
					_id: "52860df0asd0fxcxz7",
					title: "시그너스 v1 업데이트 변경사항",
					author: "altmgudtjr",
					date: "2020년 10월 6일",
					post: ``
				},
			]);
		});
	}

	const url = postId 
								? "/api/signus/v1/notice/"+postId
								: "/api/signus/v1/notice";

	return Fetch(url, "GET").then((res) => {
		if (res.msg === 'success') {
			return res.result;
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