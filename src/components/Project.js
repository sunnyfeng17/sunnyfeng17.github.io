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
            <p> { data.desc }</p>
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
        <div className="text-container">
          <Row className="techstack-wrapper">
            { data.icons.map((t, i) => {
              return ( 
                <FontAwesomeIcon key={i} icon={['fab', t]} />
              ) 
            })}
          </Row>
          <Row>
            { data.displaySlides 
              ? <Col xs={24} sm={24} md={12}><video src={ data.slides } className="slides" autoPlay loop muted/></Col>
              : null
            }
            <div className="w">
            { data.displayLessons
              ? <Col xs={24} sm={24} md={12} className="lessons-wrapper">
                  <p>LESSONS LEARNT</p>
                  <ul>
                    { data.lessons.map((l, i) => {     
                      return (<li key={i}>{l}</li>) 
                    })}
                  </ul>
                </Col>
              : null
            }
            { data.displayContributions
              ? <Col xs={24} sm={24} md={12}className="contributions-wrapper">
                  <p>MY CONTRIBUTIONS</p>
                  <ul>
                    { data.contributions.map((l, i) => {     
                      return (<li key={i}>{l}</li>) 
                    })}
                  </ul>
                </Col>
              : null
            }
            </div>
          </Row>
        </div>
        <Link to={{ pathname: "/projects" }}>
          <ArrowLeftOutlined /> <br /> Back to Projects!
        </Link>  
      </Content>
    );
  }
}

export default Project;