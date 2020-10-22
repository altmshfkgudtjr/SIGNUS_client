import produce from 'immer';
import * as authAPI from '../controllers/auth'
import { initSnackbar } from './snackbar'
// types
import { AuthThunk } from 'modules/types'

/* Thunk 함수 */
export const GetUser = (): AuthThunk => {
	return async dispatch => {
		await authAPI.GetUser().then((res: any) => {
			if (res) {
				dispatch(setUser(res));
			} else {
				dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
			}
		});
	};
}

export const Login = (id: string, pw: string): AuthThunk => {
	return async dispatch => {
		await authAPI.Login(id, pw).then((res: any) => {
			if (res) {
				window.localStorage.setItem('tk', res['access_token']);
				window.location.reload();
			} else {
				dispatch(initSnackbar("아이디 혹은 비밀번호가 맞지 않습니다.", "error"));
			}
		});
	};
}

export const Logout = (): AuthThunk => {
	return async dispatch => {
		window.localStorage.removeItem('tk');
		dispatch(deleteUser());
		window.location.reload();
	};
}

export const SignUp = (id: string, pw: string, nickname: string): AuthThunk => {
	return async (dispatch, getState) => {
		const state = getState();
		const sj_id = state.auth.authorization.id;
		const sj_pw = state.auth.authorization.pw;

		await authAPI.SignUp(id, pw, nickname, sj_id, sj_pw).then((res: any) => {
			if (res) {
				window.localStorage.setItem('tk', res['access_token']);
				window.location.reload();
				return Promise.resolve();
			} else {
				dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
				return Promise.reject();
			}
		});
	};
}

export const AuthorizingUser = (id: string, pw: string): AuthThunk => {
	return async dispatch => {
		await authAPI.AuthorizingUser(id, pw).then((res: any) => {
			if (res) {
				dispatch(initSnackbar("인증이 성공하였습니다.", "success"));
				dispatch(setAuthorization({id, pw}));
				return Promise.resolve();
			} else {
				dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
				return Promise.reject();
			}
		});
	};
}

export const SucessionUser = (): AuthThunk => {
	return async dispatch => {
		await authAPI.Sucession().then((res: any) => {
			if (res) {
				window.localStorage.removeItem('tk');
				alert("성공적으로 탈퇴되었습니다.");
				window.location.reload();
			} else {
				dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
				return Promise.reject();
			}
		});
	};
}

/* 액션 */
const SET_USER = 'auth/SET_USER' as const;
const DELETE_USER = 'auth/DELETE_USER' as const;
const SET_AUTHORIZATION = 'auth/SET_AUTHORIZATION' as const;
const DELETE_AUTHORIZATION = 'auth/DELETE_AUTHORIZATION' as const;

export const setUser = (user: any) => ({type: SET_USER, payload: user});
export const deleteUser = () => ({type: DELETE_USER});
export const setAuthorization = (data: any) => ({type: SET_AUTHORIZATION, payload: data});
export const deleteAuthorization = () => ({type: DELETE_AUTHORIZATION});

export type AuthAction =
	| ReturnType<typeof setUser>
	| ReturnType<typeof deleteUser>
	| ReturnType<typeof setAuthorization>
	| ReturnType<typeof deleteAuthorization>


/* 타입 */
type User = {
	id: string,
	nickname: string,
	favList: any[],
	viewList: any[],
	newsfeedList: any[],
	searchList: any[]
};


/* 초기상태 */
type AuthState = {
	login: boolean,
	admin: boolean,
	user: User,
	authorization: any
};
const initialState: AuthState = {
	login: false,
	admin: false,
	user: {
		id: '',
		nickname: '세종인',
		favList: [],
		viewList: [],
		newsfeedList: [],
		searchList: []
	},
	authorization: {}
};


/* 리듀서 */
function auth(state: AuthState = initialState, action: AuthAction): AuthState {
	switch (action.type) {
		case SET_USER:
			/* 사용자 로그인 */
			return produce(state, draft => {
				draft.login = true;
				draft.admin = action.payload['admin'];
				draft.user.id = action.payload['user_id'];
				draft.user.nickname = action.payload['user_nickname'];
				draft.user.favList = action.payload['fav_list'];
				draft.user.viewList = action.payload['view_list'];
				draft.user.newsfeedList = action.payload['newsfeed_list'];
				draft.user.searchList = action.payload['search_list'];
			});

		case DELETE_USER:
			/* 사용자 로그아웃 */
			return produce(state, draft => {
				draft.login = false;
				draft.admin = false;
				draft.user = {
					id: '',
					nickname: '세종인',
					favList: [],
					viewList: [],
					newsfeedList: [],
					searchList: []
				};
			});

		case SET_AUTHORIZATION:
			/* 권한 설정 */
			return produce(state, draft => {
				draft.authorization = action.payload;
			});

		case DELETE_AUTHORIZATION:
			/* 권한 초기화 */
			return produce(state, draft => {
				draft.authorization = {};
			});

		default:
			return state;
	}
}

export default auth;