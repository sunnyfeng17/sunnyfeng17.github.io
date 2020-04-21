import React from 'react';
import { Layout, Row, Col, Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';

import './Resume.css';

import underConstruction  from '../images/construction.png';

const { Header, Footer, Sider, Content } = Layout;

class UnderConstruction extends React.Component {
    render() {
        return (
            <Content>
                <div className="constructionBox">
                    <h1 style={{textAlign: "center"}}>This page is currently under construction! <br /> Check back later for updates!</h1>
                    <Link to="/404"> <img className="constructionImg" src={underConstruction}/></Link>
                    <p>Psss look at me! If you have time to waste click on me ^</p>
                </div>
            </Content>
            
      );
    }
}
  
export default UnderConstruction;