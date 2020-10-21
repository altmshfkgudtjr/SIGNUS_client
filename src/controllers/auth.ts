import Fetch from './fetch'

/* 
	:::: 로그인 ::::
*/
export const Login = (id: string, pw: string) => {
	const sendData = {
		id: id,
		pw: pw
	};
	return Fetch("/api/auth/signin", "POST", sendData).then((res) => {
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
	return Fetch("/api/auth", "GET").then((res) => {
		if (res.msg === 'success') {
			return res.result;
		} else {
			return false;
		}
	});
}

/*
	:::: 회원가입 ::::
*/
export const SignUp = (id: string, pw: string, sj_id: string, sj_pw: string) => {
	const sendData = {
		id: id,
		pw: pw,
		sj_id: sj_id,
		sj_pw: sj_pw
	};
	return Fetch("/api/auth/signup", "POST", sendData).then((res) => {
		if (res.msg === 'success') {
			return res.result;
		} else {
			return false;
		}
	});
}

/* 
	:::: 사용자 인증 ::::
*/
export const AuthorizingUser = (id: string, pw: string) => {
	const sendData = {
		sj_id: id,
		sj_pw: pw
	};
	return Fetch("/api/auth/sejong", "POST", sendData).then((res) => {
		if (res.msg === 'success') {
			return res.result;
		} else {
			return false;
		}
	});
}