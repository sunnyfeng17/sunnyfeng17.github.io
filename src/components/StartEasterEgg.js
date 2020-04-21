import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';

import './EasterEgg.css'

import tardis from '../images/tardis.jpg';

const { Header, Footer, Sider, Content } = Layout;


class WrongHome extends React.Component {
    render(){
        return (
            <Content /*style={{backgroundImage: `url(${ tardis })`, backgroundSize: "cover", backgroundRepeat: 'no-repeat', overflow: "hidden", maxHeight: "100%"}}*/ >
                <Row>
                    <img style={{height: "50em"}} src={tardis} />
                </Row>
                <Row className="options">
                    <p>Yay! You found my easter egg, unfortunately it's still a work in progress so it doesn't work yet, check back later!</p>
                    <Link to="/spacetravel" className="optionLinks">Time Travel</Link>
                    <Link to="" className="optionLinks">Get me out of here!</Link>
                    <Link to="/home" className="optionLinks">Return Home</Link>
                </Row>
            </Content>
        );
    }
}

export default WrongHome;