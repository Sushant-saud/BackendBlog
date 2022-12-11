const router=require("express").Router();
const LatestTech=require('../Models/Tech.js')
router.post("/",async(req,res)=>{
   const newLatestTech=new LatestTech(req.body);
   try
   {
    const savedLatestTech=await newLatestTech.save();
    res.status(201).send(savedLatestTech);

   }catch(err){
    res.status(500).send(err);
   }
})
//get all
router.get("/",async(req,res)=>{
    try{
        const getAll=await LatestTech.find();
        res.status(200).send(getAll)
    }
    catch(err){
        res.status(500).send(err);
    }
  
})
//get one
router.get("/:id",async(req,res)=>{
    try{
        const getOne=await  LatestTech.findById(req.params.id)
        res.status(201).send(getOne);

    }catch(err){
        res.status(500).send(err);
    }
})
module.exports=router;