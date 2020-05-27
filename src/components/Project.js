import React from 'react';
import { Layout } from 'antd';
import {Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import { GithubFilled } from '@ant-design/icons';
import './Project.css';

import video from '../images/project-videos/personal-website.mp4'

const { Content } = Layout;

class Project extends React.Component {
  render() {
    const data = this.props.location.state.object;
    const video = '../images/project-videos/personal-website.mp4';
    return (
      <Content className="project-container">
        <Jumbotron fluid className="project-jumbotron">
          <video src={ data.video } autoPlay loop muted/>
          <div className="container">
            <h1>{ data.title }</h1>
            <p> { data.desc }</p>
            { data.github
            ? <a href="/"><GithubFilled /></a>
            : null
            }
          </div>
        </Jumbotron>
        <Link to={{ pathname: "/projects" }}>
            Return to Projects
        </Link>   
      </Content>
    );
  }
}

export default Project;