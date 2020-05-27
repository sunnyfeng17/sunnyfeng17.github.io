import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import "./Projects.css";

const { Content } = Layout;

const cards = [
  { cardId: 'personal-website-card', title: 'Personal Website' },
  { cardId: 'tetris-card', title: 'Tetris'},
  { cardId: 'learnfromakiwi-card', title: 'LearnFromA.Kiwi' },
  { cardId: 'money-busters-card', title: 'Money Busters' },
  { cardId: 'scammr-card', title: 'Scammr' },
  { cardId: 'task-manager-card', title: 'Task Manager' },
  { cardId: 'eventigate-card', title: 'Eventigate' },
  { cardId: 'moving-shapes-card', title: 'Moving Shapes' }
  
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
        <h1>Projects</h1>
        <Row className="project-grid">
          { 
            cards.map((object, i) => {
              return (
                <Link key={i} to={ "/*" }>
                  <Col xs={24} sm={24} md={6} className="project-card" id={object.cardId} />
                </Link>
              )
            })
          }
        </Row>      
      </Content>
    );
  }
}



export default Projects;