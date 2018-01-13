import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
// import BasicLayout from './layouts/BasicLayout';
import Music from './layouts/Music';
import list from './routes/list';
import musicians from './routes/musicians';
import download from './routes/download';
import onClick from './routes/onClick';
import test from './routes/test';
// import one from './Music/one';
// import two from './Music/two';
// import three from './Music/three';s

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Music} />
        <Route path="/list" component={list} />
        <Route path="/musicians" component={musicians} />
        <Route path="/download" component={download} />
        <Route path="/onClick" component={onClick} />
        <Route path="/test" component={test} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
