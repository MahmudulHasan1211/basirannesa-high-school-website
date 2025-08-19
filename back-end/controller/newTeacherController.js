const User = require("../models/Teachers");
const {unlink}=require('fs')
const path = require("path");


async function newTeacher(req, res, next) {
  // console.log(req.body);
  // res.status(200).json({msg:req.file.filename})
  // let imageName = `http://localhost:5000/uploads/avatars/${req.file.filename}`;
  let imageName=req.file.filename;
  const newUser = new User({
    ...req.body,
    avatars: imageName,
  });
  try {
    const result = await newUser.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(200).json({ err: error.message });
  }
}
async function getTeacher(req, res, next) {

  try {
    const data = await User.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteTeacher(req, res, next) {
  const { id } = req.params;
  try {
    const user = await User.findById(id); 
    if (!user) return res.status(404).json({ message: "Teacher not found" });

    if (user.avatars) {
      const filePath = path.join(__dirname, `../public/uploads/avatars/${user.avatars}`);
      unlink(filePath, (err) => {
        if (err) console.error("File deletion error:", err);
        else console.log("File deleted:", filePath);
      });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "Teacher deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
module.exports ={
     newTeacher,
     getTeacher,
     deleteTeacher
}
