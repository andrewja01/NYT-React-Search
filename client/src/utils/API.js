import axios from "axios";


export default {
    getArticles: function (title, beginDate, endDate) {
        const key = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
        const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=`
        return axios.get(`${queryURL}${key}&q=${title}&begin_date=${beginDate}0101&end_date=${endDate}1231`);
    },
    getSavedArticles: function () {
        return axios.get("api/savedArticles")
    },
    saveArticle: function (articleData) {
        return axios.post("api/savedArticles", articleData)
    },
    deleteArticle: function (id) {
        return axios.delete(`api/savedArticles/ ${id}`)
    }
};