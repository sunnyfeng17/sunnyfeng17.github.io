import React from 'react';
import { Layout, Row, Col, Card, Avatar } from 'antd';
import './Resume.css';

const { Header, Footer, Sider, Content } = Layout;

class UnderConstruction extends React.Component {
    render() {
        return (
            <Content>
                <div className="constructionBox">
                    <h3 style={{textAlign: "center"}}>This page is currently under construction!</h3>
                    <h3 style={{textAlign: "center"}}>Check back later for updates!</h3>
                    <img src="https://sdk.bitmoji.com/render/panel/b1dc7a38-86d1-4f34-bcf3-2dabae80d204-06d1f5f0-4370-49f6-925f-164441bedeec-v1.png?transparent=1&palette=1"/>
                </div>
            </Content>
            
      );
    }
}
  
export default UnderConstruction;