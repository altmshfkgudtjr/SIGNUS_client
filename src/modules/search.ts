import produce from 'immer';
// import * as searchAPI from 'controllers/search'
// import { initSnackbar } from './snackbar'
// types
import { Post } from './newsfeed'

/* Thunk 함수 */
export const searchKeyword = (keyword: string) => (dispatch: any) => {
	console.log(keyword);
}

/* 액션 */
const ADD_POSTS = 'search/ADD_POSTS' as const;

export const addPosts = (posts: Post[]) => ({type: ADD_POSTS, payload: posts});

type SearchAction =
	| ReturnType<typeof addPosts>


/* 타입 */
type PostsState = Post[];
type WaitingPostsState = Post[];


/* 초기상태 */
export type SearchState = {
	posts: PostsState,
	waitingPosts: WaitingPostsState
}
const initialState: SearchState = {
	posts: [],
	waitingPosts: []
};


/* 리듀서 */
function search(state: SearchState = initialState, action: SearchAction): SearchState {
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

export default search;