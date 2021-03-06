import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
// Pages
import NewsfeedPage from 'pages/NewsfeedPage'
import SearchPage from 'pages/SearchPage'
import NoticePage from 'pages/NoticePage'
import NoticeListPage from 'pages/NoticeListPage'
import NoticeWritePage from 'pages/NoticeWritePage'
import NotFound from 'pages/NotFound'
import ServerError from 'pages/ServerError'
import RedirectPage from 'pages/RedirectPage'
// containers
import Snackbar from 'containers/commons/Snackbar'
// components
// import NoticeBar from 'components/commons/NoticeBar'
// modules
import { GetUser } from 'modules/auth'


const App = () => {
	const agent = navigator.userAgent.toLowerCase();
	let isRedirect = false;
	if ((navigator.appName === 'Netscape' && agent.indexOf('trident') !== -1) || (agent.indexOf("msie") !== -1)) isRedirect = true;
	else isRedirect = false;

	const dispatch = useDispatch();

	/* 자동 로그인 */
	useEffect(() => {
		if (window.localStorage.getItem('tk')) {
			dispatch(GetUser());
		}
	}, [dispatch]);

	return (
		<>
			{/*<NoticeBar />*/}
			{isRedirect
				? <Route path="*" component={RedirectPage} />
				: <Switch>
						<Route path="/" component={NewsfeedPage} exact />
						<Route path="/best" component={NewsfeedPage} exact />
						<Route path="/newsfeed/:board(university|award|group|job)" component={NewsfeedPage} exact />
						<Route path="/search" component={SearchPage} exact />
						<Route path="/notice" component={NoticeListPage} exact />
						<Route path="/notice/write" component={NoticeWritePage} exact />
						<Route path="/notice/:noticeId" component={NoticePage} exact />
						<Route path="*" component={NotFound} status={404} />
						<Route path="*" component={ServerError} status={500} />
					</Switch>
			}
			<Snackbar />
		</>
	);
}

export default App
