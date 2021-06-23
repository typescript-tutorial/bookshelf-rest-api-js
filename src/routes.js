const express = require('express');
const userController =  require('./controllers/User.controller');

const router = express.Router();

router.get('/users', userController.All);
router.get('/users/:id', userController.Load);
router.post('/users', userController.Insert);
router.put('/users/:id', userController.Update);
router.delete('/users/:id', userController.Delete);

module.exports = router;