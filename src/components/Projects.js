import React from 'react';
import { Layout, Row, Col } from 'antd';

import "./Projects.css";

const { Content } = Layout;

const cards = [
  { cardId: 'personal-website-card' },
  { cardId: 'tetris-card'},
  { cardId: 'learnfromakiwi-card' },
  { cardId: 'money-busters-card' },
  { cardId: 'scammr-card' },
  { cardId: 'task-manager-card' },
  { cardId: 'eventigate-card' },
  { cardId: 'moving-shape-card' }
  
]

class Projects extends React.Component {
  render() {
    const videos = document.querySelectorAll("video")
    videos.forEach(video => {
      video.addEventListener("mouseover", function () {
        this.play()
      })
      
      video.addEventListener("mouseout", function () {
        this.pause()
      })
      
      video.addEventListener("touchstart", function () {
        this.play()
      })
      
      video.addEventListener("touchend", function () {
        this.pause()
      })
    })
    return (
      <Content className="project-container">
        <div>
          <h1>Projects</h1>
          <Row className="project-grid">
            { 
              cards.map((object, i) => {
                return (
                  <Col xs={24} sm={24} md={6} className="project-card" key={i} id={object.cardId} />
                )
              })
            }
          </Row>     
        </div>  
      </Content>
    );
  }
}



export default Projects;