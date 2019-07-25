const express = require('express');
const router = express.Router();
const userDao = require('../dao/userDao');

/* GET users listing. */
router.get('/getAllUserAction', function (req, res, next) {

    userDao.queryAllUser(req, res, function (result) {
        res.json(result);
    })
});

router.post('/getUserByName', function (req, res, next) {
    userDao.queryUserByName(req, res, function (result) {
        res.json(result);
    })
})

module.exports = router;
