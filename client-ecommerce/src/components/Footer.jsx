import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

const Container =styled.div`
  display:flex;
`
const Logo =styled.h1`
`
const Description = styled.p`
  margin:10px 0;
`

const SocialMedia =styled.div`
   display:flex;
`
const Icons =styled.div`
   width:30px;
   height:30px;  
   background-color:#bc8f8f;
   border-radius:30%;
   display:flex;
   justify-content:center;
   align-items:center;
   margin-right:20px;
`

const Left =styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Right =styled.div`
flex:1;
padding:20px;
`
const ContactDetails =styled.div`
 margin:20px 0;
 display:flex;
 align-items:center
`
const Payment =styled.img`
width:50%;
`
const Center =styled.div`
flex:1;
padding:20px;
`
const Title= styled.h3`
margin-bottom:20px
`
const List =styled.ul`
    msargin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap
`
const ListItem =styled.li`
    width:50%;
    margin-bottom:8px;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ECOMMER.</Logo>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae totam et nobis quae velit, reiciendis eveniet laudantium eligendi nisi suscipit nulla hic unde blanditiis delectus sunt eaque quidem voluptatem quaerat assumenda voluptatum harum placeat porro! Suscipit error accusamus saepe? Modi dolore repudiandae voluptatibus saepe cumque ullam sit velit consectetur!</Description>
      <SocialMedia>
        <Icons>
      <FacebookIcon/>
      </Icons>
      <Icons>
      <InstagramIcon/>
      </Icons>
      <Icons>
      <LinkedInIcon/>
      </Icons>
      <Icons>
      <TwitterIcon/>
      </Icons>
      </SocialMedia>
      </Left>
      <Center>
        <Title> Imp. Links</Title>
        <List>
        <ListItem>Home</ListItem>
        <ListItem>My Account</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Mens Fashion</ListItem>
          <ListItem>Womens Fashion</ListItem>
          <ListItem>Order Track</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Info</Title>
        <ContactDetails>
        <FmdGoodIcon style={{marginRight: "10px"}}/> 532, Heidelberg Bismarkplatz Germany
        </ContactDetails>
        <ContactDetails>
        <CallIcon style={{marginRight: "10px"}}/> +49-1515262630
        </ContactDetails>
        <ContactDetails>
         <MailIcon style={{marginRight: "10px"}}/> abc@gmail.com
        </ContactDetails>
        <Payment src ="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
