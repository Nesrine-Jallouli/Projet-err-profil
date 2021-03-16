import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { entrepriseLogin } from "../JS/actions";
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';

const LoginEntreprise = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loading = useSelector((state) => state.entrepriseReducer.loading);
  const isAuthEnt = useSelector((state) => state.entrepriseReducer.isAuthEnt);

  const dispatch = useDispatch();

  const loginEntreprise = (e) => {
    e.preventDefault();

    dispatch(
     entrepriseLogin({
        email,
        password,
      })
    );
  };

  // const errors = useSelector(state => state.userReducer.errors)

  // console.log(errors)

  // const dispatch = useDispatch();

  if (isAuthEnt) return <Redirect to="/" />;
  console.log(loading)
  return (

    
      loading ? <h1> please wait </h1> :
    


    <div className="container">
     
        <div className='Login-design text-dark shadow p-3 mb-5 '>
    <Container>
    <Label for="title" className='text-center text-Login'>LOGIN</Label>
    <Row>
    <Col>
    <Form id="loginForm" method="post" >
    {/* {

errors ?     <div class="alert alert-danger" role="alert">
{errors.msg} </div>: null

  } */}
      <FormGroup>
        <Label for="email"> Email</Label>
        <Input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" required/>
      </FormGroup>
      <FormGroup>
        <Label for="Password"> Password</Label>
        <Input type="password" name="password" id="Password"  onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" required/>
        <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span></FormGroup>
      <Label>Don't have an account?</Label><Link to='/SignUpCompany'> Register</Link>
      <Button className='button_login bg-success' onClick={loginEntreprise}>SIGN IN</Button>
    </Form>
    </Col>
    </Row>
    </Container>
    </div>
      
    </div>
  )
};

export default LoginEntreprise;
