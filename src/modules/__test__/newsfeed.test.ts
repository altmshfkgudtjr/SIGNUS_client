import reducer, * as actions from 'modules/newsfeed'
// type
import { Post } from 'modules/newsfeed'

describe('newsfeed', () => {
	const initialState = {
		view: "GRID",
		posts: [],
		waitingPosts: []
	};
	let state = reducer(undefined, {});

	beforeEach(() => {         
		let state = reducer(undefined, {});
	});

	it('should create actions', () => {
		const expectedActions = [
			{ type: 'newsfeed/CLEAR_POSTS' },
			{ type: 'newsfeed/INIT_POSTS', payload: {posts: [], waits: []} },
			{ type: 'newsfeed/PUSH_POSTS', payload: [] },
			{ type: 'newsfeed/POP_POSTS' },
			{ type: 'newsfeed/SET_VIEW', payload: '' },
		];
		const newsfeedActions = [
			actions.clearPosts(),
			actions.initPosts({posts: [], waits: []}),
			actions.pushPosts([]),
			actions.popPosts(),
			actions.setView(''),
		];
		expect(newsfeedActions).toEqual(expectedActions);
	});

	describe('reducer', () => {
		it('should return the initialState', () => {
			expect(state).toEqual(initialState);
		});

		it('should init posts', () => {
			const posts: Post[] = [
				MockPost(0)
			];
			const waits: Post[] = [
				MockPost(1),
				MockPost(2)
			];

			state = reducer(state, actions.initPosts({posts, waits}));

			expect(state.posts).toEqual(posts);
			expect(state.waitingPosts).toEqual(waits);
		});

		it('should push posts', () => {
			const posts: Post[] = [
				MockPost(0)
			];
			const waits: Post[] = [];
			const push: Post[] = [
				MockPost(1),
				MockPost(2)
			];
			const result: Post[] = posts.concat(push);

			state = reducer(state, actions.initPosts({posts, waits}));
			state = reducer(state, actions.pushPosts(push));

			expect(state.posts).toEqual(result);
		});

		it('should pop posts', () => {
			const posts: Post[] = [];
			const waits: Post[] = [
				MockPost(1),
				MockPost(2)
			];

			state = reducer(state, actions.initPosts({posts, waits}));
			state = reducer(state, actions.popPosts());

			expect(state.waitingPosts).toEqual([]);
		});

		it('should clear posts', () => {
			const posts: Post[] = [
				MockPost(0)
			];
			const waits: Post[] = [
				MockPost(1),
				MockPost(2)
			];

			state = reducer(state, actions.clearPosts());

			expect(state.posts).toEqual([]);
			expect(state.waitingPosts).toEqual([]);
		});

		it('should set view', () => {
			state = reducer(state, actions.setView('LIST'));

			expect(state.view).toBe('LIST');

			state = reducer(state, actions.setView('GRID'));

			expect(state.view).toBe('GRID');
		});
	});
});

/* Mock Post 생성 함수 */
const MockPost = (index: number) => {
	return {
		_id: {$oid: `${index}`},
		title: `post_${index}`,
		post: `sample data ${index}`,
		img: 0,
		fav_cnt: index*11,
		view: index*11,
		url: 'http://www.test1.com',
		date: {$date: 1603287428879},
		end_date: {$date: 32503680000000}
	}
}