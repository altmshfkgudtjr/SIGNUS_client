import reducer, * as actions from 'modules/snackbar'

describe('snackbar', () => {
	const initialState = {
		display: false,
		message: '',
		type: 'info'
	};
	let state = reducer(undefined, {});

	beforeEach(() => {
		let state = reducer(undefined, {});
	});

	it('should create actions.', () => {
		const expectedActions = [
			{ type: 'snackbar/APPEND_SNACKBAR', payload: {
				display: true,
				message: '',
				type: ''
			} },
			{ type: 'snackbar/DELETE_SNACKBAR' },
		];
		const snackbarActions = [
			actions.appendSnackbar({
				display: true,
				message: '',
				type: ''
			}),
			actions.deleteSnackbar()
		];
		expect(snackbarActions).toEqual(expectedActions);
	});

	describe('reducer', () => {
		it('should return the initialState.', () => {
			expect(state).toEqual(initialState);
		});

		it('should append snackbar', () => {
			const snackbar = {
				display: true,
				message: 'test snackbar',
				type: 'success'
			}
			state = reducer(state, actions.appendSnackbar(snackbar));

			expect(state).toEqual(snackbar);
		});

		it('should delete snackbar', () => {
			const snackbar = {
				display: true,
				message: 'test snackbar',
				type: 'success'
			}
			state = reducer(state, actions.appendSnackbar(snackbar));
			state = reducer(state, actions.deleteSnackbar());

			expect(state.display).toBe(false);
			expect(state.message).toBe('');
			expect(state.type).toBe('info');
		});
	});
});