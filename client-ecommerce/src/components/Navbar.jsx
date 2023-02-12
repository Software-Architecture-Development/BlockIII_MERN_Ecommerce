import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { mobile } from "../responsive";
import {useSelector} from "react-redux";
import {
 Nav
} from "react-bootstrap";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.6px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 24px;
  padding: 4px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "48px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
    
  const quantity = useSelector(state => state.cart.quantity)
  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 15 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Namaste</Logo>
        </Center>
        <Right>
        <Nav.Link href="/register" style={{textDecoration:"none"}}>
          <MenuItem>REGISTER</MenuItem>
          </Nav.Link>
          <Nav.Link href="/" style={{textDecoration:"none"}}>
          <MenuItem>SIGN OUT</MenuItem>
          </Nav.Link>
          <MenuItem>
          <Badge badgeContent={quantity} color="primary">
          <ShoppingCartOutlinedIcon/>
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;