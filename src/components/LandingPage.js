import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import './LandingPage.scss';

import { ReactComponent as SunnySVG } from '../images/logo/sunnyfeng.svg';
import { ReactComponent as ContinueSVG} from '../images/continue.svg';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <div className="vertical-center landing-box">
            <Row>
              <Col span={24}>
                <SunnySVG className="handwriting-effect" type="flex"/>
                <br></br>
                <Link to="/home"><ContinueSVG className="continue-button"/></Link>
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default LandingPage;