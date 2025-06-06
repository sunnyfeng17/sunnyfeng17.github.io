import React from 'react';
import { Layout} from 'antd';
import { Link } from 'react-router-dom';
import '../css/UnderConstruction.scss';

import underConstruction  from '../images/bitmoji/construction.png';

const { Content } = Layout;

class UnderConstruction extends React.Component {
    render() {
        return (
            <Content>
                <div className="construction-wrapper">
                    <div className="construction-text">This page is currently under construction! <br/> Check back later for updates!</div>
                    <Link to="/404"> <img src={underConstruction} alt="Bitmoji Drilling"/></Link>
                    <p>Psss look at me! If you have time to waste click on me ^</p>
                </div>
            </Content>
            
      );
    }
}
  
export default UnderConstruction;