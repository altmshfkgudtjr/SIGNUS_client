import reducer, * as actions from 'modules/notice'
// type
import { Notice } from 'modules/notice'
// lib
import { dateFormatter } from 'lib/utils/postUtils'

describe('notice', () => {
	const initialState = {
		noticeList: [],
		notice: {
			id: '',
			title: '',
			author: '',
			post: '',
			date: '',
			valid: false
		}
	}
	let state = reducer(undefined, {});

	beforeEach(() => {         
		let state = reducer(undefined, {});
	});

	it('should create actions.', () => {
		const data = MockNoticeData(0);

		const expectedActions = [
			{ type: 'notice/ADD_NOTICE', payload: {} },
			{ type: 'notice/ADD_NOTICELIST', payload: [] },
			{ type: 'notice/UPDATE_NOTICE', payload: data },
			{ type: 'notice/DELETE_NOTICE', payload: '' },
			{ type: 'notice/VALIDATION_NOTICE', payload: true },
		];
		const newsfeedActions = [
			actions.addNotice({}),
			actions.addNoticeList([]),
			actions.updateNotice(data),
			actions.deleteNotice(''),
			actions.validationNotice(true),
		];
		expect(newsfeedActions).toEqual(expectedActions);
	});

	describe('reducer', () => {
		it('should return the initialState.', () => {
			expect(state).toEqual(initialState);
		});

		it('should add notice.', () => {
			state = reducer(state, actions.addNotice(MockNotice(0)));

			expect(state.notice).toEqual(MockNoticeData(0));
		});

		it('should add notice list.', () => {
			state = reducer(state, actions.addNoticeList([
				MockNotice(0),
				MockNotice(1)
			]));

			expect(state.noticeList).toEqual([
				MockNoticeData(0),
				MockNoticeData(1)
			])
		});

		it('should update notice.', () => {
			const updatedNotice = {
				id: '2',
				title: 'notice_2 updated',
				author: 'SIGNUS',
				post: 'sample data 2 updated',
				date: dateFormatter(1603287428879),
				valid: false
			}

			state = reducer(state, actions.addNoticeList([
				MockNotice(0),
				MockNotice(1),
				MockNotice(2),
			]));

			state = reducer(state, actions.updateNotice(updatedNotice));

			expect(state.noticeList[2]).toEqual(updatedNotice);
		});

		it('should delete notice.', () => {
			state = reducer(state, actions.addNotice(MockNotice(0)));
			state = reducer(state, actions.addNoticeList([
				MockNotice(0),
				MockNotice(1),
				MockNotice(2),
			]));

			state = reducer(state, actions.deleteNotice('0'));

			expect(state.notice).toEqual({
				id: '',
				title: '',
				author: '',
				post: '',
				date: '',
				valid: false
			});
			expect(state.noticeList).toEqual([
				MockNoticeData(1),
				MockNoticeData(2)
			]);
		});

		it('should set validation of notice.', () => {
			state = reducer(state, actions.addNotice(MockNotice(0)));
			state = reducer(state, actions.validationNotice(true));

			expect(state.notice.valid).toBe(true);
		});
	});
});

/* Mock Notice 생성 함수 */
const MockNotice = (index: number) => {
	return {
		_id: {$oid: `${index}`},
		title: `notice_${index}`,
		author: `SIGNUS`,
		post: `sample data ${index}`,
		date: {$date: 1603287428879},
		valid: false
	}
}

const MockNoticeData = (index: number): Notice => {
	return {
		id: `${index}`,
		title: `notice_${index}`,
		author: `SIGNUS`,
		post: `sample data ${index}`,
		date: dateFormatter(1603287428879),
		valid: false
	}
}