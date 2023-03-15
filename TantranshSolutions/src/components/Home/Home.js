import React from 'react'
import './Home.css'
import Cont1Img from '../../assets/Cont2Img.png'
import Image1 from '../../assets/Image3.png'
import Image2 from '../../assets/Image4.png'
import { BsPen } from "react-icons/bs";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { BsPuzzle } from "react-icons/bs";
import { FiBox } from "react-icons/fi";
import {Link} from 'react-router-dom'
import cardImg1 from '../../assets/CardImg1.png'
import cardImg2 from '../../assets/CardImg2.png'
import cardImg3 from '../../assets/CardImg3.png'
import cardImg4 from '../../assets/CardImg4.png'
// import Logo1 from '../../assets/Logo1.png'
// import Logo2 from '../../assets/Logo2.png'
// import Logo3 from '../../assets/Logo3.png'
// import Logo4 from '../../assets/Logo4.png'
// import Logo5 from '../../assets/Logo5.png'
// import Logo6 from '../../assets/Logo6.png'
// import Logo7 from '../../assets/Logo7.png'
// import Logo8 from '../../assets/Logo8.png'
// import ProfileImg1 from '../../assets/ProfileImg1.jpg'
// import {RiDoubleQuotesL } from "react-icons/ri";


// import HomeContainer8 from './HomeContainer8'

