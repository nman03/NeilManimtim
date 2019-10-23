import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Projects } from './components/Projects';

function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/Projects" component={Projects} />
      </Router>
    </Fragment>
  );
}

export default App;
