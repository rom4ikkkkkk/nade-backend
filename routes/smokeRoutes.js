const express = require('express');
const router = express.Router();
const { addSmoke, getSmokes } = require('../controllers/smokeController');
const adminAuth = require('../auth/auth');

router.post('/add', adminAuth, addSmoke); // Только админ может добавить
router.get('/', getSmokes);               // Все могут смотреть

module.exports = router;
