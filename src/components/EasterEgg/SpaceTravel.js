import React from 'react';
// import { Link } from 'react-router-dom';
import { Layout, Row} from 'antd';

import './EasterEgg.scss'

import tardisTravel from '../../images/tardistravel.jpg';

const { Content } = Layout;


class WrongHome extends React.Component {
    render(){
        return (
            <Content>
                <Row style={{overflow: "hidden"}}>
                    <img style={{width: "108em"}} src={tardisTravel} alt="Tardis"/>
                </Row>
            </Content>
        );
    }
}

export default WrongHome;

