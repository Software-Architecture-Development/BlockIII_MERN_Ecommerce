import React from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from '../redux/apiCalls';
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(250, 250, 250, 0.7),
      rgba(250, 250, 250, 0.7)
    ),
    url("https://cdn.pixabay.com/photo/2019/07/14/15/34/background-4337375_1280.jpg")
      center;
  background-size: cover;
  display: grid;
  place-items: center
//   justify-items: center;
`;

const Wrapper = styled.div`
  width: 45%;
  padding: 15px;
  background-color: white;
  ${mobile({ width: "70%" })}
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: lighter;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 35%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 15px 20px;
  background-color: #777799;
  color: white;
  cursor: pointer;
  align-items: center;
  margin-top:20px;
  ${mobile({ padding: "20px 20px" })}
`;


const Register = () => {
  
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] =useState({})
  const [isSubmit, setIsSubmit] =useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate(); 

  const handleSubmit = (e) => {
    console.log(e.target.value); 
    setFormErrors(validate());
    setIsSubmit(true)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      register(dispatch, {name, lastname, username,email,  password, confirm_password });
      navigate("/home");
     }
    e.preventDefault();
  };

  useEffect(()=>{
    console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
        }
  }, [formErrors])

    const validate =() =>{
          
     const errors ={}
     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
     if(!name){
      errors.name = "name required!"
     }
     if(!lastname){
      errors.lastname = "lastname required!"
     }
     if(!username){
      errors.username = "username required!"
     }
     if(!email){
      errors.email = "email required!"
     }else if(!regex.test(email)){
      errors.email = "invalid email!"
     }
     if(!password){
      errors.password = "password required!"
     }
     if(!confirm_password){
      errors.confirm_password = "confirm_password required!"
     }else if(confirm_password !== password){
      errors.confirm_password = "password mismatch!"
     }
   return errors
     }

     return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <div>
          <Input placeholder="name" name ="name" value={name} onChange={(e) => setName(e.target.value)}/>
          <p style={{color:"red"}}>{formErrors.name}</p>
         </div>
         <div>
          <Input placeholder="lastname" name ="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
          <p style={{color:"red"}}>{formErrors.lastname}</p>
         </div>
         <div>
          <Input placeholder="username" name ="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <p style={{color:"red"}}>{formErrors.username}</p>
         </div>
         <div>
          <Input placeholder="email" name ="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <p style={{color:"red"}}>{formErrors.email}</p>
         </div>
         <div>
          <Input placeholder="password" name ="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)}/>
          <p style={{color:"red"}}>{formErrors.password}</p>
         </div>
         <div>
          <Input placeholder="confirm_password" name ="confirm_password" type="password" value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)}/>
          <p style={{color:"red"}}>{formErrors.confirm_password}</p>
          </div>
          <Button >REGISTER</Button>  
        </Form>
      </Wrapper>
    </Container>
  );
};


export default Register