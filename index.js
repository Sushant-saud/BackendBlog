const express=require("express");
const app=express();
const dotenv=require("dotenv");
var cors = require('cors')
dotenv.config();
const Latest=require("./Routes/Latest.js");
const LatestArticle=require("./Routes/LatestArticel");
const LatestStories=require("./Routes/LatestStories");
const Top=require('./Routes/Top');
const Bollywood=require('./Routes/Bollywood.js')
require("./Db/connect.js")
app.use(express.json());
app.use(cors());
app.use("/api/latest",Latest);
app.use("/api/latestarticle",LatestArticle);
app.use("/api/lateststories",LatestStories);
app.use("/api/top",Top);
app.use("/api/bollywood",Bollywood);
app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend server is running")
})
