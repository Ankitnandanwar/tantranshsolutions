import express from "express"
import cors from "cors"
import mysql from "mysql"
import multer from "multer"
// import path from "path"
import moment from "moment"

const app = express()
const Port = 6500

const db = mysql.createConnection({
    user:"tantransh",
    password:"tantransh",
    host:"localhost",
    database:"tantransh_solution"
})
if(db){
    console.log("connected to mysql")
}else{
    console.log("not connected to mysql")
}

app.use(express.json())
app.use(cors())
app.use("/uploads", express.static("./uploads"))


app.get("/", (req,res)=>{
    res.json("Welcome to Tantransh Backend")
})





// file uploading using multer package
const imgConfig = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads")
      
    },
    filename: function (req, file, cb) {
      cb(null, `file-${Date.now()}.${file.originalname}`);
    }
})

// img filter 
const isImage = (req,file,cb)=>{
    if(file.mimetype.startsWith("image")){
        cb(null,true)
    }else{
        cb(null, Error("only image is allowed"))
    }
}

const adminupload = multer({storage:imgConfig, fileFilter:isImage})

const upload = multer({storage:imgConfig})
  


// create user details using post method
app.post("/userdetails", upload.single("file"), (req,res)=>{
    console.log(req.file)
    console.log(req.body)
    
    const {Username, Email, Phone, Position, Message} = req.body;

    const {filename} = req.file;

    if(!filename){
        res.status(422).json({status:422, message:"fill all the details"})
    }


    try {
        let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
        db.query("INSERT INTO userdetails SET ?", {uname:Username, uemail:Email, ucontact:Phone, uposition:Position, umessage:Message, uploadfiles:filename, date:date},(err,result)=>{
            if(err){
                console.log("error")
            }else{
                console.log("user added successfully")
                res.status(201).json({status:201, data:req.body})
            }
        })
    } catch (error) {
        res.status(422).json({status:422, error})
    }
})

// see user details using get method
app.get("/userdetails", (req,res)=>{
    const q = "SELECT * FROM userdetails"
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

// view each user resume file using id
app.get("/userdetails/:uid",(req,res)=>{
    const usid = req.params.uid
    const q = "SELECT uploadfiles FROM userdetails WHERE uid = ?"
    db.query(q, [usid], (err,result)=>{
        if(err) return res.json(err)
        return res.json(result)
    })
})


// delete a particular user details using delete method
app.delete("/userdetails/:uid", (req,res)=>{
    const postid = req.params.uid
    const q = " DELETE FROM userdetails WHERE uid = ?";
    db.query(q, [postid], (err)=>{
        if(err) return res.json(err)
        return res.json("user detail has been deleted successfully")
    })
})









// Join two tables
app.get("/jointables", (req,res)=>{
    const q = "SELECT `uname`, `uemail`, `ucontact`, `uposition`, `resume_files` FROM userdetails JOIN upload_files ON userdetails.uid = upload_files.uid"
    db.query(q,[req.params.id], (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
        // console.log(data?.RowDataPacket?.uname)
    })
})








// authentication of admin panel
app.post("/adminlogin", (req,res)=>{
    const q = "SELECT * FROM admin_panel WHERE username = ? AND password = ?";
    
    db.query(q, [req.body.name, req.body.password], (err,data)=>{
        if(err) return res.json(err) 
        if(data.length > 0) return res.json({status:200, message:"login success"})
        return res.json({status:400, message:"not matched"})
    })

})


// post a new job in admin panel
app.post("/addnewjob", (req,res)=>{
    const q ="INSERT INTO post_job (`pjtitle`, `pjskills`, `pjlang`, `pjexp`, `pjvacancy`) VALUES (?)"
    const values =[
        req.body.pjtitle,
        req.body.pjskills,
        req.body.pjlang,
        req.body.pjexp,
        req.body.pjvacancy,
    ];

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("new job post is been added")
    })
})


// view all job post details
app.get("/addnewjob", (req,res)=>{
    const q = "SELECT * FROM post_job"
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


// delete a particular job post using delete method
app.delete("/addnewjob/:pjid", (req,res)=>{
    const postid = req.params.pjid
    const q = " DELETE FROM post_job WHERE pjid = ?";
    db.query(q, [postid], (err)=>{
        if(err) return res.json(err)
        return res.json("post has been deleted successfully")
    })
})





// Update admin Profile using post method
app.post("/adminprofile",adminupload.single("file"), (req,res)=>{
    console.log(req.file)
    console.log(req.body)

    const {ProfileName, Designation, Address} = req.body;
    const {filename} = req.file;

    if(!filename){
        res.status(422).json({status:422, message:"fill all details"})
    }
    try {
        db.query("INSERT INTO dashboardprofile SET ?", {prname:ProfileName, prdesig:Designation, praddr:Address, primg:filename}, (err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log("profile data and image added successfully")
                res.status(201).json({status:201, data:req.body})
            }
        })
        
    } catch (error) {
        res.status(422).json({status:422, error})
    }
})

// View admin profile details
app.get("/adminprofile", (req,res)=>{
    const q = "SELECT * FROM dashboardprofile"
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})













app.listen(Port, ()=>{
    console.log("Connected to server")
})