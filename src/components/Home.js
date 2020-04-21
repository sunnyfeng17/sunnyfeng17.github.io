import React from 'react';
import { Layout, Row, Col } from 'antd';

import './Home.css';

import homeImg from '../images/home.jpg';

const { Content } = Layout;

class Home extends React.Component {
  render() {
    return (
      <Content className="pushHome">
        <Row className="verticalCenter" type="flex">
          <Col xs={24} sm={10} className="mobileSpace">
            <img className="homeImg" src={ homeImg } alt="Sunny"/>
          </Col>
          <Col xs={24} sm={14}>
            <h2>Hello World!</h2>
            <h3>My name is Sunny Feng</h3>
            <h4>I'm a Computer Science student who also has a passion for design!</h4>
          </Col>
        </Row>
      </Content> 
    );
  }
}

export default Home;