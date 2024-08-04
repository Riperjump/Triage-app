const express=require('express');
const router=express.Router()
const Patient=require('../db/Patients')

router.get('/',async (req,res)=>{
    try {
        const patients = await Patient.findAll();
        res.json(patients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports=router;