import { useState, useEffect } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode"


import {Nav} from "react-bootstrap";
 import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] =useState({})
  const [isSubmit, setIsSubmit] =useState(false);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  let navigate = useNavigate();

   const handleSubmit =(e) =>{
     setFormErrors(validate());
     setIsSubmit(true);
     if(Object.keys(formErrors).length === 0 && isSubmit){
        login(dispatch, { username, password });
        navigate("/home");
     }
    e.preventDefault();
  };

  //google auth
  const [user, setUser] = useState({});
    
  function handleCallbackResponse(response){
      
      console.log("Encoded JWT ID token: " + response.credential);
      var userObject = jwt_decode(response.credential);
      console.log(userObject);
      setUser(userObject);
      document.getElementById("signInDiv").hidden = true;
      navigate("/home");
  
    }
  
    function handlesignOut(event){
      setUser({});
      document.getElementById("signInDiv").hidden = false;
    }
    window.onload = () => {
      window.google.accounts.id.initialize({
        client_id: "1051679490979-41okr52q2vnc3k6ps6c7c0qs43800191.apps.googleusercontent.com",
        callback: handleCallbackResponse
  
        });
  
        window.google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          { type: "icon", size: "large"}
        );
  
        window.google.accounts.id.prompt();
    }
   
   
   useEffect(() =>{
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
    }
   }, [formErrors])

   const validate =() =>{
       const errors ={}
       if(!username){
        errors.username = "Username required!"
       } 
       if(!password){
        errors.password = "Password required!"
       }
        return errors
   }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}

          />
           <p style={{color:"red"}}>{formErrors.username}</p>
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button onClick={handleSubmit} disabled={isFetching} onError={error}>
            LOGIN
          </Button>
          <div id="signInDiv"></div>
          {/* {error && <Error>Something went wrong...</Error>} */}
           <p style={{color:"red"}}>{formErrors.password}</p>
          <Nav.Link href="/register" style={{textDecoration:"none"}}>
          <Link >CREATE A NEW ACCOUNT</Link>
          </Nav.Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;