import React from 'react';
import { withRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Routes from './components/Routes';
import 'antd/dist/antd.css';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import sun from './images/themes/sun.svg';
import moon from './images/themes/moon.svg';
 
library.add(fab)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        dark: true
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
      this.setState({ light: !this.state.light });
  }

  render() {
    const { location } = this.props
    return (
      <>
        <main className={"theme " + (this.state.light ? "theme--light" : "theme--dark")}>
          <div className="App">
            { location.pathname !== "/" && location.pathname !== '/project/personal-website' && location.pathname !== '/project/timeline' && location.pathname !== '/project/kafe-krayon' && location.pathname !== '/project/upskill' && location.pathname !== '/project/tetris' && location.pathname !== '/project/learnfromakiwi' && location.pathname !== '/project/money-busters' && location.pathname !== '/project/scammr' && location.pathname !== '/project/task-manager' && location.pathname !== '/project/eventigate' && location.pathname !== '/project/moving-shapes'
            ? <div>
                <NavigationBar mode={this.state.light ? 'light' : 'dark'}/>
                <img src={this.state.light ? moon : sun} className="theme-toggle" alt="theme-toggle" onClick={this.changeTheme}></img>
              </div>
            : null
            }
            <Routes />
          </div>
        </main>
      </>
    );
  }
}

export default withRouter(App);