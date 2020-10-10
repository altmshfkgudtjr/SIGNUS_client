import produce from 'immer';
import * as noticeAPI from '../controllers/notice'

/* Thunk 함수 */
export const GetNotice = (postId: string) => (dispatch: any) => {
	noticeAPI.GetNotice(postId).then((res: any) => {
		if (res) {
			dispatch(addNotice(res));
		} else {
			console.log("\n%c[Error]", 'color: #dc3545', "Get a notice failed.\n\n");
		}
	});
}

export const GetNoticeList = () => (dispatch: any) => {
	noticeAPI.GetNotice(undefined).then((res: any) => {
		if (res) {
			dispatch(addNoticeList(res));
		} else {
			console.log("\n%c[Error]", 'color: #dc3545', "Get notices failed.\n\n");
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
					post: post,
					date: ''
				}
			));
		} else {
			console.log("\n%c[Error]", 'color: #dc3545', "Update notice failed.\n\n");
		}
	});
}

export const DeleteNotice = (noticeId: string) => (dispatch: any) => {
	noticeAPI.DeleteNotice(noticeId).then((res: any) => {
		if (res) {
			dispatch(deleteNotice(noticeId));
		} else {
			console.log("\n%c[Error]", 'color: #dc3545', "Delete notice failed.\n\n");
		}
	});
}


/* 액션 */
const ADD_NOTICE = 'notice/ADD_NOTICE' as const;
const ADD_NOTICELIST = 'notice/ADD_NOTICELIST' as const;
const UPDATE_NOTICE = 'notice/UPDATE_NOTICE' as const;
const DELETE_NOTICE = 'notice/DELETE_NOTICE' as const;

export const addNotice = (notice: Notice) => ({type: ADD_NOTICE, payload: notice});
export const addNoticeList = (noticeList: Notice[]) => ({type: ADD_NOTICELIST, payload: noticeList});
export const updateNotice = (notice: Notice) => ({type: UPDATE_NOTICE, payload: notice});
export const deleteNotice = (noticeId: string) => ({type: DELETE_NOTICE, payload: noticeId});

type AuthAction =
	| ReturnType<typeof addNotice>
	| ReturnType<typeof addNoticeList>
	| ReturnType<typeof updateNotice>
	| ReturnType<typeof deleteNotice>


/* 타입 */
type Notice = {
	id: string,
	title: string,
	post: string,
	date: string
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
		post: '',
		date: ''
	}
};


/* 리듀서 */
function newsfeed(state: NoticeState = initialState, action: AuthAction): NoticeState {
	switch (action.type) {
		case ADD_NOTICE:
			/* 단일 공지사항 설정 */
			return produce(state, draft => {
				draft.notice = action.payload;
			});

		case ADD_NOTICELIST:
			/* 공지사항 전체 추가 */
			return produce(state, draft => {
				draft.noticeList = action.payload;
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
					draft.notice.post = '';
					draft.notice.date = '';
				}
			});

		default:
			return state;
	}
}

export default newsfeed;