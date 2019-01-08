import React, { Component } from "react";
import { connect } from "react-redux";
import "./Header.css";

class Header extends Component {
  renderAuthButtons() {
    switch (this.props.auth) {
      case null:
        return undefined;

      case false:
        return (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link ml-6" href="/login">
                הרשם
              </a>
            </li>
          </ul>
        );
      default:
        return (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/summery/new">
                {" "}
                סיכום חדש
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile/<%= user.username%>">
                פרופיל
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ml-6" href="/logout">
                התנתק
              </a>
            </li>
          </ul>
        );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md bg-light sticky-top pl-4 pr-4">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".dual-collapse2"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                בית
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                אודות
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                בלוג
              </a>
            </li>
          </ul>
        </div>

        <div className="mx-auto order-0 nav-middle">
          <a className="navbar-brand mx-auto" href="/">
            סיכומון
          </a>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          {this.renderAuthButtons()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { dimensions: state.dimentions, auth: state.auth };
};

export default connect(mapStateToProps)(Header);
