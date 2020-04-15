import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import './LandingPage.css';

import { ReactComponent as SunnySVG } from '../images/sunnyfeng.svg';
import { ReactComponent as ContinueSVG} from '../images/continue.svg';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landingPage">
        <div className="landingBox">
            <Row>
              <Col span={24}>
                <SunnySVG className="handwrittenEffect"/>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Link to="/home"><ContinueSVG className="continueButton"/></Link>
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default LandingPage;