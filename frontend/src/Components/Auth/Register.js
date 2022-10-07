import React from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Helmet } from "react-helmet-async"

const Register = () => {
  return (
    <Container className='small-container'>
      <Helmet>
        <title>Register user</title>
      </Helmet>
      <h1 className='my-3'>Sign-Up</h1>
      <Form>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Mobile No.</Form.Label>
          <Form.Control type='password' required />
        </Form.Group>
        <div className='mb-3'>
          <Button type='submit'>Sign-Up</Button>
        </div>
      </Form>
    </Container>
  )
}

export default Register
