import React from 'react'
import carrersImg from '../../assets/CarrersImg.jpg'
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import './Carrers.css'


const Carrers = () => {

  const navigate = useNavigate()
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

          <div className='col-12 col-lg-4 col-xl-4 col-md-6 mt-4'>
            <div className="card mb-3 box-effect" style={{maxwidth: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title text-capitalize ">Android Developer</h5>
                  <div className='mt-4 text-muted' style={{lineHeight:"13px", fontSize:"16px"}}>
                    <p className="card-text line-height-res">Required Skills : Communication Skills, Quick Learner</p>
                    <p className="card-text">Required Language : Kotlin, Java</p>
                    <p className="card-text line-height-res">Experience : Fresher / Experience both can apply</p>
                    <p className="card-text">Vacancy : 2</p>
                  </div>
                </div>
                <div className=" bg-transparent">
                  <div className='d-flex justify-content-center pl-3 pr-3'><hr  className='w-100'/></div>
                    <div className="bottomButtonHover pb-3">
                      <button onClick={() => navigate("/apply-now")}>
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


          
          

          <div className='col-12 col-lg-4 col-xl-4 col-md-6 mt-4'>
            <div className="card mb-3 box-effect" style={{maxwidth: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title text-capitalize ">React Js Developer</h5>
                  <div className='mt-4 text-muted' style={{lineHeight:"13px", fontSize:"16px"}}>
                    <p className="card-text line-height-res">Required Skills : Communication Skills, Quick Learner</p>
                    <p className="card-text">Required Language : JavaScript, CSS, HTML</p>
                    <p className="card-text line-height-res">Experience : Fresher / Experience both can apply</p>
                    <p className="card-text">Vacancy : 3</p>
                  </div>
                </div>
                <div className=" bg-transparent">
                  <div className='d-flex justify-content-center pl-3 pr-3'><hr  className='w-100'/></div>
                    <div className="bottomButtonHover pb-3">
                      <button onClick={() => navigate("/apply-now")}>
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



          <div className='col-12 col-lg-4 col-xl-4 col-md-6 mt-4'>
            <div className="card mb-3 box-effect" style={{maxwidth: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title text-capitalize ">C# Developer</h5>
                  <div className='mt-4 text-muted' style={{lineHeight:"13px", fontSize:"16px"}}>
                    <p className="card-text line-height-res">Required Skills : Communication Skills, Quick Learner</p>
                    <p className="card-text">Required Language : .net, c#</p>
                    <p className="card-text line-height-res">Experience : Fresher / Experience both can apply</p>
                    <p className="card-text">Vacancy : 4</p>
                  </div>
                </div>
                <div className=" bg-transparent">
                  <div className='d-flex justify-content-center pl-3 pr-3'><hr  className='w-100'/></div>
                    <div className="bottomButtonHover pb-3">
                      <button onClick={() => navigate("/apply-now")}>
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


          <div className='col-12 col-lg-4 col-xl-4 col-md-6 mt-4'>
            <div className="card mb-3 box-effect" style={{maxwidth: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title text-capitalize ">Manual Tester</h5>
                  <div className='mt-4 text-muted' style={{lineHeight:"13px", fontSize:"16px"}}>
                    <p className="card-text line-height-res">Required Skills : Communication Skills, Quick Learner</p>
                    <p className="card-text">Required Language : Buigzilla , Jira</p>
                    <p className="card-text line-height-res">Experience : Fresher / Experience both can apply</p>
                    <p className="card-text">Vacancy : 3</p>
                  </div>
                </div>
                <div className=" bg-transparent">
                  <div className='d-flex justify-content-center pl-3 pr-3'><hr  className='w-100'/></div>
                    <div className="bottomButtonHover pb-3">
                      <button onClick={() => navigate("/apply-now")}>
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

          

          
        </div>
      </div>
    </>
  )
}

export default Carrers