import Fetch from './fetch'

/* 
	:::: 게시글 조회 ::::
*/
export const PostView = (postId: string) => {
	return Fetch("/api/user/view/push/"+postId, "PUT").then((res) => {
		if (res.msg === 'success') {
			return res.result;
		} else {
			return false;
		}
	});
}

/* 
	:::: 게시글 좋아요 실행 ::::
*/
export const PostLike = (postId: string) => {
	return Fetch("/api/signus/v1/post/like/"+postId, "PATCH").then((res) => {
		if (res.msg === 'success') {
			return res.result;
		} else {
			return false;
		}
	});
}

/* 
	:::: 게시글 좋아요 취소 ::::
*/
export const PostUnlike = (postId: string) => {
	return Fetch("/api/signus/v1/post/unlike/"+postId, "PATCH").then((res) => {
		if (res.msg === 'success') {
			return res.result;
		} else {
			return false;
		}
	});
}