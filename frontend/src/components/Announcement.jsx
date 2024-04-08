import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: #A15C38;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return (
     <Container>Sign Up and get 50% Off</Container>
  )
}

export default Announcement
