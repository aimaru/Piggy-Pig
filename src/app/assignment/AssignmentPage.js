import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./AssignmentPage.scss";

// import PropTypes from 'prop-types';
// import App from './App';
// import Header from '../components/Header';
// import SideMenu from '../components/SideMenu';

export default class AssignmentPage extends React.Component {
  render() {
    return (
      <Col xs={12} className="AssignmentPage">
        {/* <Header />
        <SideMenu /> */}
        <Col xs={8} xsOffset={2}  className="holder">
          <p>Det är Uppgifter sidan</p>
          <p>
            Gå tillbaka till <span>>>></span> <Link to="/"> Home </Link>
          </p>
          </Col>
          <Col xsOffset={2} /> 
      </Col>
    );
  }
}
