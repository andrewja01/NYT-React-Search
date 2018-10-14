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

    getSavedArticles = () => {
        API.getSavedArticles()
            .then((res) => {
                this.setState({ articles: res.data })
            })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getArticles(this.state.title, this.state.beginDate, this.state.endDate)
            .then(res => {
                this.setState({ articles: res.data.response.docs })
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

    handleSaveSubmit = id => {
            const article = this.state.articles.find(article => article._id === id);
            API.saveArticle(article)
                .then(res => this.getSavedArticles())
                .catch(err => console.log(err));
        };

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
                            <label htmlFor="Title">Title: </label>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (required)"
                            />
                             <label htmlFor="Start Year">Start Year: </label>
                            <Input
                                value={this.state.beginDate}
                                onChange={this.handleInputChange}
                                name="beginDate"
                                placeholder="Start Year"
                            />
                            <label htmlFor="End Year">End Year: </label>
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
                                    url={article.web_url}
                                    date={article.pub_date}
                                    handleSaveSubmit={this.handleSaveSubmit}
                                >

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