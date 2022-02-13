import express from 'express'
import connectdb from './db/connectdb.js'
import {join} from 'path'
import web from "./routes/web.js";

const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"; 

// database connection 
connectdb(DATABASE_URL);

app.use(express.urlencoded({extended: false}))

// static files
app.use('/student',express.static(join(process.cwd(), "public")))
app.use('/student/edit',express.static(join(process.cwd(), "public")))



// set template engine
app.set("view engine", "ejs");

// Load Routes
app.use("/student", web);

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})