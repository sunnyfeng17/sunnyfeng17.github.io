import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';

import looking from '../images/looking.png'


class PageNotFound extends React.Component {
    render(){
        return (
            <Row>
                <Col xs={24} sm={6}>
                    <img className="pageNotFoundImg" src={looking}/>
                </Col>
                <Col xs={24} sm={18} className="pageNotFoundText">
                    <h1 className="errorText">Error #404</h1>
                    
                    <h2>Uh oh! <br />
                    The page you're looking for doesn't exist or can't be found!</h2>
                    <p style={{fontSize: "2em"}}>I'll keep looking for it, but in the meantime return <Link to="/tardis">here!</Link> </p>
                </Col>
            </Row>
        );
    }
}

export default PageNotFound;