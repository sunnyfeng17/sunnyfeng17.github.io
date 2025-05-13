import React from 'react';
import Layout from 'antd/lib/layout'; 
import '../css/main.scss';

import ExperienceList from '../components/ExperienceList';

const { Content } = Layout;

const Experience = () => {
  return (
    <Content className="resume-container">
      <h1>Experience</h1>
      <p>
        Have a look at my experience or download {' '}
        <a href="/resume/Sunny Feng - Resume.pdf" download>
          my resume here!
        </a>
      </p>

      <ExperienceList/>
    </Content>
  );
};

export default Experience;