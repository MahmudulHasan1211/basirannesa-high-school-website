const express=require('express');
const {newLogin,loginAuth} = require('../controller/loginController');
const checkAuth = require('../middlewares/auth/cheackAuth');

const router=express.Router();

router.post('/',newLogin);
router.get('/me',checkAuth,loginAuth);

module.exports=router;