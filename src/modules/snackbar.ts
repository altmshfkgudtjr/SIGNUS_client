import produce from 'immer';

// setTimeout 참조 넣어두는 리스트
const RefEvent: ReturnType<typeof setTimeout>[] = [];

/* Thunk 함수 */
export const initSnackbar = (message: string, type: string) => async (dispatch: any) => {
	if(RefEvent.length !== 0) {
		let event = RefEvent.shift();
		clearTimeout(event);
	}
	dispatch(deleteSnackbar());
	await setTimeout(function() {
		dispatch(appendSnackbar(
			{
				display: true,
				message: message, 
				type: type
			}
		));
		let event = setTimeout(function() {
			dispatch(deleteSnackbar());
		}, 4000);
		RefEvent.push(event);
	}, 50)
}


/* 액션 */
const APPEND_SNACKBAR = 'auth/APPEND_SNACKBAR' as const;
const DELETE_SNACKBAR = 'auth/DELETE_SNACKBAR' as const;

export const appendSnackbar = (data: Snackbar) => ({type: APPEND_SNACKBAR, payload: data});
export const deleteSnackbar = () => ({type: DELETE_SNACKBAR});

type SnackbarAction =
	| ReturnType<typeof appendSnackbar>
	| ReturnType<typeof deleteSnackbar>


/* 타입 */
type Snackbar = {
	display: boolean;
	message: string;
	type: string;
};


/* 초기상태 */
const initialState: Snackbar = {
	display: false,
	message: '',
	type: 'info'
};


/* 리듀서 */
function snackbar(state: Snackbar = initialState, action: SnackbarAction): Snackbar {
	switch (action.type) {
		case APPEND_SNACKBAR:
			/* 스낵바 설정 */
			return produce(state, draft => {
				draft.display = true;
				draft.message = action.payload['message'];
				draft.type = action.payload['type'];
			});

		case DELETE_SNACKBAR:
			/* 스낵바 제거 */
			return produce(state, draft => {
				draft.display = false;
				draft.message = '';
				draft.type = 'info';
			});

		default:
			return state;
	}
}

export default snackbar