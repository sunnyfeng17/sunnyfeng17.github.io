import React from 'react';
import Fade from 'react-reveal/Fade';
import { Layout, Row, Col } from 'antd';

import './Photography.css';

import PhotographyImages from './PhotographyImages'

const {Content} = Layout;

class Photography extends React.Component {
  render() {
    return (
      <>
      <Content className="pushDown">
        <h1>Photography</h1>
        <div className="gallery">
          <Row className="photographyRow">
            { 
              PhotographyImages.map((key) => {
                return (
                  <Col xs={24} sm={8} className="photographyCol"><Fade top><img src={key.src} alt={key.title} className="photography"/></Fade></Col>
                )
              })
            }
          </Row>
        </div>
      </Content>
      </>
    );
  }
}

export default Photography;