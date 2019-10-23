import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { NaviBar } from './components/NaviBar';

function App() {
  return (
    <Fragment>
      <NaviBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Projects" component={Projects} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
