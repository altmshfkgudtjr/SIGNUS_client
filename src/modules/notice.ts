import produce from 'immer';
import * as noticeAPI from '../controllers/notice'
import { initSnackbar } from './snackbar'

/* Thunk 함수 */
export const GetNotice = (noticeId: string) => (dispatch: any) => {
	noticeAPI.GetNotice(noticeId).then((res: any) => {
		if (res) {
			dispatch(addNotice(res));
			dispatch(Validation());
		} else {
			dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
		}
	});
}

export const GetNoticeList = () => (dispatch: any) => {
	noticeAPI.GetNotice(null).then((res: any) => {
		if (res) {
			dispatch(addNoticeList(res));
		} else {
			dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
		}
	});
}

export const UpdateNotice = (title: string, post: string, noticeId: string) => (dispatch: any) => {
	noticeAPI.UpdateNotice(title, post, noticeId).then((res: any) => {
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
		} else {
			dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
		}
	});
}

export const DeleteNotice = (noticeId: string) => (dispatch: any) => {
	noticeAPI.DeleteNotice(noticeId).then((res: any) => {
		if (res) {
			dispatch(deleteNotice(noticeId));
		} else {
			dispatch(initSnackbar("서버와의 연결이 원활하지 않습니다.", "error"));
		}
	});
}

export const Validation = () => (dispatch: any, getState: Function) => {
	const state = getState();
	const isAdmin = state.auth.admin;
	const userId = state.auth.user.id;

	if (isAdmin && !!userId && userId === state.notice.notice.author) {
		dispatch(validationNotice(true));
	} else {
		dispatch(validationNotice(false));
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

type AuthAction =
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
function notice(state: NoticeState = initialState, action: AuthAction): NoticeState {
	switch (action.type) {
		case ADD_NOTICE:
			/* 단일 공지사항 설정 */
			return produce(state, draft => {
				draft.notice.id = action.payload['_id'];
				draft.notice.title = action.payload['title'];
				draft.notice.author = action.payload['author'];
				draft.notice.post = action.payload['post'];
				draft.notice.date = action.payload['date'];
			});

		case ADD_NOTICELIST:
			/* 공지사항 전체 추가 */
			return produce(state, draft => {
				draft.noticeList = action.payload.map(notice => ({
					id: notice['_id'],
					title: notice['title'],
					author: notice['author'],
					post: notice['post'],
					date: notice['date'],
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