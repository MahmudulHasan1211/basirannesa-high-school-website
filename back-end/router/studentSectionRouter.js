const express=require('express');
const {getAllClass,postAllClass,updateAllClass,deleteAllClass} = require('../controller/studentSectionController');


const router=express.Router();

router.get("/", getAllClass);
router.post("/", postAllClass);
router.put("/:id", updateAllClass);
router.delete("/:id", deleteAllClass);

module.exports=router;