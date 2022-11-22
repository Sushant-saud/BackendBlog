const router=require("express").Router();
const LatestArticle=require('../Models/LatestArticle');
router.post("/",async(req,res)=>{
   const newLatestarticle=new LatestArticle(req.body);
   try
   {
    const savedLatestarticle=await newLatestarticle.save();
    res.status(201).send(savedLatestarticle);

   }catch(err){
    res.status(500).send(err);
   }
})
//get all
router.get("/",async(req,res)=>{
    try{
        const getAll=await LatestArticle.find();
        res.status(200).send(getAll)
    }
    catch(err){
        res.status(500).send(err);
    }
  
})
//get one
router.get("/:id",async(req,res)=>{
    try{
        const getOne=await  LatestArticle.findById(req.params.id)
        res.status(201).send(getOne);

    }catch(err){
        res.status(500).send(err);
    }
})
module.exports=router;