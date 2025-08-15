const mongoose=require('mongoose');

const teacherSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true,
    },
    email:{
        type:String,
        require:true,
        trim:true,
    },
    phone:{
        type:String,
        require:true,
    },
    designation:{
        type:String,
       
    },
    avatars:{
        type:String
    }
});
module.exports = mongoose.model("Teachers", teacherSchema);