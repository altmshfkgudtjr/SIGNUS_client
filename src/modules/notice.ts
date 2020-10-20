import produce from 'immer';
import * as noticeAPI from 'controllers/notice'
import { initSnackbar } from 'modules/snackbar'
// types
import { NoticeThunk } from 'modules/types'
// lib
import { dateFormatter } from 'lib/utils/postUtils'

/* Thunk 함수 */
export const GetNotice = (noticeId: string): NoticeThunk => {
	return async dispatch => {
		await noticeAPI.GetNotice(noticeId).then((res: any) => {
			if (res) {
				dispatch(addNotice(res));
				dispatch(Validation());
				return Promise.resolve();
			} else {
				dispatch(initSnackbar("존재하지 않는 공지사항입니다.", "error"));
				return Promise.reject();
			}
		});
	}
}

export const GetNoticeList = (): NoticeThunk => {
	return async dispatch => {
		await noticeAPI.GetNotice(null).then((res: any) => {
			if (res) {
				dispatch(addNoticeList(res));
			} else {
				dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
			}
		});
	}
}

export const UpdateNotice = (title: string, post: string, noticeId: string): NoticeThunk => {
	return async dispatch => {
		await noticeAPI.UpdateNotice(title, post, noticeId).then((res: any) => {
			if (res) {
				dispatch(updateNotice(
					{
						id: noticeId,
						title: title,
						author: '',
						post: post,
						date: '',
						valid: false
					}
				));
				dispatch(Validation());
				return Promise.resolve();
			} else {
				dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
				return Promise.reject();
			}
		});
	}
}

export const DeleteNotice = (noticeId: string): NoticeThunk => {
	return async dispatch => {
		await noticeAPI.DeleteNotice(noticeId).then((res: any) => {
			if (res) {
				dispatch(deleteNotice(noticeId));
				return Promise.resolve();
			} else {
				dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
				return Promise.reject();
			}
		});
	}
}

export const Validation = (): NoticeThunk => {
	return async (dispatch, getState) => {
		const state = getState();
		const isAdmin = state.auth.admin;
		const userId = state.auth.user.id;
	
		if (isAdmin && !!userId && userId === state.notice.notice.author) {
			dispatch(validationNotice(true));
		} else {
			dispatch(validationNotice(false));
		}
		return Promise.resolve();
	}
}

export const SendNotice = (noticeId: (string | null), title: string, post: string): NoticeThunk => {
	return async dispatch => {
		if (!noticeId) {
			await noticeAPI.AddNotice(title, post).then((res: any) => {
				if (res) {
					return Promise.resolve();
				} else {
					dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
					return Promise.reject();
				}
			});
		} else {
			await noticeAPI.UpdateNotice(title, post, noticeId).then((res: any) => {
				if (res) {
					return Promise.resolve();
				} else {
					dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
					return Promise.reject();
				}
			});
		}
	}
}


/* 액션 */
const ADD_NOTICE = 'notice/ADD_NOTICE' as const;
const ADD_NOTICELIST = 'notice/ADD_NOTICELIST' as const;
const UPDATE_NOTICE = 'notice/UPDATE_NOTICE' as const;
const DELETE_NOTICE = 'notice/DELETE_NOTICE' as const;
const VALIDATION_NOTICE = 'notice/VALIDATION_NOTICE' as const;

export const addNotice = (notice: any) => ({type: ADD_NOTICE, payload: notice});
export const addNoticeList = (noticeList: any[]) => ({type: ADD_NOTICELIST, payload: noticeList});
export const updateNotice = (notice: Notice) => ({type: UPDATE_NOTICE, payload: notice});
export const deleteNotice = (noticeId: string) => ({type: DELETE_NOTICE, payload: noticeId});
export const validationNotice = (valid: boolean) => ({type: VALIDATION_NOTICE, payload: valid});

export type NoticeAction =
	| ReturnType<typeof addNotice>
	| ReturnType<typeof addNoticeList>
	| ReturnType<typeof updateNotice>
	| ReturnType<typeof deleteNotice>
	| ReturnType<typeof validationNotice>


/* 타입 */
export type Notice = {
	id: string,
	title: string,
	author: string,
	post: string,
	date: string,
	valid: boolean
};


/* 초기상태 */
type NoticeState = {
	noticeList: Notice[],
	notice: Notice
};
const initialState: NoticeState = {
	noticeList: [],
	notice: {
		id: '',
		title: '',
		author: '',
		post: '',
		date: '',
		valid: false
	}
};


/* 리듀서 */
function notice(state: NoticeState = initialState, action:  NoticeAction): NoticeState {
	switch (action.type) {
		case ADD_NOTICE:
			/* 단일 공지사항 설정 */
			return produce(state, draft => {
				draft.notice.id = action.payload['_id']['$oid'];
				draft.notice.title = action.payload['title'];
				draft.notice.author = action.payload['author'];
				draft.notice.post = action.payload['post'];
				draft.notice.date = dateFormatter(action.payload['date']['$date']);
			});

		case ADD_NOTICELIST:
			/* 공지사항 전체 추가 */
			return produce(state, draft => {
				draft.noticeList = action.payload.map(notice => ({
					id: notice['_id']['$oid'],
					title: notice['title'],
					author: notice['author'],
					post: notice['post'],
					date: dateFormatter(notice['date']['$date']),
					valid: false
				}));
			});

		case UPDATE_NOTICE:
			/* 공지사항 수정 */
			return produce(state, draft => {
				draft.notice.title = action.payload['title'];
				draft.notice.post = action.payload['post'];

				const filled = draft.noticeList.filter(node => node.id === action.payload['id'])[0];

				filled.title = action.payload['title'];
				filled.post = action.payload['post'];
			});

		case DELETE_NOTICE:
			/* 공지사항 삭제 */
			return produce(state, draft => {
				draft.noticeList.filter(node => node.id !== action.payload);
				if (draft.notice.id === action.payload) {
					draft.notice.id = '';
					draft.notice.title = '';
					draft.notice.author = '';
					draft.notice.post = '';
					draft.notice.date = '';
					draft.notice.valid = false;
				}
			});

		case VALIDATION_NOTICE:
			/* 공지사항 권한 변경 */
			return produce(state, draft => {
				draft.notice.valid = action.payload;
			});

		default:
			return state;
	}
}

export default notice;