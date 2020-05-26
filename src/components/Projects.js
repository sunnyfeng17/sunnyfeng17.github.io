import React from 'react';
import { Layout, Row, Col } from 'antd';

import "./Projects.css";

const { Content } = Layout;

class Projects extends React.Component {
  render() {
    return (
      <Content className="pushDown">
        <div>
          <h1>Projects</h1>
          <Row className="project-grid">
            <Col xs={24} sm={24} md={6}  className="project-card" id="personal-website-card" />
            <Col xs={24} sm={24} md={6}  className="project-card" id="tetris-card" />
            <Col xs={24} sm={24} md={6} className="project-card" id="learnfromakiwi-card" />
            <Col xs={24} sm={24} md={6} className="project-card" id="money-busters-card" />
            <Col xs={24} sm={24} md={6} className="project-card" id="scammr-card" />
            <Col xs={24} sm={24} md={6} className="project-card" id="task-manager-card" />
            <Col xs={24} sm={24} md={6} className="project-card" id="eventigate-card" />
            <Col xs={24} sm={24} md={6} className="project-card" id="moving-shape-card" />
          </Row>     
        </div>  
      </Content>
    );
  }
}



export default Projects;