import produce from 'immer';
import * as searchAPI from 'controllers/search'
import { initSnackbar } from './snackbar'
// types
import { Post } from './newsfeed'

/* Thunk 함수 */
export const searchKeyword = (keyword: string) => (dispatch: any) => {
	searchAPI.Search(keyword).then(res => {
		if (res) {
			const prevPosts = res.posts;
			const posts = prevPosts.splice(0,40);
			dispatch(initPosts({
				posts: posts, 
				waits: prevPosts
			}));
			} else {
			dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
		}
	});
};

export const loadPosts = () => (dispatch: any, getState: Function) => {
	const state = getState();
	const posts = state.newsfeed.waitingPosts.slice(0,40);
	
	if (posts.length === 0) {
		return;
	}

	dispatch(pushPosts(posts));
	dispatch(popPosts());
}

/* 액션 */
const INIT_POSTS = 'newsfeed/INIT_POSTS' as const;
const PUSH_POSTS = 'newsfeed/PUSH_POSTS' as const;
const POP_POSTS = 'newsfeed/POP_POSTS' as const;

export const initPosts = (data: {posts: Post[], waits: Post[]}) => ({type: INIT_POSTS, payload: data});
export const pushPosts = (posts: Post[]) => ({type: PUSH_POSTS, payload: posts});
export const popPosts = () => ({type: POP_POSTS});

type SearchAction =
	| ReturnType<typeof initPosts>
	| ReturnType<typeof pushPosts>
	| ReturnType<typeof popPosts>


/* 타입 */
type PostsState = Post[];


/* 초기상태 */
export type SearchState = {
	posts: PostsState,
	waitingPosts: PostsState
}
const initialState: SearchState = {
	posts: [],
	waitingPosts: []
};


/* 리듀서 */
function search(state: SearchState = initialState, action: SearchAction): SearchState {
	switch (action.type) {
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

export default search;