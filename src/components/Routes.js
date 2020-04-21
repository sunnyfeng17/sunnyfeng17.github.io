
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from "./LandingPage";
import Home from './Home';
import Projects from './Projects';
import Photography from './Photography';
import Playground from './Playground';
import Resume from './Resume';
import Contact from './Contact';
import StartEasterEgg from './StartEasterEgg';
import SpaceTravel from './SpaceTravel';
import PageNotFound from './PageNotFound';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={ LandingPage } exact/>
                <Route path="/home" component={ Home } />
                <Route path="/projects" component={ Projects } />
                <Route path="/photography" component={ Photography } />
                <Route path="/playground" component={ Playground } />
                <Route path="/resume" component={ Resume } />
                <Route path="/contact" component={ Contact } />
                <Route path="/tardis" component={ StartEasterEgg } />
                <Route path="/spacetravel" component={ SpaceTravel } />
                <Route path="*" component={ PageNotFound } />
            </Switch>
        );
    }
}

export default Routes;