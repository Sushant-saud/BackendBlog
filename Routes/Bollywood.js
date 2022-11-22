const router=require("express").Router();
const Bollywood=require('../Models/bollywood');
router.post("/",async(req,res)=>{
   const bollywood=new Bollywood(req.body);
   try
   {
    const savedbollywood=await bollywood.save();
    res.status(201).send(savedbollywood);

   }catch(err){
    res.status(500).send(err);
   }
})
//get all
router.get("/",async(req,res)=>{
    try{
        const getAll=await Bollywood.find();
        res.status(200).send(getAll)
    }
    catch(err){
        res.status(500).send(err);
    }
  
})
//get one
router.get("/:id",async(req,res)=>{
    try{
        const getOne=await  Bollywood.findById(req.params.id)
        res.status(201).send(getOne);

    }catch(err){
        res.status(500).send(err);
    }
})
module.exports=router;