const Home = () => {
  return (
    <>
      {/* First container */}
      <div className='container mt-3 mt-sm-5 mt-md-5'>
        <div className='row'>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 mt-md-5 justify-content-center d-flex align-items-center'>
            <div className='HomeContent mt-5 mt-sm-5 pt-sm-3 pt-4 mt-md-0' style={{width:"30rem"}}>
              <h1 className='HomeTitle text-capitalize' style={{color:"#034694"}}>Elevate your business to the next level</h1>
              <p className='HomePara text-muted'>Unlock the full potential of your brand with our innovative approach to idea generation and brand building, designed to help your business stand out and succeed in today's competitive market.</p>
              <Link to='/contact-us'><button className='Home-btn'>Connect With Us</button></Link>
            </div>
          </div>
          
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 mt-5'>
              <img className='img-fluid effect mt-md-4' src={Cont1Img} alt="Home-Main-Img"/>
          </div>
        </div>
      </div>



      {/* Second Container */}
      <div className='container mt-0 mt-sm-5'>
        <div className='row'>
          <div className='col-12 col-lg-6 col-md-6 col-xl-6 d-flex justify-content-center align-items-center mt-5 '>
          <div style={{width:"30rem"}}>
              <h1 className='font-weight-bold' style={{color:"#034694"}}>Who we are?</h1>
              <p className='Home3text'>
              <span className='font-weight-bold' style={{fontSize:"22px", color:"#034694"}}>Tantransh Solutions </span>  
              is aspiring startup to provide modern communication and collaboration solutions for business. 
              Our products apply powerful technology that helps employees, partners and customers work better together. 
              Technology is changing rapidly in today’s business world which demands innovation, collaborative approach and 
              multidimensional integrations.
              </p>
            </div>
          </div>
          
          <div className='col-12 col-lg-6 col-md-6 col-xl-6 mt-xl-3'>
              <div className='d-flex justify-content-center mt-md-5'>
                <img src={Image1} className='img-fluid' alt="Image1"/>
              </div>
          </div>
        </div>
      </div>



      {/* Third Container */}
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-lg-6 col-md-6 col-xl-6 mt-5'>
            <div className='d-flex justify-content-center mt-md-5'>
              <img src={Image2} className='img-fluid' alt="Image1"/>
            </div>
          </div>
          <div className='col-12 col-lg-6 col-md-6 col-xl-6 mt-5 d-flex justify-content-center align-items-center'>
            <div style={{width:"30rem"}}>
              <h1 className='font-weight-bold' style={{color:"#034694"}}>Beyond Known Dimensions</h1> 
              <blockquote className='Home3text1'>
              Our approach is different than most because we take time to understand your business inside-and-out 
              before we make a single technology choice.
              </blockquote>
              <blockquote className='Home3text1'>
              The end product you're looking for maybe a Mobile app, Desktop application, Cross-platform application or a web application, but we know any technology is 
              just a means for making your business more intelligent, more efficient and ultimately more profitable.
              </blockquote>
            </div>
          </div>
        </div>
      </div>



      {/* Fourth Container */}
      <div className='container-fluid mt-5' >
        <h1 className='text-center font-weight-bold' style={{color:"#034694"}}>Why choose us?</h1>
        <div className='container'>
            <div className='row pb-5 justify-content-between'>
            
                <div className='col-12 col-lg-3 col-xl-3 col-md-6 mt-3 mt-sm-0 d-flex justify-content-center align-items-center' >
                  <div className="card text-center mt-lg-4 mt-md-4 hover-effect" style={{backgroundColor:"#034694"}}>
                    <div className="card-body d-flex justify-content-center flex-column align-items-center">
                      <div className='H4IconsStyle1 m-4'><BsPen style={{fontSize:"45px"}}/></div>
                      <h5 className="card-title text-uppercase text-white">we have experience</h5>
                      <p className="card-text text-white font-italic" style={{wordSpacing:"1.5px", letterSpacing:"0.4px"}}>We are a team of passionate and experienced software developers, designers, and project managers dedicated to delivering top-quality solutions to our clients.</p>
                    </div>
                  </div>
                </div>

                <div className='col-12 col-lg-3 col-xl-3 col-md-6 mt-4 mt-sm-0 d-flex justify-content-center align-items-center' >
                  <div className="card text-center mt-lg-4 mt-md-4 hover-effect" style={{backgroundColor:"#034694"}}>
                    <div className="card-body d-flex justify-content-center flex-column align-items-center">
                      <div className='H4IconsStyle2 m-4'><RiLightbulbFlashLine style={{fontSize:"45px"}}/></div>
                      <h5 className="card-title text-uppercase text-white">our vision</h5>
                      <p className="card-text text-white font-italic" style={{wordSpacing:"1.5px", letterSpacing:"0.4px"}}>We believe that technology should serve people, not the other way around, and we strive to create software solutions that streamline operations & drive business growth.</p>
                    </div>
                  </div>
                </div>

                <div className='col-12 col-lg-3 col-xl-3 col-md-6 mt-4 mt-sm-0 d-flex justify-content-center align-items-center' >
                  <div className="card text-center mt-lg-4 mt-md-4 hover-effect" style={{backgroundColor:"#034694"}}>
                    <div className="card-body d-flex justify-content-center flex-column align-items-center">
                      <div className='H4IconsStyle3 m-4'><BsPuzzle style={{fontSize:"45px"}}/></div>
                      <h5 className="card-title text-uppercase text-white">best service</h5>
                      <p className="card-text text-white font-italic" style={{wordSpacing:"1.5px", letterSpacing:"0.4px"}}>We pride ourselves on our attention to detail, commitment to quality & exceptional customer service, which earned us a reputation as a trusted partner for businesses of all sizes.</p>
                    </div>
                  </div>
                </div>

                <div className='col-12 col-lg-3 col-xl-3 col-md-6 mt-4 mt-sm-0 d-flex justify-content-center align-items-center' >
                  <div className="card text-center mt-lg-4 mt-md-4 hover-effect" style={{backgroundColor:"#034694"}}>
                    <div className="card-body d-flex justify-content-center flex-column align-items-center">
                      <div className='H4IconsStyle4 m-4'><FiBox style={{fontSize:"45px"}}/></div>
                      <h5 className="card-title text-uppercase text-white">our expertise</h5>
                      <p className="card-text text-white font-italic" style={{wordSpacing:"1.5px", letterSpacing:"0.4px"}}>Our areas of expertise include Web, Desktop, Mobile, and we are constantly expanding our knowledge and skills to stay at the forefront of the ever-evolving technology.</p>
                    </div>
                  </div>
                </div>

            </div>
        </div>
    </div>



    {/* Fifth Container */}
    <div className='container mt-5 mb-5'>
        <h1 className='text-center font-weight-bold' style={{color:"#034694"}}>Our Services</h1>
        <div className='row mt-0 mt-sm-4'>

          <div className="col-12 col-lg-3 col-xl-3 col-md-6 mt-3 mt-sm-0 d-flex justify-content-center align-items-center">
              <div className="card HomeCard5">
                  <img className="card-img-top img-fluid" src={cardImg1} alt=""/>
                  <div className="card-body HomeCard5Body">
                      <h4 className="card-title text-center text-white">Web Solutions</h4>
                      <p className="card-text text-white">With the increasing importance of the internet in today's digital landscape, having a strong web presence is essential for any business looking to remain competitive and successful.</p>
                      <p><Link className='redirect text-white' to='/'>Explore</Link></p>
                  </div>
              </div>
          </div>


          <div className="col-12 col-lg-3 col-xl-3 col-md-6 mt-3 mt-sm-0 d-flex justify-content-center align-items-center">
              <div className="card HomeCard5">
                  <img className="card-img-top img-fluid" src={cardImg2} alt=""/>
                  <div className="card-body HomeCard5Body">
                      <h4 className="card-title text-center text-white">Software Development</h4>
                      <p className="card-text text-white">We use range of programming languages, frameworks, and tools to build everything from simple desktop applications to complex enterprise systems.</p>
                      <p><Link className='redirect text-white' to='/'>Explore</Link></p>
                  </div>
              </div>
          </div>
          
          <div className="col-12 col-lg-3 col-xl-3 col-md-6 mt-3 mt-sm-0 d-flex justify-content-center align-items-center">
              <div className="card HomeCard5 mt-0 mt-md-4 mt-lg-0">
                  <img className="card-img-top img-fluid" src={cardImg3} alt=""/>
                  <div className="card-body HomeCard5Body">
                      <h4 className="card-title text-center text-white">System Programming</h4>
                      <p className="card-text text-white">We develope software that operates at a low-level, directly interacting with computer hardware and system resources.</p>
                      <p><Link className='redirect text-white' to='/'>Explore</Link></p>
                  </div>
              </div>
          </div>
          
          <div className="col-12 col-lg-3 col-xl-3 col-md-6 mt-3 mt-sm-0 d-flex justify-content-center align-items-center">
              <div className="card HomeCard5  mt-0 mt-md-4 mt-lg-0">
                  <img className="card-img-top img-fluid" src={cardImg4} alt=""/>
                  <div className="card-body HomeCard5Body">
                      <h4 className="card-title text-center text-white">Mobile Development</h4>
                      <p className="card-text text-light">Develope apps for various mobile operating systems, including iOS and Android, using specialized programming languages and tools.</p>
                      <p><Link className='redirect text-white' to='/'>Explore</Link></p>
                  </div>
              </div>
          </div>
            
        </div> 
    </div>



    {/* Sixth Container */}
    {/* <div className='mt-5 container-fluid'>
        <h1 className='text-center pt-5'>Our Esteemed Clients</h1>
        <div className='d-flex justify-content-center'>
            <hr className='w-25'  style={{position:"relative", bottom:"15px", border:"2px solid #ffffff"}}/>
        </div>
        <div className='container slider'>
            <div className='scroll'>
                <img src={Logo1} alt=""/>
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo4} alt="" />
                <img src={Logo5} alt="" />
                <img src={Logo6} alt="" />
                <img src={Logo7} alt="" />
                <img src={Logo8} alt="" />
            </div>
            <div className='scroll'>
                <img src={Logo1} alt=""/>
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo4} alt="" />
                <img src={Logo5} alt="" />
                <img src={Logo6} alt="" />
                <img src={Logo7} alt="" />
                <img src={Logo8} alt="" />
            </div>
        </div>
    </div> */}



    {/* Seventh Container */}
    {/* <div className='container mt-5 mb-5'>
      <h1 className='text-center mb-4'>Meet Our Team</h1>
      <div className='row d-flex justify-content-center align-items-center'>
        
        <div className="col-12 col-lg-3 col-xl-3 col-md-6 mt-3 mt-sm-0 d-flex justify-content-center align-items-center">
          <div className="card mt-4">
            <div className="card-body text-center">
              <div className='mt-3'><img className='rounded-circle shadow-1-strong' src={ProfileImg1} alt=""  width="150" height="150"/></div>
              <div className='mt-3' style={{lineHeight:"15px"}}>
                <p style={{fontSize:"20px", fontWeight:"500"}}>Hardik Pandya</p>
                <p className='text-primary'>Employee</p>
              </div>
              <div><p className="card-text font-italic text-muted" style={{wordSpacing:"2px"}}><RiDoubleQuotesL/> At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.</p></div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-3 col-xl-3 col-md-6 mt-3 mt-sm-0 d-flex justify-content-center align-items-center">
          <div className="card mt-4">
            <div className="card-body text-center">
              <div className='mt-3'><img className='rounded-circle shadow-1-strong' src={ProfileImg1} alt=""  width="150" height="150"/></div>
              <div className='mt-3' style={{lineHeight:"15px"}}>
                <p style={{fontSize:"20px", fontWeight:"500"}}>Hardik Pandya</p>
                <p className='text-primary'>Employee</p>
              </div>
              <div><p className="card-text font-italic text-muted" style={{wordSpacing:"2px"}}><RiDoubleQuotesL/> At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.</p></div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-3 col-xl-3 col-md-6 mt-3 mt-sm-0 d-flex justify-content-center align-items-center">
          <div className="card mt-4">
            <div className="card-body text-center">
              <div className='mt-3'><img className='rounded-circle shadow-1-strong' src={ProfileImg1} alt=""  width="150" height="150"/></div>
              <div className='mt-3' style={{lineHeight:"15px"}}>
                <p style={{fontSize:"20px", fontWeight:"500"}}>Hardik Pandya</p>
                <p className='text-primary'>Employee</p>
              </div>
              <div><p className="card-text font-italic text-muted" style={{wordSpacing:"2px"}}><RiDoubleQuotesL/> At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.</p></div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-3 col-xl-3 col-md-6 mt-3 mt-sm-0 d-flex justify-content-center align-items-center">
          <div className="card mt-4">
            <div className="card-body text-center">
              <div className='mt-3'><img className='rounded-circle shadow-1-strong' src={ProfileImg1} alt=""  width="150" height="150"/></div>
              <div className='mt-3' style={{lineHeight:"15px"}}>
                <p style={{fontSize:"20px", fontWeight:"500"}}>Hardik Pandya</p>
                <p className='text-primary'>Employee</p>
              </div>
              <div><p className="card-text font-italic text-muted" style={{wordSpacing:"2px"}}><RiDoubleQuotesL/> At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.</p></div>
            </div>
          </div>
        </div>




      </div>
    </div> */}
    </>
  )
}

export default Home