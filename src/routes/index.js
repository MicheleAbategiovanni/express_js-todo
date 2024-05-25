const path = require('path');

const express = require('express');

const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', indexController.getIndex);
router.post('/new-todo', indexController.createTodo);
router.post('/delete-todo', indexController.deleteTodo);

module.exports = router;