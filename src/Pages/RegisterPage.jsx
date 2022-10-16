//* Imported Libraries
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Topbar1 from '../components/topbar'
import Logo from '../uploads/LogoMain.png'


const RegisterPage = () => {
  //! Setting states
  const [fname, setFName] = useState('')
  const [lname, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setaddress] = useState('')

  const [Phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // ! submitHandler Function
  const submitHandler = e => {
    e.preventDefault()
  }

  return (
    <div className='center_div'>
      <Row md={3}>
        <div className='Logodiv' style={{
          width: '50vw',
          marginTop: "0vh",
        }}  >
          <img src={Logo} alt="" style={{ width: '50vw' }} srcset="" />
        </div>
        <div className='register_style' style={{ marginTop: '-5'}} >
          {/* <h1 className='special_Heading' style={{ color: 'black' }}>
            Sign Up
          </h1> */}

          {/* Form */}
          <Form onSubmit={submitHandler}>
            {/* For Name Field  */}
            <Form.Group controlId='name' style={{}}>
              <Form.Label style={{ color: 'white' }}>First Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='First Name'
                value={fname}
                onChange={e => setFName(e.target.value)}
              ></Form.Control>
              <Form.Label style={{ color: 'white' }}>Last Name</Form.Label>
              <Form.Control
                type='Last name'
                placeholder='Last Name'
                value={lname}
                onChange={e => setLName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {/* For Phone Field */}
            <Form.Group controlId='phone'>
              <Form.Label style={{ color: 'white' }}>Phone Number</Form.Label>
              <Form.Control
                type='Phone'
                placeholder='Phone Number'
                value={Phone}
                onChange={e => setPhone(e.target.value)}
              ></Form.Control>
            </Form.Group>
            
            {/* For Adress Field  */}
            <Form.Group controlId='address'>
              <Form.Label style={{ color: 'white' }}>Address</Form.Label>
              <Form.Control
                type='address'
                placeholder='Address'
                value={address}
                onChange={e => setaddress(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            {/* For UserType  */}
            <span>User type</span>
            <Row style={{
                  position: 'relative',
                  marginLeft: '80px',
                  top: '0px',
            }}>

              <span ><input type="radio" value="Producer" name="usertype" /> Producer</span>
              <span><input type="radio" value="Collector" name="usertype" /> Collector</span>
              <span><input type="radio" value="Buyer" name="usertype" /> Buyer</span>
            </Row>

            {/* For Email Field  */}
            <Form.Group controlId='email'>
              <Form.Label style={{ color: 'white' }}>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {/* For Password Field  */}
            <Form.Group controlId='password'>
              <Form.Label style={{ color: 'white' }}>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {/* For Confirm Password Field  */}
            <Form.Group controlId='confirmPassword'>
              <Form.Label style={{ color: 'white' }}>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* Submit Button */}
            <br />
            <Button type='submit' variant='primary' id='button_special'
            style={{
          
              backgroundColor:'#83f28f',
              
            }}>
              Signup
            </Button>
          
          </Form>

          {/* Link for Register Page */}
          <Row className='py-3'>
            <Col style={{ color: '#1a1a1a' }}>
              Already have an Account?
              <Link to='/login' style={{ color: '#83f28f' }}>
                <span style={{ marginLeft: '10px',marginTop:'-10px',position:'absulate' }}>Login</span>
              </Link>
            </Col>
          </Row>
        </div>
      </Row>
    </div>
  )
}

export default RegisterPage
