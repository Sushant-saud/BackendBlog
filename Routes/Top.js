const router=require("express").Router();
const Top=require('../Models/Top');
router.post("/",async(req,res)=>{
   const newTops=new Top(req.body);
   try
   {
    const savedTop=await newTops.save();
    res.status(201).send(savedTop);

   }catch(err){
    res.status(500).send(err);
   }
})
//get all
router.get("/",async(req,res)=>{
    try{
        const getAll=await Top.find();
        res.status(200).send(getAll)
    }
    catch(err){
        res.status(500).send(err);
    }
  
})
//get one
router.get("/:id",async(req,res)=>{
    try{
        const getOne=await  Top.findById(req.params.id)
        res.status(201).send(getOne);

    }catch(err){
        res.status(500).send(err);
    }
})
module.exports=router;