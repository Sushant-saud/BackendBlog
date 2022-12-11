const mongoose=require("mongoose");
const LatestTechSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    desc: {
        type: String, 
    },
    img: {
        type: String,
        
    },
    category:{
        type:String
    },
    Author:{
        type:String,
      
    }
},
{
    timestamps:true,
})
module.exports=mongoose.model('LatestTech',LatestTechSchema);