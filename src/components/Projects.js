import React from "react";
import { Layout, Row, Col } from 'antd';
import Carousel from 'react-bootstrap/Carousel';

import "./Projects.css";

const { Header, Footer, Sider, Content } = Layout;

class Projects extends React.Component {
  render() {
    return (
      <Content>
        <h1>Projects</h1>
        <Carousel>
          <Carousel.Item>
            <Carousel.Caption>
              <h5>Personal Website</h5>
              <p>What you're looking at now. Built in a week, consistently maintained.</p>
              <p className="italics">My personal website which I created, for fun and to learn, using React, EmailJS and multiple UI libraries.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption>
              <h5>MoneyBusters</h5>
              <p>A webapp built over 2 days for Summer of Tech's Create Camp (2019).</p>
              <p className="italics">I worked with 3 developers, a designer and a mentor to develop a webapp to manage student finances. Users are prompted enter their expenses and income, then they are able to view their spending allowance as well as trends in their spending. The webapp integrated the Pocket Smith API and was deployed on Heroku.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption>
              <h5>Scammr</h5>
              <p>An android app built over 2 days for Dev's 48 hour hackathon (2019).</p>
              <p>Theme: Build your own startup.</p>
              <p className="italics">I worked with 3 students to develop an android app to detect whether an incoming call is a scam or not. The app used keyword detection, to generate a risk score, to alert the user through phone vibrations.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption>
              <h5>Eventigate</h5>
              <p>A website built over 2 days for AUCS's Hackathon 101 (2019).</p>
              <p>Theme: Improving interactions within local communities through tech.</p>
              <p className="italics">I worked with 3 students to develop a website to help connect locations, individuals and volunteering groups. Individuals are able to look for locations which they would like to volunteer at and host events. While locations are able to find volunteer groups to host events at their location.</p>
              <p className="italics">Award: Best Presentation</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption>
              <h5>Cheese and Crackers</h5>
              <p>A website built over 2 days for AUCS's Hackathon 101 (2018).</p>
              <p>Theme: Students have 99 problems but we can only solve one,</p>
              <p className="italics">I worked with 3 students to develop a website to help students receive 24/7 help. We used the Google API for the login to link students and tutors together, allowing students to ask for help from online tutors.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      </Content>
    );
  }
}

export default Projects;