import React ,{useEffect,useState}from 'react'
import axios from 'axios';
const Dashboard = () => {
    const [datas,setData] = useState([])
    useEffect(() => {
     let data = axios.get('http://localhost:6500/userdetails').then((res)=>{
       
        setData(res.data)
        console.log(datas)
     })
    
     
    }, [])
    
  return (
   <>
<table className="table">
  <thead>
    <tr className='text-center'>
      <th scope="col">Sr No.</th>
      <th scope="col">Name</th>
      <th scope="col">Email Id</th>
      <th scope="col">Phone No</th>
      <th scope="col">Position Applying For</th>
      <th scope="col">Message</th>
      <th scope="col">Resume(Attachment)</th>
    </tr>
  </thead>
  <tbody>
    {
      datas.map((i)=>(
        <tr className='text-center'>
        <td>{i.uid}</td>
        <td>{i.uname}</td>
        <td>{i.uemail}</td>
        <td>{i.ucontact}</td>
        <td>{i.uposition}</td>
        <td>{i.umessage}</td>
        <td><a href={`${i.uploadfiles}`}>{i.uploadfiles}</a></td>
        </tr>
      ))
    }
  </tbody>
</table>
   </>
  )
}

export default Dashboard;