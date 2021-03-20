import React, { useState } from "react";
import { Link  } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";


function Detail(props) {
  

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
               My Info
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              
              <p>
              <h1>Email: Jgigantes@gmail.com</h1>
              <h1>GitHub: https://github.com/JimGigantes</h1>
              <h1>LinkedIn: https://www.linkedin.com/in/jamesgigantes/</h1>
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
