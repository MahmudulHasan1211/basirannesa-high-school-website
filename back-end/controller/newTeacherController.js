const User=require("../models/Teachers");
async function newTeacher(req,res,next)
{
     // console.log(req.body);
     // res.status(200).json({msg:req.file.filename})
     let imageName=`http://localhost:5000/uploads/avatars/${req.file.filename}`
         const newUser= new User({
             ...req.body,
             avatars:imageName
         })
         try {
             const result=await newUser.save();
             res.status(200).json(result);
         } catch (error) {
             res.status(200).json({err:error.message});
         }

}
module.exports=newTeacher