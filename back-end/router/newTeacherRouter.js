const express=require('express');
const newTeacher = require('../controller/newTeacherController');
const uploads = require('../middlewares/avaters/avatars');


const router=express.Router();

router.post('/',uploads,newTeacher)

module.exports=router;