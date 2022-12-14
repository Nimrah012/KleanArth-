
import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import LogoMain from '../uploads/LogoMain.png'
import { Row, Col, Button } from 'react-bootstrap'



const Topbar1 = () => {
  return (
    <>   
      <Navbar className='topbar1' style={{
        width: '106vw',
        height: '60px',
        backgroundColor:'#62fcaf',
        left: '-12%',
      }}  >

        {/* <h1>   </h1> */}
        <img src={LogoMain} style={{
          width: '300px',
          height: '300px',
        }} className='logoi' alt='logo' />
        {/* <input type='text' style={{ left: '200px', position: 'relative' }} className='topinput' placeholder='Search data' /> */}

        <svg xmlns="http://www.w3.org/2000/svg" style={{ left: '1260px', position: 'relative' }} width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" style={{ left: '1210px', position: 'relative' }} width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
      </Navbar>
      
    
    </>
  )
}
//   style={{ width: "auto", right:80 }}
export default Topbar1