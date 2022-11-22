const router=require("express").Router();
const Latest=require('../Models/Lates.js');
router.post("/",async(req,res)=>{
   const newLatest=new Latest(req.body);
   try
   {
    const savedLatest=await newLatest.save();
    res.status(201).send(savedLatest);

   }catch(err){
    res.status(500).send(err);
   }
})
//get all
router.get("/",async(req,res)=>{
    try{
        const getAll=await Latest.find();
        res.status(200).send(getAll)
    }
    catch(err){
        res.status(500).send(err);
    }
  
})
//get one
router.get("/:id",async(req,res)=>{
    try{
        const getOne=await  Latest.findById(req.params.id)
        res.status(201).send(getOne);

    }catch(err){
        res.status(500).send(err);
    }
})
module.exports=router;