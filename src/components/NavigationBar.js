import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { LinkedinFilled, GithubFilled } from '@ant-design/icons';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';

import '../css/NavigationBar.scss';

import { ReactComponent as DmHamburger} from '../images/dm-hamburger.svg';
import { ReactComponent as LmHamburger} from '../images/lm-hamburger.svg';
import whitelogo from '../images/logo/sunnyfeng-w.png';
import blacklogo from '../images/logo/sunnyfeng-b.png';

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

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
  }

  closeNavbar() {
      if (this.state.collapsed !== true) {
        this.toggleNavbar();
      }
  }
  
  render() {
    return (
      <div>
        <Navbar expand="lg">
        <LinkContainer exact to="/"><img src={this.props.mode === 'light' ? blacklogo : whitelogo} className="logo" alt="Sunny Feng"/></LinkContainer>
          <NavbarToggler onClick={this.toggleNavbar} aria-controls="responsive-navbar-nav" style={{padding: "0"}}>{this.props.mode === 'light' ? <LmHamburger className="hamburger" /> : <DmHamburger className="hamburger"/> }</NavbarToggler>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              {
                links.map((objLink, i) => {
                  return (<LinkContainer key={i} exact to={objLink.link}><NavItem onClick={this.closeNavbar} className="links" >{objLink.text}</NavItem></LinkContainer>)
                })
              }
            </Nav>
            <Nav className="ml-auto" navbar>
              {
                exlinks.map((objLink, i) => {
                  return (<a className="exlink" onClick={this.closeNavbar} href={objLink.link} key={i} >{objLink.text} </a>)
                })
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;