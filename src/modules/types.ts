import { ThunkAction } from 'redux-thunk'
import { RootState } from 'store/index'
// types
import { NewsfeedAction } from './newsfeed'
import { SearchAction } from './search'
import { NoticeAction } from './notice'
import { AuthAction } from './auth'
import { SnackbarAction } from './snackbar'

export type NewsfeedThunk = ThunkAction<void, RootState, null, NewsfeedAction>;
export type SearchThunk = ThunkAction<void, RootState, null, SearchAction>;
export type NoticeThunk = ThunkAction<void, RootState, null, NoticeAction>;
export type AuthThunk = ThunkAction<void, RootState, null, AuthAction>;
export type SnackbarThunk = ThunkAction<void, RootState, null, SnackbarAction>;