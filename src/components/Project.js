import React from 'react';
import { Layout, Row, Col } from 'antd';
import {Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import { GithubFilled, ArrowLeftOutlined, GlobalOutlined } from '@ant-design/icons';
import './Project.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const { Content } = Layout;

class Project extends React.Component {
  render() {
    const data = this.props.location.state.object;
    return (
      <Content className="project-container">
        <Jumbotron fluid className="project-jumbotron">
          <video src={ data.video } autoPlay loop muted/>
          <div className="banner">
            <h1>{ data.title }</h1>
            <p> { data.sub }</p>
            { data.website
              ? <a href={ data.websiteLink }><GlobalOutlined /></a>
              : null
            }
            { data.github
              ? <a href={ data.githubLink }><GithubFilled /></a>
              : null
            }
          </div>
        </Jumbotron>
        <Row className="desc-wrapper">
          <p> {data.desc} </p>
        </Row>
        <Row className="techstack-wrapper">
          {data.icons.map((t, i) => {
            console.log(t)
            return ( 
              <FontAwesomeIcon key={i} icon={['fab', t]} />
            ) 
          })}
        </Row>
        <Row> 
          <Col xs={8}>
            <p className="heading">What I learnt: </p>
            {data.lessons.map((l, i) => {     
              return (<p key={i}>{l}</p>) 
            })}
          </Col>
        </Row>
        
        <Link to={{ pathname: "/projects" }}>
          <ArrowLeftOutlined /> <br /> Back to Projects!
        </Link>  
      </Content>
    );
  }
}

export default Project;