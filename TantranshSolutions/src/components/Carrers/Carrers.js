import React,{useState,useEffect} from 'react'
import carrersImg from '../../assets/CarrersImg.png'
import { BsArrowRight } from "react-icons/bs";
import { useNavigate, createSearchParams } from 'react-router-dom';
import axios from 'axios';
import './Carrers.css'
import Slider from 'infinite-react-carousel';

const Carrers = () => {

  const [postData, setPostData] = useState([])
  const navigate = useNavigate()


    useEffect(() => {
        let data = axios.get('http://localhost:6500/addnewjob').then((res)=>{
        setPostData(res.data)
        console.log(postData)
     })
    }, [])

    const data = (title) =>{
      navigate({pathname:"/apply-now", search:createSearchParams({postData:title}).toString()})
    }

  return (
    <>
      {/* Carrer description and image */}
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-lg-6 col-xl-6 col-md-12 mt-5 d-flex justify-content-center align-items-center'>
            <div>
              <h1 className='text-capitalize' style={{color:"#034694"}}>start your carrer with us</h1>
              <p>Tantransh Solutions allows you to create your own identity. We encourage you to take ownership, handle unknowns, 
              cultivate learning attitude and grow with Prismatic.</p>
              <p>At Tantransh Solutions, we have a close knit team and we work just 
              like a family and take pride in solving problems for our customers across the globe.</p> 
              <p>If you have the passion to learn new things and work on challenging assignments, then share your resumes at <span className='font-weight-bold' style={{color:"#034694"}}>hrd@tantranshsolutions.com</span> and get on board with us.</p>
            </div>
          </div>
          <div className='col-12 col-lg-6 col-xl-6 col-md-12 mt-4'>
            <img src={carrersImg} alt="carrer-img" className='img-fluid' />
          </div>
        </div>
      </div>

      {/* We are hiring */}
      <div className='container mt-5 mb-5'>
        <div className='row'>
        <h1 className='text-uppercase text-center' style={{color:"#034694"}}>we are hiring for</h1>
          {/* <Slider slidesToShow={3}> */}
          {postData.map(card=>{
            return(
            <div className='col-12 col-lg-4 col-xl-4 col-md-6 mt-4'>
            <div className="card mb-3 box-effect" style={{maxwidth: "18rem"}}>
              <div className="card-body p-2">
                <h5 className="card-title text-capitalize">{card.pjtitle}</h5>
                <div className='mt-3 text-muted' style={{fontSize:"16px", lineHeight:"15px"}}>
                  <p className="card-text line-height-res" style={{lineHeight:"25px"}}>Required Skills : {card.pjskills}</p>
                  <p className="card-text">Required Language : {card.pjlang}</p>
                  <p className="card-text line-height-res">Experience : {card.pjexp}</p>
                  <p className="card-text">Vacancy : {card.pjvacancy}</p>
                </div>
              </div>
              <div className=" bg-transparent">
                <div className='d-flex justify-content-center pl-3 pr-3'><hr className='w-100'/></div>
                  <div className="bottomButtonHover pb-3">
                    <button onClick={() => data(card.pjtitle)}>
                      <div className='btm mx-1 row justify-content-end'>
                        <div className='col-auto px-1'>
                          Apply Now
                        </div>
                        <div className='col-auto m-0 p-0 iconHover3 '>
                          <BsArrowRight />
                        </div>
                      </div>
                    </button>
                  </div>
              </div>
            </div>
          </div>
          )})}
          {/* </Slider> */}
        </div>
      </div>
    </>
  )
}

export default Carrers