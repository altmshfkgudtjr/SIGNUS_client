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
	return Fetch("/api/signus/v1/realtime", "GET").then((res) => {
		if (res.msg === 'success') {
			console.log(res);
			return res.result;
		} else {
			return false;
		}
	});
}
/* eslint-enable */