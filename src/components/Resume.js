import React from 'react';
import { Layout } from 'antd';

import './Resume.scss';

import ResumeImg from '../images/resumes/sunnyfeng-cv.jpg'

const { Content } = Layout;

class Projects extends React.Component {
    render() {
      return (
        <Content className="resume-container">
          <h1>Resume</h1>
          <p>Have a look at my resume or download it <a href="/resume/sunnyfeng-cv.pdf" download>here!</a></p>
          <img alt="Sunny's Resume" src={ ResumeImg } />
        </Content>
      );
    }
}
  
export default Projects;