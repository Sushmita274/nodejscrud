import  Mongoose from "mongoose";

// Defining Schema
const studentSchema = new Mongoose.Schema({
    name : {type: String, required: true, minlength: 4, maxlength: 25, trim:true},
    email : {type: String, lowercase: true, unique: true, required: true, trim:true},
    mobile : {type: Number, required: true, unique: true, trim:true, maxlength: 10 }
})

// Model
const studentModel = Mongoose.model("student", studentSchema)

export default studentModel