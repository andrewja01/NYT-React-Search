import axios from "axios";

const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const queryParams = { "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931" };

export default {
    getArticles: function(query) {
        return axios.get("api/articles", { params: { q: query } });
    }
};