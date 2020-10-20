import produce from 'immer';
import * as newfeedAPI from 'controllers/newsfeed'
import { initSnackbar } from 'modules/snackbar'
// types
import { NewsfeedThunk } from 'modules/types'

/* Thunk 함수 */
export const addRecommendationPosts = (): NewsfeedThunk => {
	return async dispatch => {
	dispatch(clearPosts());
		await newfeedAPI.RecommendationPosts().then(res => {
			if (res) {
				const posts = res.splice(0,40);
				dispatch(initPosts({
					posts: posts, 
					waits: res
				}));
				window.scrollTo(0,0);
			} else {
				dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
			}
		});
	}
}

export const addPopularityPosts = (): NewsfeedThunk => {
	return async dispatch => {
		dispatch(clearPosts());
		await newfeedAPI.PopularityPosts().then(res => {
			if (res) {
				const posts = res.splice(0,40);
				dispatch(initPosts({
					posts: posts, 
					waits: res
				}));
				window.scrollTo(0,0);
			} else {
				dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
			}
		});
	}
}

export const addCategoryPosts = (category: string): NewsfeedThunk => {
	return async dispatch => {
		dispatch(clearPosts());
		newfeedAPI.CategoryPosts(category).then(res => {
			if (res) {
				const posts = res.splice(0,40);
				dispatch(initPosts({
					posts: posts, 
					waits: res
				}));
				window.scrollTo(0,0);
			} else {
				dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
			}
		});
	}
}

export const loadPosts = (): NewsfeedThunk => {
	return async (dispatch, getState) => {
		const state = getState();
		const posts = state.newsfeed.waitingPosts.slice(0,40);
		
		if (posts.length === 0) {
			return Promise.resolve();
		}
	
		dispatch(pushPosts(posts));
		dispatch(popPosts());
	}
}


/* 액션 */
const CLEAR_POSTS = 'newsfeed/CLEAR_POSTS' as const;
const INIT_POSTS = 'newsfeed/INIT_POSTS' as const;
const PUSH_POSTS = 'newsfeed/PUSH_POSTS' as const;
const POP_POSTS = 'newsfeed/POP_POSTS' as const;

export const clearPosts = () => ({type: CLEAR_POSTS});
export const initPosts = (data: {posts: Post[], waits: Post[]}) => ({type: INIT_POSTS, payload: data});
export const pushPosts = (posts: Post[]) => ({type: PUSH_POSTS, payload: posts});
export const popPosts = () => ({type: POP_POSTS});

export type NewsfeedAction =
	| ReturnType<typeof clearPosts>
	| ReturnType<typeof initPosts>
	| ReturnType<typeof pushPosts>
	| ReturnType<typeof popPosts>


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


/* 초기상태 */
export type NewsfeedState = {
	posts: PostsState,
	waitingPosts: PostsState
}
const initialState: NewsfeedState = {
	posts: [],
	waitingPosts: []
};


/* 리듀서 */
function newsfeed(state: NewsfeedState = initialState, action: NewsfeedAction): NewsfeedState {
	switch (action.type) {
		case CLEAR_POSTS:
			/* 포스트 비우기 */
			return produce(state, draft => {
				draft.posts = [];
			});
		case INIT_POSTS:
			/* 포스트 새로 추가 */
			return produce(state, draft => {
				draft.posts = action.payload['posts'];
				draft.waitingPosts = action.payload['waits'];
			});
		case PUSH_POSTS:
			/* 포스트 추가 */
			return produce(state, draft => {
				draft.posts = draft.posts.concat(action.payload);
			});
		case POP_POSTS:
			/* 포스트 제거 */
			return produce(state, draft => {
				draft.waitingPosts.splice(0, 40);
			});
		default:
			return state;
	}
}

export default newsfeed;