const express = require('express');
const router = express.Router();
const cors = require('cors');
const conf = require("./cors");
const formController = require('../controllers/form.js')

router.options("*", cors(conf.corsOptionsDelegate));
router.get('/form', cors(conf.corsOptionsDelegate), conf.preFlight, formController.get);

module.exports = router;