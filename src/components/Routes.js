
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from "./LandingPage";
import Home from './Home';
import Projects from './Projects';
import Photography from './Photography';
import Playground from './Playground';
import Contact from './Contact';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={ LandingPage } exact/>
                <Route path="/home" component={ Home } />
                <Route path="/projects" component={ Projects } />
                <Route path="/photography" component={ Photography } />
                <Route path="/playground" component={ Playground } />
                <Route path="/contact" component={ Contact } />
            </Switch>
        );
    }
}

export default Routes;