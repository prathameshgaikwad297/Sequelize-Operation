var express = require('express');
var router = express.Router();
const deptController = require('../Controllers/dept_controllers');


/* GET users listing. */
router.get('/',deptController.getAllDept);
router.post('/create',deptController.createDept);


module.exports = router;