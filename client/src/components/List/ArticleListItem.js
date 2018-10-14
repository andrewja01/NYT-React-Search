import React from "react";
import { Container, Row, Col } from "../Grid";

//renders a bootstrap list item containing data from the NYT api call
export const ArticleListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-12 sm-12">
          <h3>{props.title}</h3>
          <p>date: {props.date}</p>
          <a target="_blank" href={props.url}>
            {props.url}
          </a>
          <br></br>
          <button id = {props._id } className = "btn btn-info mt-3" onClick = {() => props.handleSaveSubmit(props._id)} > Save Article </button>
        </Col>
      </Row>
    </Container>
  </li>
);