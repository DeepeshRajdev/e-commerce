import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components'
import { mobile } from '../responsive.js';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    
    padding: '0 4px',
  },
}));
const Container = styled.div`
  height: 60px;
  dispaly: flex;
  align-items: center;
  margin-bottom: 10px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  
  border-radius: 5px;
  justify-content: space-between;
`;

const Input = styled.input`
  flex:2;
  margin-right: 5px;
  border: none;
  background-color: inherit;
  padding-left: 5px;
  ${mobile({ width: "50px" })}
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
const StyledLink = styled(Link)`
  text-decoration: none;
  color:black;
`;
const MenuItem = styled.div`
text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="What are you looking for?" onFocus={() => {
              console.log("clicked")
            }}/>
            <SearchIcon style={{ color: "gray", fontSize: 32 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>PIOR</Logo>
        </Center>
        <Right>
          <MenuItem><StyledLink to='/register'>REGISTER</StyledLink></MenuItem>
          <MenuItem><StyledLink to='/login'>SIGN IN</StyledLink></MenuItem>
         
          <MenuItem>
          <StyledLink to='/cart'>
          <IconButton aria-label="cart">
          <StyledBadge badgeContent={quantity} color="primary">
          <ShoppingCartOutlinedIcon />
        </StyledBadge>
        </IconButton>
        </StyledLink>
          </MenuItem>
          
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar
