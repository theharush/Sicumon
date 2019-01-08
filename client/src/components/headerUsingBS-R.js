import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import LogoutModal from "./LogoutModal";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

import "./Header.css";

const Links = [
  { url: "/summaries/new", label: "new summery" },
  { url: "/dashboard", label: "dashboard" },
  { url: "/profile/show", label: "profile" },
  { url: "/api/logout", label: "logout" }
];

class Header extends Component {
  renderAuth() {
    const isAuthorisedLinks = Links.map((link, index) => {
      return (
        <LinkContainer to={link.url}>
          <NavItem eventKey={index}>{link.label}</NavItem>
        </LinkContainer>
      );
    });

    switch (this.props.auth) {
      case null:
        return undefined;
      case false:
        return (
          <NavItem eventKey={1} href="#">
            <a href="/auth/google">Link</a>
          </NavItem>
        );
      default:
        return isAuthorisedLinks;
    }
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Sicumon</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>{this.renderAuth()}</Nav>
          </Navbar.Collapse>
        </Navbar>
        ;
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
