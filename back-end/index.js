const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const path = require('path');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const registerRoute=require('./router/registerRoute')
const loginRouter=require('./router/loginRouter');
const newTeacherRouter=require('./router/newTeacherRouter');
const studentSectionRouter=require('./router/studentSectionRouter');
const checkAuth = require('./middlewares/auth/cheackAuth');


dotenv.config();
const app=express();


// database connection
mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database connected"))
.catch(err => console.error(err));

app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
    origin: process.env.ORIGIN, // Replace with your frontend origin
    credentials: true,              // Allow cookies to be sent
  }));
app.use(cookieParser(process.env.COOKIE_SECRET)); 
app.use(express.json());

// route handle
app.use('/register',registerRoute)
app.use('/login',loginRouter)
app.use('/newteacher',newTeacherRouter)
app.use('/studentsection/api/classes',studentSectionRouter)


app.get('/',(req,res)=>{
    res.send("server is running")
})

app.listen(process.env.PORT,()=>{
    console.log(`server running on port: ${process.env.PORT}`)
})

