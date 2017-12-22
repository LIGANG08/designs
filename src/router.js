import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
// import BasicLayout from './layouts/BasicLayout';
import Music from './layouts/Music';
import list from './Music/list';
import musicians from './Music/musicians';
import download from './Music/download';
// import one from './Music/one';
// import two from './Music/two';
// import three from './Music/three';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={IndexPage} /> */}
        {/* <Route path="/" component={BasicLayout} /> */}
        <Route path="/" exact component={Music} />
        <Route path="/list" component={list} />
        <Route path="/musicians" component={musicians} />
        <Route path="/download" component={download} />
        {/* <Route path="/one" component={one} /> */}
        {/* <Route path="/two" component={two} /> */}
        {/* <Route path="/three" component={three} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
