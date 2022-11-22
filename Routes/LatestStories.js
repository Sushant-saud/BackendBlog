const router=require("express").Router();
const LatestStories=require('../Models/LatestStories');
router.post("/",async(req,res)=>{
   const newLatestStories=new LatestStories(req.body);
   try
   {
    const savedLatestStories=await newLatestStories.save();
    res.status(201).send(savedLatestStories);

   }catch(err){
    res.status(500).send(err);
   }
})
//get all
router.get("/",async(req,res)=>{
    try{
        const getAll=await LatestStories.find();
        res.status(200).send(getAll)
    }
    catch(err){
        res.status(500).send(err);
    }
  
})
//get one
router.get("/:id",async(req,res)=>{
    try{
        const getOne=await  LatestStories.findById(req.params.id)
        res.status(201).send(getOne);

    }catch(err){
        res.status(500).send(err);
    }
})
module.exports=router;