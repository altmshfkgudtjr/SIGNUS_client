import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
// Reducers
import newsfeed from '../modules/newsfeed'

/* 
	Combine Reducers
*/
const reducers = combineReducers({
	newsfeed
});

export type RootState = ReturnType<typeof reducers>;

/* 
	Create Store
*/
const store = createStore(
	reducers,
	applyMiddleware(ReduxThunk)
);

export default store