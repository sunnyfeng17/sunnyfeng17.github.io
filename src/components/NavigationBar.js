import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { LinkedinFilled, GithubFilled } from '@ant-design/icons';

import './NavigationBar.css';

import { ReactComponent as Hamburger} from '../images/hamburger.svg';
import sunny from '../images/sunnyfeng.png';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true};
  }

  render() {
    const links = [
      { link: "/home", text:"Home" },
      { link: "/projects/", text:"Projects" },
      { link: "/photography/", text:"Photography" },
      { link: "/playground/", text:"Playground" },
      { link: "/resume/", text:"Resume" },
      { link: "/contact/", text:"Contact" }
    ];
    const exlinks = [
      { link: "//www.linkedin.com/in/sunnyfeng617/", text: <LinkedinFilled />},
      { link: "//github.com/sunnyfeng17", text: <GithubFilled />}
    ]

    return (
      <>
        <Navbar sticky="top" collapseOnSelect expand="lg">
          <LinkContainer exact to="/"><img className="name" src={sunny}/></LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{borderColor: "#252525", padding: "0"}}><Hamburger className="menu"/></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {
                links.map((objLink, i) => {
                  return (<LinkContainer exact to={objLink.link}><NavItem className="links">{objLink.text}</NavItem></LinkContainer>)
                })
              }
              </Nav>
              <Nav>
              {
                exlinks.map((objLink, i) => {
                  return (<a className="exlink" href={objLink.link}>{objLink.text} </a>)
                })
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
};

export default NavigationBar;

