import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import './LandingPage.css';

import { ReactComponent as SunnySVG } from '../images/sunnyfeng.svg';
import { ReactComponent as ContinueSVG} from '../images/continue.svg';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landingPage">
        <div className="verticalCenter landingBox">
            <Row>
              <Col span={24}>
                <SunnySVG className="handwrittenEffect" type="flex"/>
                <br></br>
                <Link to="/home"><ContinueSVG className="continueButton"/></Link>
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default LandingPage;