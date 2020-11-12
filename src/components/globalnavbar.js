import React, {Component} from 'react';
import {
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavbarBrand,
  NavLink,
  Collapse
} from "reactstrap";

export default class GlobalNavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      isOpen: false
    };
  }
  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  close() {
    this.setState({
      isOpen: false
    });
  }
  handleClickOutside(event) {
    const t = event.target;
    if (this.state.isOpen
      && !t.classList.contains('navbar-toggler')
      && !t.classList.contains('nav-item')
      && !t.classList.contains('navbar-nav')
      && !t.classList.contains('nav-link')
      && !t.classList.contains('navbar-toggler-icon')) {
      this.close();
    }
  }
  render() {
    return(
      <Navbar className="navbar" expand="md" dark color="black" fixed="top" full="true">
        <NavbarToggler onClick={this.toggle} className="float-right" />
        <Collapse isOpen={this.state.isOpen} navbar className="nav-center justify-content-center">
          <Nav navbar>
            <NavItem>
              <NavLink onClick={this.close} href="/#home">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.close} href="/#about">ABOUT</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink onClick={this.close} href="/#themes">THEMES</NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink onClick={this.close} href="/#schedule">SCHEDULE</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink onClick={this.close} href="/#faq">FAQ</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink onClick={this.close} href="/#partners">PARTNERS</NavLink>
            </NavItem> */}
{/*            <NavItem>
              <NavLink onClick={this.close} href="/#sponsors">SPONSORS</NavLink>
            </NavItem>*/}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
