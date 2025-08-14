const User=require("../models/Admin");
const bcrypt=require('bcrypt');
const jwt = require("jsonwebtoken");
async function newLogin(req,res,next)
{
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
   
    try {
        const user=await User.findOne({email:req.body.email})
        if(user)
            {
                const isValidUser=await bcrypt.compare(req.body.password,user.password);
                if(isValidUser)
                {
                    const userObject = {
                        userid: user._id,
                        username: user.name,
                        email: user.email,
                      };
                      const token = jwt.sign(userObject, process.env.JWT_SECRET, {
                        expiresIn: process.env.JWT_EXPIRY,
                      });
                      res.cookie(process.env.COOKIE_NAME, token, {
                        maxAge: process.env.JWT_EXPIRY,
                        httpOnly: true,
                        signed: true,
                        secure: true, 
                        sameSite: "None", 
                      });
                      console.log("User is logged in")
                      res.status(200).json({success:true});
                }
                else{
                    return res.status(401).json({msg:"Login failed! Please try again."})
                }
            }
            else{
                return res.status(401).json({msg:"Login failed! Please try again."})
            }
    } catch (error) {
        console.log(error)
        return res.status(500).json({err:error});
    }

    console.log(req.body);
    res.status(200).json({});
    

}
function loginAuth(req, res, next) {
    res.status(200).json({ msg: "You are authenticated", user: req.user });
}

module.exports={
    newLogin,
    loginAuth
}