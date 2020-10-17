import Fetch from './fetch'

export const Search = (keyword: string) => {
	const sendData = {
		keywords: keyword,
		order: 1
	};
	return Fetch("/api/signus/v1/search", "POST", sendData).then((res) => {
		if (res.msg === 'success') {
			return JSON.parse(res.result.posts);
		} else {
			return false;
		}
	});
}