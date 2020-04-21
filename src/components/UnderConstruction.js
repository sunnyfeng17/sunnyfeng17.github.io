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
                    <h3 style={{textAlign: "center"}}>This page is currently under construction!</h3>
                    <h3 style={{textAlign: "center"}}>Check back later for updates!</h3>
                    <Link to="/404"> <img className="constructionImg" src={underConstruction}/></Link>
                    <p>Psss look at me! If you have time to waste click on me ^</p>
                </div>
            </Content>
            
      );
    }
}
  
export default UnderConstruction;