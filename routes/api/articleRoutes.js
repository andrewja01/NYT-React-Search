const router = require("express").Router();
const axios = require("axios");
const articleController = require("../../controllers/articleController");

const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const queryParams = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Matches with "/api/books"
router.get("/", (req, res) => {
  axios
    .get(queryURL, {
    })
    .sort({ date: -1 })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
})

// router
//   .route("/")
//   .get(articleController.findAll)
//   .post(articleController.create);


// router
//   .route("/")
//   .get(articleController.findAll)
//   .post(articleController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/saved")
//   .get(articleController.findById)
//   .put(articleController.update)
//   .delete(articleController.remove);

module.exports = router;
