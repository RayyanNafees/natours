const express = require("express");
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTour,
  getTourStats,
  getMonthlyPlan,
  getToursWithin,
  getDistances,
  uploadTourImages,
  resizeTourImages
} = require("../controllers/tourController.controller");
const authController = require("./../controllers/authController.controller");
const reviewRouter = require("../routes/reviewRoutes.route");
const router = express.Router();

// POST /tour/234fdsa4/reviews
// GET /tour/234fdsa4/reviews

router.use("/:tourId/reviews", reviewRouter);

router.route("/top-5-cheap").get(aliasTopTour, getAllTours);

router.route("/tour-stats").get(getTourStats);
router
  .route("/monthly-plan/:year")
  .get(
    authController.protect,
    authController.restrictTo("admin", "lead-guide", "guide"),
    getMonthlyPlan
  );

  router.route('/tours-within/:distance/center/:latlng/unit/:unit').get(getToursWithin)
  // /tours-distance?distance=233&center=40,45&unit=mi
  // /tours-distance/233/center/-40,45/unit/mi


  router.route('/distances/:latlng/unit/:unit').get(getDistances)

router
  .route("/")
  .get(getAllTours)
  .post(authController.protect, authController.restrictTo("admin", "lead-guide"), createTour);

router
  .route("/:id")
  .get(getTour)
  .patch(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    uploadTourImages, resizeTourImages,
    updateTour
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    deleteTour
  );

module.exports = router;
