const express=require('express');
const newRegister = require('../controller/registerController');


const router=express.Router();

router.post('/',newRegister)

module.exports=router;