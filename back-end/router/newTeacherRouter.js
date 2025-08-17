const express=require('express');
const {newTeacher,getTeacher,deleteTeacher} = require('../controller/newTeacherController');
const uploads = require('../middlewares/avaters/avatars');
const checkAuth=require('../middlewares/auth/cheackAuth')


const router=express.Router();

router.post('/',checkAuth,uploads,newTeacher)
router.get('/',getTeacher)
router.delete('/:id',checkAuth,deleteTeacher)

module.exports=router;