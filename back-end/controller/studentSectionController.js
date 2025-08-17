const ClassGroup = require("../models/ClassGroup");

async function getAllClass(req, res) {
  try {
    const data = await ClassGroup.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function postAllClass(req, res) {
  try {
    const newClass = new ClassGroup(req.body);
    await newClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function updateAllClass(req, res) {
  console.log(req.body);
  try {
    const updated =  await ClassGroup.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function deleteAllClass(req, res) {
  console.log(req.body);
  try {
    const user=await ClassGroup.findById(req.params.id);
    console.log(user.sections.length);
    if(user.sections.length>1)
    {
      const updated = await ClassGroup.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(updated);
    }
    else{
      await ClassGroup.findByIdAndDelete(req.params.id);
      res.json({ message: "Deleted successfully" });
    }
    
    
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  getAllClass,
  postAllClass,
  updateAllClass,
  deleteAllClass,
};
