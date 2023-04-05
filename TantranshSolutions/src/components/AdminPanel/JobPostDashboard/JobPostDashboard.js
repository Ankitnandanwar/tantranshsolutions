import React,{useState} from 'react'
import "../AdminPanel.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const JobPostDashboard = () => {

  const [title, setTitle] = useState('')
  const [skills, setSkills] = useState('')
  const [lang, setLang] = useState('')
  const [exp, setExp] = useState('')
  const [vacancy, setVacancy] = useState('')
  const navigate = useNavigate()


  const handlesubmit = async () =>{
    
      // let data = await axios.get("http://localhost:6500/gettintest");
      // console.log(data.data)
      if(title && skills && lang && exp && vacancy){
        let data = await axios.post("http://localhost:6500/addnewjob",{
          pjtitle:title,
          pjskills:skills,
          pjlang:lang,
          pjexp:exp,
          pjvacancy:vacancy,
      })
      console.log(data)
      console.log(title,skills,lang,exp,vacancy)
      navigate('/view-jobpost-dashboard')
      }else{
        alert("Enter all fields to proceed")
      }
    }
      

  
  return (
        <div>
          <AdminNavbar/>
          <div className="container mt-5">
            <h3 className='p-3'>Add New Hiring Post</h3>
                <div className="form-row pl-0 pl-sm-5 pr-0 pr-sm-5">
                    <div className="form-group col-xl-6 pt-3 pt-sm-0 pl-3 pl-sm-0 pr-3 pr-sm-0 pl-xl-3 pr-xl-3 pt-xl-3 ">
                        <label htmlFor="">Enter Job title</label>
                        <input type="text" name='title' required className="form-control px-3 p-2" placeholder="Enter Job title" onChange={(e) => setTitle(e.target.value)} autoComplete='off'/>
                    </div>
                    <div className="form-group col-xl-6 pt-3 pt-sm-0 pl-3 pl-sm-0 pr-3 pr-sm-0 pl-xl-3 pr-xl-3 pt-xl-3">
                        <label htmlFor="">Enter Skills required</label>
                        <input type="text" name='skills' required className="form-control px-3 p-2" placeholder="Enter Skills required" onChange={(e) => setSkills(e.target.value)} autoComplete='off'/>
                    </div>
                    <div className="form-group col-xl-6 pt-3 pt-sm-0 pl-3 pl-sm-0 pr-3 pr-sm-0 pl-xl-3 pr-xl-3 pt-xl-3">
                        <label htmlFor="">Enter Language required</label>
                        <input type="text" name='language' required className="form-control px-3 p-2" placeholder="Enter Language required" onChange={(e) => setLang(e.target.value)} autoComplete='off'/>
                    </div>
                    <div className="form-group col-xl-6 pt-3 pt-sm-0 pl-3 pl-sm-0 pr-3 pr-sm-0 pl-xl-3 pr-xl-3 pt-xl-3">
                        <label htmlFor="">Enter Experience details</label>
                        <input type="text" name='experience' required className="form-control px-3 p-2" placeholder="Enter Experience details" onChange={(e) => setExp(e.target.value)} autoComplete='off'/>
                    </div>
                    <div className="form-group col-xl-6 pt-3 pt-sm-0 pl-3 pl-sm-0 pr-3 pr-sm-0 pl-xl-3 pr-xl-3 pt-xl-3">
                        <label htmlFor="">Enter Vacancy</label>
                        <input type="text" name='experience' required className="form-control px-3 p-2" placeholder="Enter vacancy details" onChange={(e) => setVacancy(e.target.value)} autoComplete='off'/>
                    </div>
                    <div className="form-group col-xl-12 pt-3 pt-sm-0 pl-3 pl-sm-0 pr-3 pr-sm-0 pl-xl-3 pr-xl-3 pt-xl-3 d-flex justify-content-center">
                        <button className="btn p-2 text-white" onClick={() => handlesubmit()} style={{ backgroundColor:" #4CBB17", fontWeight:"500"}}>Add Job</button>
                    </div>
                </div>
          </div>
        </div>
  )
}

export default JobPostDashboard