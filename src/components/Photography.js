import React from "react";
import Fade from 'react-reveal/Fade';
import PhotographyImages from './PhotographyImages'
import { Layout, Row, Col } from 'antd';

import './Photography.css';

const { Header, Footer, Sider, Content } = Layout;

class Photography extends React.Component {
  render() {
    return (
      <>
      <Content>
        <h1>Photography</h1>
        <Row>
          { 
            PhotographyImages.map((key) => {
              return (
                <Col xs={24} sm={8} ><Fade top><img src={key.src} alt={key.title} className="photography"/></Fade></Col>
              )
            })
          }
        </Row>
      </Content>
      </>
    );
  }
}

export default Photography;