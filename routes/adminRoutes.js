const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");

const router = express.Router();

// Get Method || Users
router.get("/getAllUsers", authMiddleware, getAllUsersController);

// Get Method || Doctors
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//POST ACCOUNT Status
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;
