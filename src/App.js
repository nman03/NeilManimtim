import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { NaviBar } from './components/NaviBar';
import { Footer } from './components/Footer';
import Containter from 'react-bootstrap/Container';
import './App.css';


function App() {
	return (
        <Fragment>
            <div className="App">
                <NaviBar />
                <Containter>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/Projects" component={Projects} />
                        </Switch>
                    </Router>
                </Containter>
                <Footer />	
            </div>    
        </Fragment>
	);
}

export default App;
