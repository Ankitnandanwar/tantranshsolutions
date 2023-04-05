import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import TantranshLogo from '../../assets/Tantransh-Logo.png'
import './Navbar.css'


const Navbar = () => {

  useEffect(() => {
    window.scrollTo(0,0);
    }, []);
 
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-white bg-white">
        <div className='container'>
          <Link className="navbar-brand" to='/'><img src={TantranshLogo} alt="" className='img-fluid' width={"145px"}/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto text-center" style={{gap:"1rem", fontSize:"16.5px"}}>
              <li className="nav-item"><Link className="nav-link navigation-link" style={{color:"#034694", fontWeight:"500"}} to='/'>Home</Link></li>
              <li className="nav-item"><Link className="nav-link navigation-link" style={{color:"#034694", fontWeight:"500"}} to='/about'>About</Link></li>
              {/* <li><button onClick={()=>{navigate("/about")}}>About</button></li> */}
              {/* <Link to="/about">About</Link> */}
              <li className="nav-item"><Link className="nav-link navigation-link" style={{color:"#034694", fontWeight:"500"}} to='/carrers'>Careers</Link></li>
              {/* <li className="nav-item dropdown"><Link className="nav-link display-4 dropdown-toggle" to='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Carrers</Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to='/'>React Js</Link>
                  <Link className="dropdown-item" to='/'>Python</Link>
                </div>
              </li> */}
              <li className="nav-item"><Link className="nav-link navigation-link" style={{color:"#034694", fontWeight:"500"}} to='/contact-us'>Contact</Link></li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar