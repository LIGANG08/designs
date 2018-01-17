import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Music from './layouts/Music';
import list from './routes/list';
import musicians from './routes/musicians';
import download from './routes/download';
import onClick from './routes/onClick';
import test from './routes/test';
import audio from './routes/audio';
// import one from './routes/one';
// import three from './routes/three';

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
        <Route path="/audio" component={audio} />
        {/* <Route path="/one" component={three} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
