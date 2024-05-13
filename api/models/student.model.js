import mongoose from 'mongoose';

const Schema=mongoose.Schema;

const studenSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    scheme:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }

});

const Student=mongoose.model('Student',studenSchema);

export default Student;

