import React from 'react';
import { Layout } from 'antd';
import '../css/main.scss';

import ResumeImg from '../images/resumes/resume.jpg'

const { Content } = Layout;

class Projects extends React.Component {
    render() {
      return (
        <Content className="resume-container">
          <h1>Resume</h1>
          <p>Have a look at my resume or download it <a href="/resume/Sunny Feng - Resume.pdf" download>here</a>!</p>
          <img alt="Sunny's Resume" src={ ResumeImg } />
        </Content>
      );
    }
}
  
export default Projects;