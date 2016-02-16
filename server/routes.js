var controller = require('./controllers');
var router = require('express').Router();

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

router.put('/users', controller.users.update);

router.get('/commitments', controller.commitments.get);

router.post('/commitments', controller.commitments.post);

module.exports = router;