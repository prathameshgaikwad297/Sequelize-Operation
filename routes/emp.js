var express = require('express');
var router = express.Router();
var empControllers=require('../Controllers/emp_controllers');


/* GET users listing. */
router.get('/',empControllers.getAllEmp);


/*Create users . */
router.post('/create',empControllers.createEmp);

/*Update users. */
router.post('/update',empControllers.updateEmp);


/*Delete users. */
router.post('/delete',empControllers.deleteEmp);


module.exports = router;
