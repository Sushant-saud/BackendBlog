const mongoose=require("mongoose");
const LatestArticleSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    desc: {
        type: String, 
    },
    img: {
        type: String,
        
    },
    Author:{
        type:String,
      
    }
},
{
    timestamps:true,
})
module.exports=mongoose.model('LatestArticle',LatestArticleSchema);