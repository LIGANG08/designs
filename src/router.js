import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
// import BasicLayout from './layouts/BasicLayout';
import Music from './layouts/Music';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={IndexPage} /> */}
        {/* <Route path="/" component={BasicLayout} /> */}
        <Route path="/" component={Music} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
