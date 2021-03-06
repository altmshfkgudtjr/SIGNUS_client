import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
// Reducers
import newsfeed from 'modules/newsfeed'
import auth from 'modules/auth'
import notice from 'modules/notice'
import snackbar from 'modules/snackbar'
import search from 'modules/search'

/* 
	Combine Reducers
*/
const reducers = combineReducers({
	newsfeed,
	auth,
	notice,
	snackbar,
	search
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