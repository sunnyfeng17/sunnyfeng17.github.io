import React from 'react';
import { Layout} from 'antd';
import { Link } from 'react-router-dom';

import './Resume.css';

import underConstruction  from '../images/construction.png';

const { Content } = Layout;

class UnderConstruction extends React.Component {
    render() {
        return (
            <Content style={{marginTop: "3.5em"}}>
                <div className="constructionBox">
                    <div className="constructionText">This page is currently under construction! <br/> Check back later for updates!</div>
                    <Link to="/404"> <img className="constructionImg" src={underConstruction} alt="Bitmoji Drilling"/></Link>
                    <p>Psss look at me! If you have time to waste click on me ^</p>
                </div>
            </Content>
            
      );
    }
}
  
export default UnderConstruction;