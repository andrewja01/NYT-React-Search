import React from "react";
import { Container, Row, Col } from "../Grid";

//renders a bootstrap list item containing data from the NYT api call
export const ArticleListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p>date: {props.date}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.url}>
            Go to Article!
          </a>
        </Col>
      </Row>
    </Container>
  </li>
);