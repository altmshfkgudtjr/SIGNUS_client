import Fetch from './fetch'

export const Search = (keyword: string, sort: number) => {
	const sendData = {
		keywords: keyword,
		order: sort
	};
	return Fetch("/api/signus/v1/search", "POST", sendData).then((res) => {
		if (res.msg === 'success') {
			return JSON.parse(res.result.posts);
		} else {
			return false;
		}
	});
}

/* eslint-disable */
export const TopKeywords = () => {
	return new Promise((resolve, reject) => {
		resolve(['시그너스', '공모전', '인공지능', '무중력지대', '대학내일', '장학금', '비대면수업', '코로나']);
	});
	return Fetch("/api/signus/v1/keywords", "GET").then((res) => {
		if (res.msg === 'success') {
			return res.result;
		} else {
			return false;
		}
	});
}
/* eslint-enable */