import React from 'react';
import { Layout } from 'antd';

import './Resume.css';

import ResumeImg from '../images/resumes/sunnyfeng-resume.jpg'

const { Content } = Layout;

class Projects extends React.Component {
    render() {
      return (
        <Content className="pushDown">
          <h1>Resume</h1>
          <p>Have a look at my resume or download it <a href="/resume/sunnyfeng-resume.pdf" download className="resumeDownload">here</a>. I will also be showcasing some of my themed CV's down below later, so check back in a bit if you're interested!</p>
          <img className="resumeImg" alt="Sunny's Resume" src={ ResumeImg } />
        </Content>
      );
    }
}
  
export default Projects;