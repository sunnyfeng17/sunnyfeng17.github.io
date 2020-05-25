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
            <Col span={6} className="project-card" style={{backgroundColor: "blue"}}>
            </Col>
            <Col span={6} clas     Name="project-card" style={{backgroundColor: "pink"}}>
            </Col>
            <Col span={6} className="project-card" style={{backgroundColor: "green"}}>
            </Col>
            <Col span={6} className="project-card" style={{backgroundColor: "yellow"}}>
            </Col>
            <Col span={6} className="project-card" style={{backgroundColor: "orange"}}>
            </Col>
            <Col span={6} className="project-card" style={{backgroundColor: "purple"}}>
            </Col>
            <Col span={6} className="project-card" style={{backgroundColor: "white"}}>
            </Col>
          </Row>     
        </div>  
      </Content>
    );
  }
}



export default Projects;