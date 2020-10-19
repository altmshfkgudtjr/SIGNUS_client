import produce from 'immer';
import * as searchAPI from 'controllers/search'
import { initSnackbar } from './snackbar'
// types
import { Post } from './newsfeed'

/* Thunk 함수 */
export const searchKeyword = (keyword: string) => (dispatch: any) => {
	dispatch(clearPosts());
	searchAPI.Search(keyword).then(res => {
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
};

export const loadPosts = () => (dispatch: any, getState: Function) => {
	const state = getState();
	const posts = state.search.waitingPosts.slice(0,40);
	
	if (posts.length === 0) {
		return;
	}

	dispatch(pushPosts(posts));
	dispatch(popPosts());
}

export const getTopKeywords = () => (dispatch: any) => {
	searchAPI.TopKeywords().then(res => {
		if (res) {
			dispatch(updateTopKeywords(res));
		} else {
			dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
		}
	})
}

/* 액션 */
const CLEAR_POSTS = 'search/CLEAR_POSTS' as const;
const INIT_POSTS = 'search/INIT_POSTS' as const;
const PUSH_POSTS = 'search/PUSH_POSTS' as const;
const POP_POSTS = 'search/POP_POSTS' as const;
const SET_TOP_KEYWORDS = 'search/SET_TOP_KEYWORDS' as const;

export const clearPosts = () => ({type: CLEAR_POSTS});
export const initPosts = (data: {posts: Post[], waits: Post[]}) => ({type: INIT_POSTS, payload: data});
export const pushPosts = (posts: Post[]) => ({type: PUSH_POSTS, payload: posts});
export const popPosts = () => ({type: POP_POSTS});
export const updateTopKeywords = (data: any) => ({type: SET_TOP_KEYWORDS, payload: data});

type SearchAction =
	| ReturnType<typeof clearPosts>
	| ReturnType<typeof initPosts>
	| ReturnType<typeof pushPosts>
	| ReturnType<typeof popPosts>
	| ReturnType<typeof updateTopKeywords>


/* 타입 */
type PostsState = Post[];


/* 초기상태 */
export type SearchState = {
	posts: PostsState,
	waitingPosts: PostsState,
	topKeywords: string[],
}
const initialState: SearchState = {
	posts: [],
	waitingPosts: [],
	topKeywords: []
};


/* 리듀서 */
function search(state: SearchState = initialState, action: SearchAction): SearchState {
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
			}) 
		case SET_TOP_KEYWORDS:
			/* 인기 키워드 설정 */
			return produce(state, draft => {
				draft.topKeywords = action.payload;
			});
		default:
			return state;
	}
}

export default search;