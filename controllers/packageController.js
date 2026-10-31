const Package = require('../models/packageModel')


const getPackages = async(req,res)=>{
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (err) {
    res.status(500).json({error:err.message});
  }
};


const createPackage = async(req,res)=>{
  try {
    const {trackingId,status,destination}=req.body;
    const newPackage = new Package({trackingId,status,destination});
    const savedPackage = await newPackage.save();
    res.status(201).json(savedPackage);
  } catch (err) {
    res.status(400).json({error:err.message});
  }
}


const updatePackage = async(req,res)=>{
  try {
    const {trackingId,status,destination} = req.body;
    const updatedPackage = await Package.findByIdAndUpdate(req.params.id, {
      trackingId,status,destination
    },
    {
      new:true,runValidators:true}
    );
    if(!updatedPackage){
      return 
      res.status(404).json({error:'Package not found'});
    }
    res.status(200).json(updatedPackage);
  } catch (err) {
    res.status(400).json({error:err.message});
  }
}


const deletePackage = async(req,res)=>{
  try {
    const deletedPackage = await Package.findByIdAndDelete(req.params.id);
    if(!deletedPackage){
      return
      res.status(404).json({error:'Package not found'}); 
    }
    res.status(200).json({message:"Package Successfully deleted"});
  } catch (err) {
    res.status(500).json({error:err.message});
  }
};

module.exports={getPackages,createPackage,updatePackage,deletePackage};