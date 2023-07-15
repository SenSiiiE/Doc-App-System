const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorCtrl");

const router = express.Router();

//POST Single Doc Info
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST GET SINGLE DOC INFO
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//get appointment
router.get(
  "/doctor-appointments",
  authMiddleware,
  doctorAppointmentsController
);

//post update status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;
