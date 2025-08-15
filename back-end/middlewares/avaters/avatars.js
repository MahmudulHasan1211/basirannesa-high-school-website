const multer=require('multer');
const path=require('path')

require('dotenv').config();

const upload_folders=path.join(__dirname, '..', '..', 'public' ,'uploads','avatars');


let storage;

    storage=multer.diskStorage({
        destination: function(req,file,cb){
            cb(null,upload_folders)
        },
        filename:function(req,file,cb){
            const fileExt=path.extname(file.originalname)
            const uniqueSuffix =Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + uniqueSuffix+fileExt)
        }
    })



const upload = multer({ storage: storage })
function uploads(req,res,next){
    upload.single('avatar')(req,res,next)
    console.log("avater upload")
}
module.exports=uploads