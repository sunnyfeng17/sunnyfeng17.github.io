import React from 'react';
import { withRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Routes from './components/Routes';
import 'antd/dist/antd.css';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
 
library.add(fab)

class App extends React.Component {
  render() {
    const { location } = this.props
    return (
        <main className="App">
          { location.pathname !== "/" && location.pathname !== '/project/personal-website' && location.pathname !== '/project/tetris' && location.pathname !== '/project/learnfromakiwi' && location.pathname !== '/project/money-busters' && location.pathname !== '/project/scammr' && location.pathname !== '/project/task-manager' && location.pathname !== '/project/eventigate' && location.pathname !== '/project/moving-shapes'
          ? <NavigationBar />
          : null
          }
          <Routes />
        </main>
    );
  }
}

export default withRouter(App);