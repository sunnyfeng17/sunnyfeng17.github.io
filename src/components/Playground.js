import React from "react";
import { Layout, Row, Col } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class Playground extends React.Component {
  render() {
    return (
      <div >
        <h1>Playground</h1>
        <h3 style={{textAlign: "center"}}>This page is currently under construction!</h3>
        <h3 style={{textAlign: "center"}}>Check back later for updates!</h3>
      </div>
    );
  }
}

export default Playground;