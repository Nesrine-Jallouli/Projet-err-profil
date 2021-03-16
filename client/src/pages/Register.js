import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { userRegister } from "../JS/actions";
import { Link, useHistory } from "react-router-dom";
import { Container } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();

  const errors = useSelector(state => state.userReducer.errors)

  console.log(errors)

  const dispatch = useDispatch();

  // const history = useHistory();

  const addUser = (e) => {

    e.preventDefault()
    dispatch(
      userRegister({
        name,
        email,
        phoneNumber,
        password,
      })
    );

    setName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");

    // history.push("/login");
  };

  return (
    <div className="container">
      <div className='Login-design text-dark shadow p-3 mb-5'>
    <Container>  
    <Label for="register" className='text-Login text-center'>REGISTER CONDIDAT</Label>
    <br></br>

    {/* {
errors ?     <div class="alert alert-danger" role="alert">
Vous avez des erreurs remplir une autre fois  </div> : null
  } */}

    <Form id="register" method="post" >

      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" required/>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" required/>
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="password" name="password" id="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" required/>
        <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span></FormGroup>
      <FormGroup>
        <Label for="phoneNumber">phoneNumber</Label>
        <Input type="phoneNumber" name="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your phoneNumber" required/>
      </FormGroup>
      <FormGroup></FormGroup>
      <Label>Already has an account?</Label>
      <Link to='/login'> Sign in</Link>
      <Button className='button_login bg-success' onClick={addUser}>SIGN UP</Button>
    </Form>
    </Container>
    </div>
              
    </div>
  );
};

export default Register;
