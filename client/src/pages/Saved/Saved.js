import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid"
// import { Input, DeleteBtn } from "../../components/Form"
import Jumbotron from "../../components/Jumbotron"
import { ArticleListItem } from "../../components/List"
import SavedArticles from "../../components/Saved/SavedArticles";

const Saved = () => (
    <Container fluid>
        <Row>
            <Col size="md-12">
                <Jumbotron>
                    <h1>Saved Articles</h1>
                </Jumbotron>
                {this.state.articles.length ? (
                    <SavedArticles>
                        {this.state.articles.map(article => (
                            <ArticleListItem
                                key={article._id}
                                title={article.headline.main}
                                href={article.web_url}
                            >
                            </ArticleListItem>
                        ))}
                    </SavedArticles>
                ) : (
                        <h3>No Saved Articles</h3>
                    )}
            </Col>
        </Row>
    </Container>
)

export default Saved;