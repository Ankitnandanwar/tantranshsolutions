import React,{useState,useEffect} from 'react'
import LeftSidebar from './LeftSidebar'
import "./AdminPanel.css"
import NavbarAdmin from './NavbarAdmin'
import axios from "axios"
// import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom'


const PostJobDashboard = () => {
  

  const [postData, setPostData] = useState([])

    useEffect(() => {
        let data = axios.get('http://localhost:6500/addnewjob').then((res)=>{
        setPostData(res.data)
        console.log(postData)
     })
    }, [])

    const deleteJobPost = async (pjid) =>{
    
      if(window.confirm("Are you sure you want to delete this post ?")===true){
        axios.delete(`http://localhost:6500/addnewjob/${pjid}`)
        window.location.reload()
        // toast.success("Post deleted successfully")
      }

    }
  

  return (
    <div className='AdminDashboard'>
        <LeftSidebar/>
        <div className='HomeContainerAdmin'>
          <NavbarAdmin/>
          <div className="listContainer">
                <div className="listTitle d-flex justify-content-between">
                  <h4>Current Hiring Post</h4>
                  <Link to="/jobpost-dashboard"><button style={{ backgroundColor:" #4CBB17", fontWeight:"500", color:"white", border:"none", padding:"8px"}}>Add New Hiring Post</button></Link>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col" className='text-center'>Sr No.</th>
                        <th scope="col" className='text-center'>Title</th>
                        <th scope="col" className='text-center'>Skills</th>
                        <th scope="col" className='text-center'>Language</th>
                        <th scope="col" className='text-center'>Experience</th>
                        <th scope="col" className='text-center'>Vacancy</th>
                        <th scope="col" className='text-center'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                      postData.map((i)=>(
                      <tr>
                      <td className='text-center'>{i.pjid}</td>
                      <td className='text-center'>{i.pjtitle}</td>
                      <td className='text-center'>{i.pjskills}</td>
                      <td className='text-center'>{i.pjlang}</td>
                      <td className='text-center'>{i.pjexp}</td>
                      <td className='text-center'>{i.pjvacancy}</td>
                      <td><button className='ml-2 bg-white' style={{border:"none", color:"red"}} onClick={()=>deleteJobPost(i.pjid)}>{<MdDelete style={{fontSize:"22px"}}/>}</button></td>
                      </tr>
                      ))
                    }
                    </tbody>
                </table>
            </div>  
        </div>
    </div>
  )
}

export default PostJobDashboard