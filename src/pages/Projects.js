import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import '../css/Projects.scss';

import ProjectData from './ProjectData';

const { Content } = Layout;

class Projects extends React.Component {
  render() {
    return (
      <Content className="projects-container">
        <h1>Projects</h1>
        <Row className="project-grid">
          { 
            ProjectData.map((object, i) => {
              return (
                <Link key={i} to={{ pathname: "/project/" + object.url }} onClick={localStorage.setItem(object.url, JSON.stringify(object))}>
                  <Col xs={24} sm={24} md={6} className="project-card" id={object.projectId} />
                </Link>
            )
            })
          }
        </Row>      
      </Content>
    );
  }
}

export default Projects;