import Fetch from './fetch'

/* 
	:::: 로그인 ::::
*/
export const Login = (id: string, pw: string) => {
	const sendDate = {
		id: id,
		pw: pw
	};
	// 임시 반환값
	return new Promise((resolve, reject) => {
		resolve({
			'access_token': "Test Signus Access token"
		});
	});
	return Fetch("/api/user/signin", "POST", sendDate).then((res) => {
		if (res.msg === 'success') {
			return res.result;
		} else {
			return false;
		}
	});
}

/*
	:::: 사용자 정보 반환 ::::
*/
export const GetUser = () => {
	// 임시 반환값
	return new Promise((resolve, reject) => {
		resolve({
			"user_id": 'altmgudtjr',
			"fav_list": [],
			"view_list": [],
			"newsfeed_list": []
		});
	});
	return Fetch("/api/user", "GET").then((res) => {
		if (res.msg === 'success') {
			return res.result;
		} else {
			return false;
		}
	});
}