import React from 'react';
import { Layout, Row, Col } from 'antd';
import {Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

import { GithubFilled, ArrowLeftOutlined, GlobalOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Project.scss';

const { Content } = Layout;

class Project extends React.Component {
  render() {
    const pathArr = window.location.pathname.split('/');
    const data = JSON.parse(localStorage.getItem(pathArr[pathArr.length - 1]));
    return (
      <Content className="project-container">
        <Jumbotron fluid className="project-jumbotron">
          <video src={ data.video } autoPlay loop muted/>
          <div className="banner">
            <h1>{ data.title }</h1>
            <p> { data.desc }</p>
            { data.website != null ? <a href={ data.websiteLink } rel="noopener noreferrer" target="_blank"><GlobalOutlined /></a> : null }
            { data.github != null ? <a href={ data.githubLink } rel="noopener noreferrer" target="_blank"><GithubFilled /></a> : null }
          </div>
        </Jumbotron>
          <Row className="techstack-wrapper">
            { data.icons.map((t, i) => { return ( <FontAwesomeIcon key={i} icon={['fab', t]} /> ) })}
          </Row>
          <Row><p>{ data.theme }</p></Row>
          <Row className="text-container">
            { data.slides !== null ? <Col xs={24} sm={24} md={12}><video src={ data.slides } className="slides" autoPlay loop muted/></Col> : null }
            { data.lessons !== null
              ? <Col xs={24} sm={24} md={12} className="lessons-wrapper">
                  <h2>WHAT I LEARNT</h2>
                  <ul>
                    { data.lessons.map((l, i) => {     
                      return (<li key={i}>{l}</li>) 
                    })}
                  </ul>
                </Col>
              : null
            }
            { data.contributions !== null
              ? <Col xs={24} sm={24} md={12}className="contributions-wrapper">
                  <h2>MY CONTRIBUTIONS</h2>
                  <ul>
                    { data.contributions.map((l, i) => {     
                      return (<li key={i}>{l}</li>) 
                    })}
                  </ul>
                </Col>
              : null
            }
          </Row>
          { data.mockup !== null
            ? <Row className="mockup"> 
              <img src={data.mockup} alt="mockup"/>
            </Row>
            : null
          }
        <Link to={{ pathname: "/projects" }}>
          <ArrowLeftOutlined /> <br /> Back to Projects!
        </Link>  
      </Content>
    );
  }
}

export default Project;