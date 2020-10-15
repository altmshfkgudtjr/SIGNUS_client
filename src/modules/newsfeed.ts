import produce from 'immer';
import * as newfeedAPI from '../controllers/newsfeed'
import { initSnackbar } from './snackbar'

/* Thunk 함수 */
export const addRecommendationPosts = () => (dispatch: any) => {
	newfeedAPI.RecommendationPosts().then(res => {
		if (res) {
			dispatch(addPosts(res));
		} else {
			dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
			}
	});
}
export const addPopularityPosts = () => (dispatch: any) => {
	newfeedAPI.PopularityPosts().then(res => {
		if (res) {
			dispatch(addPosts(res));
		} else {
			dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
			}
	});
}
export const addCategoryPosts = (category: string) => (dispatch: any) => {
	newfeedAPI.CategoryPosts(category).then(res => {
		if (res) {
			dispatch(addPosts(res));
		} else {
			dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
		}
	});
}


/* 액션 */
const ADD_POSTS = 'newsfeed/ADD_POSTS' as const;

export const addPosts = (posts: Post[]) => ({type: ADD_POSTS, payload: posts});

type NewsfeedAction =
	| ReturnType<typeof addPosts>


/* 타입 */
export type Post = {
	_id: {$oid: string},
	title: string,
	post: string,
	img: (string | number),
	fav_cnt: number,
	view: number,
	url: string,
	date: {$date: number},
	end_date: {$date: number}
};
type PostsState = Post[];
type WaitingPostsState = Post[];


/* 초기상태 */
export type NewsfeedState = {
	posts: PostsState,
	waitingPosts: WaitingPostsState
}
const initialState: NewsfeedState = {
	posts: [],
	waitingPosts: []
};


/* 리듀서 */
function newsfeed(state: NewsfeedState = initialState, action: NewsfeedAction): NewsfeedState {
	switch (action.type) {
		case ADD_POSTS:
			/* 포스트 새로 추가 */
			return produce(state, draft => {
				draft.waitingPosts = [];
				draft.posts = action.payload;
			});
		default:
			return state;
	}
}

export default newsfeed;