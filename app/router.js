// on récupére express
const express = require("express");

// on récupére les controllers
const mainController = require("./controllers/mainController");
const promoController = require("./controllers/promoController");
const studentController = require("./controllers/studentController");
const adminController = require("./controllers/adminController");
const authController = require("./controllers/authController");
// on crée un nouveau router
const router = express.Router();

// on définis les différentes routes
router.get("/", mainController.getHomePage);
router.get("/promos", promoController.getPromosList);
router.get("/promo/:id", promoController.getPromoDetails);
router.get("/promo/:id/students", studentController.getStudentsByPromo);
router.get("/admin/addStudent", adminController.getAddStudentForm);
router.post("/admin/addStudent", adminController.addStudent);
router.post("/login", authController.login);
router.get("/history", mainController.getHistoryPage);
// on exporte le routeur
module.exports = router;
