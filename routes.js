const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.list);

module.exports = router;