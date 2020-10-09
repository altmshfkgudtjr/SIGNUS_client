import produce from 'immer';
import * as newfeedAPI from '../controllers/newsfeed'

/* Thunk 함수 */
export const addRecommendationPosts = () => (dispatch: any) => {
	newfeedAPI.RecommendationPosts().then(res => {
		if (res) {
			dispatch(addPosts(res));
		} else {
			console.log("\n%c[Error]", 'color: #dc3545', "Get recommendation posts failed.\n\n");
		}
	});
}
export const addPopularityPosts = () => (dispatch: any) => {
	newfeedAPI.PopularityPosts().then(res => {
		if (res) {
			dispatch(addPosts(res));
		} else {
			console.log("\n%c[Error]", 'color: #dc3545', "Get popularity posts failed.\n\n");
		}
	});
}
export const addCategoryPosts = (category: string) => (dispatch: any) => {
	newfeedAPI.CategoryPosts(category).then(res => {
		if (res) {
			dispatch(addPosts(res));
		} else {
			console.log("\n%c[Error]", 'color: #dc3545', "Get category posts failed.\n\n");
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
	id: number;
	text: string;
	done: boolean;
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