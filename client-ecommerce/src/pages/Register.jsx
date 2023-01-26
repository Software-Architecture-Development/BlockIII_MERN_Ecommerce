import React from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";

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
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #777799;
  color: white;
  cursor: pointer;
  ${mobile({ padding: "20px 20px" })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
          I hereby consent to the processing of the personal data  and declare my
           agreement with the <b>DATA PROTECTION REGULATIONS</b>
          </Agreement>
          <Button>REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};


export default Register