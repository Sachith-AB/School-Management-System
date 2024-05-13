import Student from "../models/student.model.js";

export const test = (req,res,next)=>{
    res.json({message:'API is working..!'})
}

export const add = async (req,res,next) =>{
    const {name,age,gender,address,scheme,phoneNumber,email} = req.body;

    const newStudent = new Student({
        name,age,gender,address,scheme,phoneNumber,email
    })
    
        try{
            await newStudent.save();
            res.json('student added sucessfull')
        }
        catch(err){
            console.log(err);
        }
    
}

export const getStudents = async(req,res,next)=>{
    try{
        const student= await Student.find();
        res.json(student)
    }
    catch(err){
        console.log(err);
    }
        
}

export const updateStudent = async (req,res,next)=>{
    
    try{
        const updatedStudent = await Student.findByIdAndUpdate(req.params.studentId,{
            $set:{
                name:req.body.name,
                age:req.body.age,
                gender:req.body.gender,
                scheme:req.body.scheme,
                phoneNumber:req.body.phoneNumber,
                email:req.body.email
            }
        },{new:true});
         res.status(200).json({message:"Student has been updated",user:updatedStudent})
    }
    catch(err){
        console.log(err.message);
    }
}

export const deleteStudent = async (req,res,next) =>{
    try{
        const deletedStudent=await Student.findByIdAndDelete(req.params.studentId);
        res.status(200).json({message:"User has been deleted",user:deletedStudent})
    }
    catch(err){
        console.log(err.message);
    }
}

export const getStudent = async (req,res,next)=>{
    const student= await Student.findById(req.params.studentId);
    try{
        if(!student){
            return (404,"User not found");
        }
        res.status(200).json({user:student})
    }
    catch(err){
        console.log(err.message);
    }
}

