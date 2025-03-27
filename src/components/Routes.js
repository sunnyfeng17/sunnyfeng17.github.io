
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from "../pages/LandingPage";
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Project from '../pages/Project';
import Photography from '../pages/Photography';
import Playground from '../pages/Playground';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import StartEasterEgg from './EasterEgg/StartEasterEgg';
import SpaceTravel from './EasterEgg/SpaceTravel';
import PageNotFound from '../pages/PageNotFound';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={ LandingPage } exact/>
                <Route path="/home" component={ Home } />
                <Route path="/projects" component={ Projects } />  
                <Route path='/project/:id' component={ Project } />
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