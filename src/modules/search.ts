import produce from 'immer';
import * as searchAPI from 'controllers/search'
import { initSnackbar } from 'modules/snackbar'
// types
import { Post } from 'modules/newsfeed'
import { SearchThunk } from 'modules/types'

export const searchKeyword = (keyword: string): SearchThunk => {
	return async (dispatch, getState) => {
		const state = getState();
		const sortOption = state.search.searchOptions.sort === 'NEWEST' ? 1 : 0;
	
		dispatch(clearPosts());
		await searchAPI.Search(keyword, sortOption).then(res => {
			window.scrollTo(0,0);
			if (res) {
				const posts = res.splice(0,40);
				dispatch(initPosts({
					posts: posts, 
					waits: res
				}));
			} else {
				dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
			}
		});
	}
};

export const loadPosts = (): SearchThunk => {
	return async (dispatch, getState) => {
		const state = getState();
		const posts = state.search.waitingPosts.slice(0,40);
		
		if (posts.length === 0) {
			return Promise.resolve();
		}
	
		dispatch(pushPosts(posts));
		dispatch(popPosts());
	}
}

export const getTopKeywords = (): SearchThunk => {
	return async (dispatch, getState) => {
		await searchAPI.TopKeywords().then(res => {
			if (res) {
				const keywordList: any[] = res.realtime;
				const keywords = keywordList.map(keyword => keyword[0]);
				dispatch(updateTopKeywords(keywords));
			} else {
				dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
			}
		});
	};
}


/* 액션 */
const CLEAR_POSTS = 'search/CLEAR_POSTS' as const;
const INIT_POSTS = 'search/INIT_POSTS' as const;
const PUSH_POSTS = 'search/PUSH_POSTS' as const;
const POP_POSTS = 'search/POP_POSTS' as const;
const SET_TOP_KEYWORDS = 'search/SET_TOP_KEYWORDS' as const;
const SET_OPTIONS = 'search/SET_OPTIONS' as const;

export const clearPosts = () => ({type: CLEAR_POSTS});
export const initPosts = (data: {posts: Post[], waits: Post[]}) => ({type: INIT_POSTS, payload: data});
export const pushPosts = (posts: Post[]) => ({type: PUSH_POSTS, payload: posts});
export const popPosts = () => ({type: POP_POSTS});
export const updateTopKeywords = (data: any) => ({type: SET_TOP_KEYWORDS, payload: data});
export const setOptions = (data: SearchOptions) => ({type: SET_OPTIONS, payload: data });


/* 타입 */
export type SearchAction =
	| ReturnType<typeof clearPosts>
	| ReturnType<typeof initPosts>
	| ReturnType<typeof pushPosts>
	| ReturnType<typeof popPosts>
	| ReturnType<typeof updateTopKeywords>
	| ReturnType<typeof setOptions>

type SearchOptions = {
	sort: string;
}
type PostsState = Post[];


/* 초기상태 */
export type SearchState = {
	searchOptions: SearchOptions,
	posts: PostsState,
	waitingPosts: PostsState,

	topKeywords: string[],
}
const initialState: SearchState = {
	searchOptions: {
		sort: 'RELEVEANCE'
	},
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
		case SET_OPTIONS:
			/* 검색 옵션 설정 */
			return produce(state, draft => {
				draft.searchOptions = action.payload;
			});
		default:
			return state;
	}
}

export default search;