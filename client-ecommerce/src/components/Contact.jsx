import React from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
height:60vh;
background-color: #fff5ee;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`
const Title = styled.h2`
  font-size:55px;
//   margin-bottom:7px;
`
const Description = styled.div`
  font-size:20px;
  margin: 7px 0;
  ${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width:32%;
    height:30px;
    background-color:white;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`
const Input = styled.input`
   border:none;
   flex:7;
   padding:10px;
`
const Button = styled.button`
  flex:1;
  border:none;
  background-color: #8b4513
`


const Contact = () => {
  return (
    <Container>
        <Title>News</Title>
        <Description>Get regular updates for your favourite brands.</Description>
        <InputContainer>
        <Input placeholder="Your Email-Id "/>
        <Button>
         <SendOutlinedIcon/>
        </Button>
        </InputContainer>   
    </Container>
  )
}

export default Contact
