import React from 'react';
import { Layout, Row, Col } from 'antd';

import './Home.scss';

import homeImg from '../images/home.jpg';

const { Content } = Layout;

class Home extends React.Component {
  render() {
    return (
      <Content className="home-container">
        <Row className="vertical-center">
          <Col xs={24} sm={10}>
            <img src={ homeImg } alt="Sunny"/>
          </Col>
          <Col xs={24} sm={14}>
            <h2>Hello World!</h2>
            <h3>My name is Sunny Feng</h3>
            <p>I’m an iOS engineer with a Computer Science degree from the University of Auckland. I’m passionate about finding creative solutions and blending them with beautiful, intuitive, and user-friendly experiences.</p>
            <p>Outside of work, you’ll find me spending time with friends, snowboarding, bouldering, or enjoying a game of badminton.</p>
            <p>I’m always on the lookout for new opportunities to apply my passion for product, design, frontend development, and to continue learning!</p>
          </Col>
        </Row>
      </Content> 
    );
  }
}

export default Home;