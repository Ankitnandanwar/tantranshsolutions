import React from 'react'
import aboutFirst from '../../assets/aboutFirst.jpg'
import teamImg1 from '../../assets/teamImg1.jpg'

import './about.css'
const About = () => {

    return (
        <>
            <div className='container mt-5 pt-5 '>
                <div className=' row p-sm-5'>
                    <div className='aboutData col-12 col-xl-6 col-lg-6 col-md-12 mt-3'>
                        <div className='mx-0 mx-sm-5'><h1 style={{color:"#034694"}}>About</h1></div>
                        <div className='mx-0 mx-sm-5 mt-0 mt-sm-4 text-muted' style={{fontSize:"16px", wordSpacing:"1px", lineHeight:"30px"}}>
                            <p>Founded in 2016, Tantransh Solutions is a software development company committed to delivering top-quality solutions to our clients. 
                            We specialize in developing customized software that meets the specific needs of businesses in a wide range of industries.</p>
                            <p>At Tantransh Solutions, we believe that technology should serve people, not the other way around.
                            That's why our team of experienced developers, designers, and project managers work closely with our clients to understand their
                            unique needs and create software solutions that streamline their operations and drive business growth.</p>
                        </div>
                    </div>
                    <div className='col-12 col-xl-6 col-lg-6 col-md-12 mt-3' >
                        <img className='img-fluid imgCss' src={aboutFirst} alt='first' />
                    </div>
                </div>

                {/* ---------- */}
                <div className='row p-sm-5 mt-5 mt-sm-0'>
                    <div className='col-12 col-xl-6 col-lg-6 col-md-12 mt-3' >
                        <img className='img-fluid imgCss' src={teamImg1} alt='second'/>                   
                    </div>

                    <div className='aboutData col-12 col-xl-6 col-lg-6 col-md-12 mt-3'>
                        <div className='mx-0 mx-sm-5'><h1 style={{color:"#034694"}}>Our Team</h1></div>
                        <div className='mx-0 mx-sm-5 mt-0 mt-sm-4 text-muted' style={{fontSize:"16px", wordSpacing:"1px", lineHeight:"30px"}}>
                            <p>Our expertise extends to a wide range of programming languages, platforms, and technologies, allowing us to provide our clients with the latest and most innovative software solutions.</p>
                            <p>We pride ourselves on delivering projects on time and within budget, without ever compromising on quality.
                            Our success is built on the trust and satisfaction of our clients. We are committed to building long-term relationships with our clients by providing exceptional service and support throughout the development process and beyond.</p>
                            <p>Get in touch with us today to see how we can help you take your business to the next level with our software development expertise.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
