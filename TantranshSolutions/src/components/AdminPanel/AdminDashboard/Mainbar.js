import React from 'react'

const Mainbar = () => {

  var d =new Date("2022, 7, 17")
  let dt = d.toLocaleDateString()
  return (
    <div className='Mainbar'>
      <div className='mainbar-cont'>
        <h3>Welcome to Tantransh Solutions Admin Dashboard</h3>
      </div>
      <div className='mainbar2-cont'>
        <div className='mainbar3-cont'>
          <div className="profile">
            <div className='mainbar-img'>
              <img src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg" alt="" className='img-fluid'/>
            </div>
            <div className='mt-2'>
              <h4>Diksha Pardhi</h4>
              <p>Joined: {dt}</p>
            </div>
          </div>

          <div className="basicinfo">
            <h5>Basic Info</h5>
            <div className='basicinfo-1 mt-2'>
              <div style={{lineHeight:"6px"}}>
                <p className='text-muted'>Email</p>
                <p style={{fontWeight:"500"}}>hrd.tantranshsolutions@gmail.com</p>
              </div>
              <div style={{lineHeight:"6px"}}>
                <p className='text-muted'>Contact</p>
                <p style={{fontWeight:"500"}}>8799983741</p>
              </div>
              <div style={{lineHeight:"6px"}}>
                <p className='text-muted'>Website</p>
                <p style={{fontWeight:"500"}}>Tantransh Solutions</p>
              </div>
            </div>
            <h5>Department Info</h5>
            <div className='basicinfo-1 mt-2'>
              <div style={{lineHeight:"6px"}}>
                  <p className='text-muted'>Designation</p>
                  <p style={{fontWeight:"500"}}>Human Resource (HR)</p>
                </div>
                <div style={{lineHeight:"6px"}}>
                  <p className='text-muted'>Contact</p>
                  <p style={{fontWeight:"500"}}>8799983741</p>
                </div>
                <div style={{lineHeight:"6px"}}>
                  <p className='text-muted'>Website</p>
                  <p style={{fontWeight:"500"}}>Tantransh Solutions</p>
                </div>
              </div>
          </div>
        </div>
      </div>

      
    </div>

  )
}

export default Mainbar