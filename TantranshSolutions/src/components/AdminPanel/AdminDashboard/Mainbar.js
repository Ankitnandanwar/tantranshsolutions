import React,{useState, useEffect} from 'react'
import adminProfile from "../../../assets/ProfileImg1.jpg"
import axios from "axios"
const Mainbar = () => {

  // var d =new Date("2022, 7, 17")
  // let dt = d.toLocaleDateString()

  const [profilename, setProfileName] = useState('')
  const [profileDesignation, setProfileDesignation] = useState('')
  const [profileAddr, setProfileAddr] = useState('')
  const [profilePhoto, setProfilePhoto] = useState('')
  const [prdata, setPrData] = useState([])

  const handleupdate = async () =>{
      let formData = new FormData()
      formData.append("profilename", profilename)
      formData.append("designation", profileDesignation)
      formData.append("profileaddr", profileAddr)
      formData.append("file", profilePhoto)

      const config = {
        headers : {
          "Content-Type":"multipart/form-data"
        }
      }

      const res = await axios.post("http://localhost:6500/adminprofile", formData, config)
      console.log(res)
  }

  const getUserData = async() =>{
    const res = await axios.get("/adminprofile",{
      headers:{
        "Content-Type" : "application/json"
      }
    })
    if(res.status === 201){
      console.log("data get")
      setPrData(res.data)
    }else{
      console.log("error")
    }
  }

  useEffect(() => {
    getUserData()
  }, [])
  

  return (
    <>
      <div className='container mt-5'>
        <h2 className='text-center text-primary'>Welcome to Tantransh Admin Dashboard</h2>
        <div className='row'>

          <div className='col-12 col-lg-4 col-xl-4 col-md-12 mt-5 d-flex justify-content-center'>
            <div className="card d-flex align-items-center p-3" style={{width:"18rem"}}>
              <img className="card-img-top rounded-circle w-50 mt-2" src={adminProfile} alt="profileimg"/>
              <div className="card-body text-center" style={{lineHeight:"10px"}}>
                <h5 className="card-title">Diksha Pardhi</h5>
                <p className="card-text text-muted mt-3" style={{fontSize:"15px"}}>Human Resources (HR)</p>
                <p className='card-text text-muted' style={{fontSize:"15px"}}>Nagpur Maharashtra</p>
              </div>
            </div>
          </div>

          <div className='col-lg-8 col-xl-8 col-md-12 mt-5'>
            <h3 style={{color:"#4CBB17"}}>Edit Profile</h3>
            <div className="row">
              <div className="ml-2 mt-2 col">
                <label>Profile Name</label>
                <input className="form-control"  type='text' required={true} placeholder='Enter Profile Name' onChange={(e) => setProfileName(e.target.value)} name='profilename' autoComplete="off"></input>
              </div>

              <div className="ml-2 mt-2 col">
                <label>Designation</label>
                <input className="form-control"  type='text' required={true} placeholder='Enter Designation' onChange={(e) => setProfileDesignation(e.target.value)} name='designation' autoComplete="off"></input>
              </div>
            </div>

            <div className="row">
              <div className="ml-2 mt-4 col">
                <label>Address</label>
                <input className="form-control"  type='text' required={true} placeholder='Enter Address' onChange={(e) => setProfileAddr(e.target.value)} name='profileaddr' autoComplete="off"></input>
              </div>

              <div className="ml-2 mt-4 col">
                <label className="text-capitalize">upload profile img</label>
                <input type="file" name="file" required={true} className="form-control-file" onChange={(e) => setProfilePhoto(e.target.files[0])} id="exampleFormControlFile1"/>
              </div>
            </div>

            <div className='text-center mt-5'>
              <button type="submit" className="btn text-white" onClick={() => handleupdate()} style={{backgroundColor:"#4CBB17"}}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Mainbar