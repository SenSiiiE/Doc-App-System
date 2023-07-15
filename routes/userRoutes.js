const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentController,
} = require("../controllers/userCtrl");

const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || Post
router.post("/getUserData", authMiddleware, authController);

//Apply doctor || Post
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notification doctor || Post
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//Notification doctor || Post
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//Get all Doctors
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//Book Appointment
router.post("/book-appointment", authMiddleware, bookAppointmentController);

//Booking availibility
router.post(
  "/booking-availability",
  authMiddleware,
  bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentController);
module.exports = router;
