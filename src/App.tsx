import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
// Pages
import NewsfeedPage from './pages/NewsfeedPage'
import NotFound from './pages/NotFound'
import RedirectPage from './pages/RedirectPage'
// modules
import { GetUser } from './modules/auth'


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
			{isRedirect
				? <Route path="*" component={RedirectPage} />
				: <Switch>
						<Route path="/" component={NewsfeedPage} exact />
						<Route path="/best" component={NewsfeedPage} exact />
						<Route path="/newsfeed/:mode(university|award|group|job)" component={NewsfeedPage} exact />
						<Route path="*" component={NotFound} status={404} />
					</Switch>
			}
		</>
	);
}

export default App
