import React, { Component } from "react";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid"
import { Input } from "../../components/Form"
import Jumbotron from "../../components/Jumbotron"

class Articles extends Component {
    state = {
        articles: [],
        title: "",
        date: "",
        url: ""
    };

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles()
            .then(res =>
                this.setState({ articles: res.data, title: "", date: "", url: "" })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFromSubmit = event => {
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
                                placeholder="Start Date"
                            />
                            <Input
                                value={this.state.endDate}
                                onChange={this.handleInputChange}
                                name="endDate"
                                placeholder="End Date"
                            />
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Articles;