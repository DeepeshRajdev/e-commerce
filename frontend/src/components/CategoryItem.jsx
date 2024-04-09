import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 60vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "70vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
//#072A40
const Title = styled.h1`
    color:white;
    
    margin-bottom: 20px;
`;
// 403234
const Button = styled.button`
    border:1px solid white;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: inherit;
    color: white;
    cursor: pointer;
    font-weight: 600;
    margin-bottom: 5px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button><strong>SHOP NOW</strong></Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;