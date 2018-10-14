const router = require("express").Router();
// const axios = require("axios");
const articleController = require("../../controllers/articleController");
// const key = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
// const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=`

// //fetch data from NYT
// router.get("/articles", (req, res) => {





//   axios
//     .get(queryURL)
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// })

// Matches with "/api/savedArticles
router
  .route("/")
  .get(articleController.findAll)
  .post(articleController.create);

  // Matches with "/api/articles/:id"
router
.route("/:id")
.get(articleController.findById)
.delete(articleController.remove);



// router
//   .route("/")
//   .get(articleController.findAll)
//   .post(articleController.create);


module.exports = router;
