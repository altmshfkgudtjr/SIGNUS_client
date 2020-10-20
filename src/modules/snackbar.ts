import produce from 'immer';
// types
import { SnackbarThunk } from 'modules/types'

// setTimeout 참조 넣어두는 리스트
const RefEvent: ReturnType<typeof setTimeout>[] = [];

/* Thunk 함수 */
export const initSnackbar = (message: string, type: string): SnackbarThunk => {
	return async dispatch => {
		if(RefEvent.length !== 0) {
			const event = RefEvent.shift();
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
			const event = setTimeout(function() {
				dispatch(deleteSnackbar());
			}, 4000);
			RefEvent.push(event);
		}, 50);

		return Promise.resolve();
	}
}


/* 액션 */
const APPEND_SNACKBAR = 'snackbar/APPEND_SNACKBAR' as const;
const DELETE_SNACKBAR = 'snackbar/DELETE_SNACKBAR' as const;

export const appendSnackbar = (data: Snackbar) => ({type: APPEND_SNACKBAR, payload: data});
export const deleteSnackbar = () => ({type: DELETE_SNACKBAR});

export type SnackbarAction =
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