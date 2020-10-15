import Fetch from './fetch'

/* 
	:::: 추천 뉴스피드 ::::
*/
export const RecommendationPosts = () => {
	return Fetch("/api/signus/v1/newsfeed/recom", "GET").then((res) => {
		if (res.msg === 'success') {
			return JSON.parse(res.result);
		} else {
			return false;
		}
	});
}

/* 
	:::: 인기 뉴스피드 ::::
*/
export const PopularityPosts = (callback?: Function, failed?: Function) => {
	return Fetch("/api/signus/v1/newsfeed/popular", "GET").then((res) => {
		if (res.msg === 'success') {
			return JSON.parse(res.result);
		} else {
			return false;
		}
	});
}

/* 
	:::: 카테고리 뉴스피드 ::::
	category: - 대학교
						- 공모전-행사
						- 진로-구인
						- 동아리-모임
*/
export const CategoryPosts = (category: string, callback?: Function, failed?: Function) => {
	return Fetch("/api/signus/v1/newsfeed/"+category, "GET").then((res) => {
		if (res.msg === 'success') {
			return JSON.parse(res.result);
		} else {
			return false;
		}
	});
}