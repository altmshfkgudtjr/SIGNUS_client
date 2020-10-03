import React from 'react'
import { Switch, Route } from 'react-router-dom'
// Pages
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import RedirectPage from './pages/RedirectPage'

const App = () => {
  const agent = navigator.userAgent.toLowerCase();
  let isRedirect = false;
  if ((navigator.appName === 'Netscape' && agent.indexOf('trident') !== -1) || (agent.indexOf("msie") !== -1)) isRedirect = true;
  else isRedirect = false;

  return (
    <>
      {isRedirect
        ? <Route path="*" component={RedirectPage} />
        : <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="*" component={NotFound} status={404} />
          </Switch>
      }
    </>
  );
}

export default App
