const User=require("../models/Admin");
const bcrypt=require('bcrypt');
async function newRegister(req,res,next)
{
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(req.body);
    const newUser= new User({
        ...req.body,
        password:hashedPassword
    })
    try {
        const result=await newUser.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(200).json({err:error.message});
    }
    

}

module.exports=newRegister