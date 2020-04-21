import React from 'react';
import { Layout, Row, Col } from 'antd';
import Carousel from 'react-bootstrap/Carousel';

import "./Projects.css";

import SunnyFeng1 from '../images/projects/sunnyfengDesktop.JPG';
import SunnyFeng2 from '../images/projects/sunnyfengMobile.PNG';
import SunnyFeng3 from '../images/projects/sunnyfengDesktopHome.JPG';
import MoneyBusters1 from '../images/projects/MoneyBustersLandingPage.PNG';
import MoneyBusters2 from '../images/projects/MoneyBustersLoginPage.PNG';
import MoneyBusters3 from '../images/projects/MoneyBustersMainPage.PNG';
import Scammr1 from '../images/projects/scammrSlide1.JPG';
import Scammr2 from '../images/projects/scammrSlide2.JPG';
import Eventigate1 from '../images/projects/eventigateSlide.JPG';
import Eventigate2 from '../images/projects/eventigateSlide2.JPG';
import CnC1 from '../images/projects/cncSlide1.JPG';
import CnC2 from '../images/projects/cncSlide2.JPG';

const { Header, Footer, Sider, Content } = Layout;

class Projects extends React.Component {
  render() {
    return (
      <Content>
        <h1>Projects</h1>
        <Carousel pause="hover">
          <Carousel.Item>
            <img className="projectsImg landscapeImg" src={ SunnyFeng1 } /><img className="projectsImg hideImgM" src={ SunnyFeng2 } /><img className="projectsImg landscapeImg hideImgD" src={ SunnyFeng3 } />
            <Carousel.Caption>
              <h5>Personal Website</h5>
              <p>What you're looking at now. Built in a week, consistently maintained.</p>
              <p className="italics">My personal website which I created, for fun and to learn, using React, EmailJS and multiple UI libraries.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="projectsImg portraitImg" src={ MoneyBusters1 } /><img className="projectsImg hideImgM" src={ MoneyBusters2 } /><img className="projectsImg portraitImg" src={ MoneyBusters3 } />
            <Carousel.Caption>
              <h5>MoneyBusters</h5>
              <p>A webapp built over 2 days for Summer of Tech's Create Camp (2019).</p>
              <p className="italics">I worked with 3 developers, a designer and a mentor to develop a webapp to manage student finances. Users are prompted to enter their expenses and income, then they are able to view their spending allowance as well as trends in their spending. The webapp integrated the Pocket Smith API and was deployed on Heroku.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img className="projectsImg landscapeImg" src={ Scammr1 } /><img className="projectsImg landscapeImg hideImgD" src={ Scammr2 } />
            <Carousel.Caption>
              <h5>Scammr</h5>
              <p>An android app built over 2 days for Dev's 48 hour hackathon (2019).</p>
              <p>Theme: Build your own startup.</p>
              <p className="italics">I worked with 3 students to develop an android app to detect whether an incoming call is a scam or not. The app used keyword detection to generate a risk score, to alert the user through phone vibrations.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
           <img className="projectsImg landscapeImg" src={ Eventigate1 } /><img className="projectsImg landscapeImg hideImgD" src={ Eventigate2 } />
            <Carousel.Caption>
              <h5>Eventigate</h5>
              <p>A website built over 2 days for AUCS's Hackathon 101 (2019).</p>
              <p>Theme: Improving interactions within local communities through tech.</p>
              <p className="italics">I worked with 3 students to develop a website to help connect locations, individuals and volunteering groups. Award: Best Presentation</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img className="projectsImg landscapeImg" src={ CnC1 } /><img className="projectsImg landscapeImg hideImgD" src={ CnC2 } />
            <Carousel.Caption>
              <h5>Cheese and Crackers</h5>
              <p>A website built over 2 days for AUCS's Hackathon 101 (2018).</p>
              <p>Theme: Students have 99 problems but we can only solve one.</p>
              <p className="italics">I worked with 3 students to develop a website with the aim to help students receive help. We used the Google API for the login to link students and tutors.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      </Content>
    );
  }
}

export default Projects;