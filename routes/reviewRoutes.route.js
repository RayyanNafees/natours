const express = require("express");
const reviewController = require("./../controllers/reviewController.controller");
const authController = require("./../controllers/authController.controller");

const router = express.Router({ mergeParams: true });

// POST /tour/234fdsa4/reviews
// GET /tour/23432343/reviews
// POST /reviews

router.use(authController.protect);

router
  .route("/")
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo("user"),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route("/:id")
  .get(reviewController.getReview)
  .patch(
    authController.restrictTo("user", "admin"),
    reviewController.updateReview
  )
  .delete(
    authController.restrictTo("user", "admin"),
    reviewController.deleteReview
  );

module.exports = router;
