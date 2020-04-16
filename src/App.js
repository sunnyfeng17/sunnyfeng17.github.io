import React from 'react';
import { withRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Routes from './components/Routes';
import 'antd/dist/antd.css';
import './App.css';

class App extends React.Component {
  render() {
    const { location } = this.props
    return (
        <main className="App">
          {
            location.pathname !== "/" && <NavigationBar />
          }
          <Routes />
        </main>
    );
  }
}

export default withRouter(App);