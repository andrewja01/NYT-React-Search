import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid"
import { Input, FormBtn, SaveBtn } from "../../components/Form"
import Jumbotron from "../../components/Jumbotron"
import { ArticleList, ArticleListItem } from "../../components/List"

class Home extends Component {
    state = {
        articles: [],
        title: "",
        beginDate: "",
        endDate: "",
    };

    handleFormSubmit = () => {
        API.getArticles(this.state.title, this.state.beginDate, this.state.endDate)
            .then(res => {
                this.setState({ articles: res.data, title: "", beginDate: "", endDate: "" })
                console.log(this.state.articles)
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSaveSubmit = event => {
        event.preventDefault();
        if (this.state.title) {
            API.saveArticle({
                title: this.state.title,
                date: this.state.date,
                url: this.state.url
            })
                .then(res => this.loadArticles())
                .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>NYT Article Scrubber</h1>
                            <h6>Search for an Article</h6>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (required)"
                            />
                            <Input
                                value={this.state.beginDate}
                                onChange={this.handleInputChange}
                                name="beginDate"
                                placeholder="Start Year"
                            />
                            <Input
                                value={this.state.endDate}
                                onChange={this.handleInputChange}
                                name="endDate"
                                placeholder="End Year"
                            />
                            <FormBtn
                                disabled={!this.state.title}
                                onClick={this.handleFormSubmit}
                            >
                                Search for Articles
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                    {this.state.articles.length ? (
                        <ArticleList>
                            {this.state.articles.map(article => (
                                <ArticleListItem 
                                    key={article.headline.main}
                                    title={article.headline.main}
                                    href={article.web_url}
                                >
                                    <SaveBtn onClick={() => this.handleSaveSubmit(article)} />
                                </ArticleListItem>
                            ))}
                        </ArticleList>
                    ) : (
                        <h3>No Result to Display</h3> 
                    )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;