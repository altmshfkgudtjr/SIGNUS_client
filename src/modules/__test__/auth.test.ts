import reducer, * as actions from 'modules/auth'

describe('auth', () => {
	const initialState = {
		login: false,
		admin: false,
		user: {
			id: '',
			favList: [],
			viewList: [],
			newsfeedList: [],
			searchList: []
		},
		authorization: {}
	};
	let state = reducer(undefined, {});

	beforeEach(() => {
		let state = reducer(undefined, {});
	});

	it('should create actions.', () => {
		const expectedActions = [
			{ type: 'auth/SET_USER', payload: {} },
			{ type: 'auth/DELETE_USER' },
			{ type: 'auth/SET_AUTHORIZATION', payload: {} },
			{ type: 'auth/DELETE_AUTHORIZATION' },
		];
		const newsfeedActions = [
			actions.setUser({}),
			actions.deleteUser(),
			actions.setAuthorization({}),
			actions.deleteAuthorization()
		];
		expect(newsfeedActions).toEqual(expectedActions);
	});

	describe('reducer', () => {
		it('should return the initialState.', () => {
			expect(state).toEqual(initialState);
		});

		it('should set user.', () => {
			state = reducer(state, actions.setUser({
				admin: true,
				user_id: 'SIGNUS',
				fav_list: [],
				view_list: [],
				newsfeed_list: [],
				search_list: []
			}));

			expect(state.login).toBe(true);
			expect(state.admin).toBe(true);
			expect(state.user.id).toBe('SIGNUS');
		});
		
		it('should delete user.', () => {
			state = reducer(state, actions.setUser({
				admin: true,
				user_id: 'SIGNUS',
				fav_list: [],
				view_list: [],
				newsfeed_list: [],
				search_list: []
			}));

			state = reducer(state, actions.deleteUser());

			expect(state.login).toBe(false);
			expect(state.admin).toBe(false);
			expect(state.user.id).toBe('');
		});

		it('should set authorization.', () => {
			const data = {
				id: '12345678',
				pw: ''
			};

			state = reducer(state, actions.setAuthorization(data));

			expect(state.authorization).toEqual(data);
		});

		it('should delete authorization.', () => {
			state = reducer(state, actions.deleteAuthorization());

			expect(state.authorization).toEqual({});
		});
	});
});