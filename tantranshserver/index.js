import express from "express"
import cors from "cors"
import mysql from "mysql"
import multer from "multer"


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
app.get("/", (req,res)=>{
    res.json("Welcome to Tantransh Backend")
})


// upload files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../tantranshserver/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })



const upload = multer({storage})
app.post('/upload', upload.single('file'), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename)
  })




// create user details using post method
app.post("/userdetails", (req,res)=>{
    const q ="INSERT INTO userdetails (`uname`, `uemail`, `ucontact`, `uposition`, `umessage`, `uploadfiles`) VALUES (?)"
    const values =[
        req.body.uname,
        req.body.uemail,
        req.body.ucontact,
        req.body.uposition,
        req.body.umessage,
        req.body.uploadfiles,
    ];

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("User has been created")
    })
})



// see user details using get method
app.get("/userdetails", (req,res)=>{
    const q = "SELECT * FROM userdetails"
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
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


app.listen(Port, ()=>{
    console.log("Connected to server")
})