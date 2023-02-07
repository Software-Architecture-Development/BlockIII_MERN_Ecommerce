import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
import { mobile } from "../responsive";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router";
import { useEffect } from "react";
import { publicRequest } from "../requestMethods";

import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

// const Container1 = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   position: absolute;
//   overflow: hidden;
//   ${mobile({ display: "none" })}
// `;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// //   position: absolute;
// //   top: 0;
// //   bottom: 0;
// //   left: ${(props) => props.direction === "left" && "10px"};
// //   right: ${(props) => props.direction === "right" && "10px"};
// //   margin: auto;
// //   cursor: pointer;
// //   opacity: 0.5;
// //   z-index: 2;
// `;

const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px  ;
  background-color: #5f9ea0;
  cursor: pointer;
  font-weight: 500;
  border-radius: 6px;
  &:hover{
      background-color: #a9a9a9;
  }
`;



const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();
    const notify = () => toast.success("Added to Cart");
    const [slideIndex, setSlideIndex] = useState(0);
    const handleDirection = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };

    useEffect(() => {
      const getProduct = async () => {
        try {
          const res = await publicRequest.get(`/products/find/${id}`);
          setProduct(res.data);
        } catch {}
      };
      getProduct();
    }, [id]);
  
    const handleQuantity = (type) => {
      if (type === "dec") {
        quantity > 1 && setQuantity(quantity - 1);
      } else {
        setQuantity(quantity + 1);
      }
    };
  
    const handleClick = () => {
      dispatch(
        addProduct({ ...product, quantity, color, size })
      );
      toast.success("Added to Cart");
    };


  return (
    <Container>   
        
        {/* <Container1>
        <Arrow direction="left" onClick={() => handleDirection("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow direction="right" onClick={() => handleDirection("right")}>
        <ArrowRightOutlined />
      </Arrow>
      </Container1> */}
      <Wrapper>
      {/* <Slide /> */}
      <ImgContainer>
         {/* <Image src={product.img} /> */}
         <Image src="https://m.media-amazon.com/images/I/61KNBTw4K8S._AC._SR360,460.jpg" />
        </ImgContainer>
        <InfoContainer>
          {/* <Title>{product.title}</Title> */}
          <Title>{product.title}</Title>
          <Desc>
          {/* {product.desc} */}
          Langarmshirt aus 100% Baumwolle Schwarz
          </Desc>
          {/* <Price>€ {product.price}</Price> */}
          <Price>€ 29.99</Price>
          <FilterContainer>
          <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
            {/* <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c)=>(
                <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>setSize(e.target.value)}>
                {product.size?.map((s)=>(
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter> */}
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=> handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={()=> handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
            <ToastContainer />
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;