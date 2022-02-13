import studentModel from "../models/student.js"

class StudentController {

    // Creating Record
    static createDoc = async (req , res) =>{
    //    console.log(req.body) 
       try{
           const {name, email, mobile} = req.body
           const doc = new studentModel({
               name: name,
               email: email,
               mobile: mobile
           })
        //  saving Doc
        const result = await doc.save()
           res.redirect("/student")

       }catch(error){
           console.log(error)
       }
    }

    // Showing All the record
    static getAllDoc = async (req,res) => {
        try {
             const result = await studentModel.find();
             res.render("partials/index", {data: result} )
        }catch (error){
            console.log(error)
        }
    }

    // Edit Record
    static editDoc = async (req,res) => {
        // console.log(req.params.id)
        try{
              const result = await studentModel.findById(req.params.id)
            //   console.log(result)
              res.render("partials/edit", {data: result})
        }catch (error){
           console.log(error)
        }
    }

    // Update Record
    static updateDocById = async (req,res) => {
        // console.log(req.params.id)
        // console.log(req.body)
        try{
             const result = await studentModel.findByIdAndUpdate(req.params.id, req.body)
             console.log(result)
             res.redirect("/student")
        }catch(error){
            console.log(error)
        }
    }

    // Delete Record
    static deleteDocById = async (req,res) => {
        // console.log(req.params.id)
        try{
            const result = await studentModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")
        }catch(error){
                console.log(error)
        }
    }
}

export default StudentController