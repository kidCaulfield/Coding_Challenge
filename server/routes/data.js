const express = require('express');
const router = express.Router();
const cors = require('cors');
const conf = require("./cors");
const dataController = require('../controllers/data.js')

router.options("*", cors(conf.corsOptionsDelegate));
router.get('/data', cors(conf.corsOptionsDelegate), conf.preFlight, dataController.get);

module.exports = router;