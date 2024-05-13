import Student from "../models/student.model.js";

export const test = (req,res,next)=>{
    res.json({message:'API is working..!'})
}

export const add = (req,res,next) =>{
    const name=req.body.name;
    const age=req.body.age;
    const gender=req.body.gender;
    const address=req.body.address;
    const schema=req.body.schema;
    const phoneNumber=req.body.phoneNumber;
    const email=req.body.genemail
}