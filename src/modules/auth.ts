import produce from 'immer';
import * as authAPI from '../controllers/auth'
import { initSnackbar } from './snackbar'

/* Thunk 함수 */
export const GetUser = () => (dispatch: any) => {
	authAPI.GetUser().then((res: any) => {
		if (res) {
			dispatch(setUser(res));
		} else {
			dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
		}
	});
}

export const Login = (id: string, pw: string) => (dispatch: any) => {
	authAPI.Login(id, pw).then((res: any) => {
		if (res) {
			window.localStorage.setItem('tk', res['access_token']);
			window.location.reload();
		} else {
			dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
		}
	});
}

export const Logout = () => (dispatch: any) => {
	window.localStorage.removeItem('tk');
	dispatch(deleteUser());
	window.location.reload();
}

export const SignUp = (id: string, pw: string) => (dispatch: any) => {
	authAPI.SignUp(id, pw).then((res: any) => {
		if (res) {
			window.localStorage.setItem('tk', res['access_token']);
			window.location.reload();
		} else {
			dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
		}
	});
}

/* 액션 */
const SET_USER = 'auth/SET_USER' as const;
const DELETE_USER = 'auth/DELETE_USER' as const;

export const setUser = (user: any) => ({type: SET_USER, payload: user});
export const deleteUser = () => ({type: DELETE_USER});

type AuthAction =
	| ReturnType<typeof setUser>
	| ReturnType<typeof deleteUser>


/* 타입 */
type User = {
	id: string,
	favList: any[],
	viewList: any[],
	newsfeedList: any[],
	searchList: any[]
};


/* 초기상태 */
type AuthState = {
	login: boolean,
	user: User
};
const initialState: AuthState = {
	login: false,
	user: {
		id: '',
		favList: [],
		viewList: [],
		newsfeedList: [],
		searchList: []
	}
};


/* 리듀서 */
function newsfeed(state: AuthState = initialState, action: AuthAction): AuthState {
	switch (action.type) {
		case SET_USER:
			/* 사용자 로그인 */
			return produce(state, draft => {
				draft.login = true;
				draft.user.id = action.payload['user_id'];
				draft.user.favList = action.payload['fav_list'];
				draft.user.viewList = action.payload['view_list'];
				draft.user.newsfeedList = action.payload['newsfeed_list'];
				draft.user.searchList = action.payload['search_list'];
			});

		case DELETE_USER:
			/* 사용자 로그아웃 */
			return produce(state, draft => {
				draft.login = false;
				draft.user = {
					id: '',
					favList: [],
					viewList: [],
					newsfeedList: [],
					searchList: []
				};
			});

		default:
			return state;
	}
}

export default newsfeed;