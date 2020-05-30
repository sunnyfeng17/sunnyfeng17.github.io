import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row } from 'antd';

import './EasterEgg.scss'

import tardis from '../images/tardis.jpg';

const { Content } = Layout;


class WrongHome extends React.Component {
    render(){
        return (
            <Content /*style={{backgroundImage: `url(${ tardis })`, backgroundSize: "cover", backgroundRepeat: 'no-repeat', overflow: "hidden", maxHeight: "100%"}}*/ >
                <Row>
                    <img style={{height: "50em"}} src={tardis} alt="Tardis"/>
                </Row>
                <Row className="options">
                    <p>Yay! You found my easter egg, unfortunately it's still a work in progress so it doesn't work yet, check back later!</p>
                    <Link to="/spacetravel" className="option-links">Time Travel</Link>
                    <Link to="" className="option-links">Get me out of here!</Link>
                    <Link to="/home" className="option-links">Return Home</Link>
                </Row>
            </Content>
        );
    }
}

export default WrongHome;