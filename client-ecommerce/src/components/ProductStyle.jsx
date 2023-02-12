import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { useNavigate } from "react-router-dom";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff8dc;
    position: relative;
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #d3d3d3;
      transform: scale(1);
    }
  `;
  
  const ProductStyle = ({ item }) => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/cart`; 
    navigate(path);
  }
    return (<>
      <Container>
        <Image src={item.img} />
        <Info>
          <Icon onClick={routeChange}>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
        <p style={{marginLeft:"5px", fontSize:"25px"}}>{item.title}</p>
      </Container>
      </>
    );
  };
  
  export default ProductStyle;