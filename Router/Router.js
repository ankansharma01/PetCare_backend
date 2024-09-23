const express = require("express");
const { signup, login } = require("../Controllers/User_Controllers");
const appointmentController = require('../Controllers/Appointment_Controllers.js');
const petController = require('../Controllers/Pet_Controllers.js');
const restrictToLogin = require('../middlewares/verification.js')
// const authMiddleware = (req, res, next) => {
//   // Check if user is authenticated and set req.user
//   // For example:
//   if (req.isAuthenticated()) {
//     req.user = { _id: '66e6db4baf8111fdcc665372' }; // Replace with your logic to retrieve the user from the session or token
//     next();
//   } else {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
// };


const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hey");
});
// userAuth
router.post("/signup", signup);
router.post("/login", login);
// appointment restAPI
router.post('/createappmt',restrictToLogin,appointmentController.createAppointment);
router.get('/getappmts',restrictToLogin,appointmentController.getAllAppointments);
router.get('/:id',restrictToLogin, appointmentController.getAppointmentById);
router.put('/:id', restrictToLogin,appointmentController.updateAppointment);
router.delete('/:id',restrictToLogin, appointmentController.deleteAppointment);
// user petAPI
router.get('/pets', petController.getAllPets);
router.post('/createPet', petController.createPet);
router.get('/:id', petController.getPetById);
router.put('/update/:id', petController.updatePet);
router.delete('/delete/:id',  petController.deletePet);



module.exports = router;