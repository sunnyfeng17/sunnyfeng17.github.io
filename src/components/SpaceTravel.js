import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';

import './EasterEgg.css'

import tardisTravel from '../images/tardistravel.jpg';

const { Header, Footer, Sider, Content } = Layout;


class WrongHome extends React.Component {
    render(){
        return (
            <Content>
                <Row style={{overflow: "hidden"}}>
                    <img style={{height: "50em"}} src={tardisTravel} />
                </Row>
            </Content>
        );
    }
}

export default WrongHome;

