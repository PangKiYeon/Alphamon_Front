import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Nextbutton() {
  const navigate = useNavigate();

  const handleBoxClick = (route) => {
    navigate(route);
  };

  return (
    <Container>
      <Box1 onClick={() => handleBoxClick('/model')}>이전</Box1>
      <Box2 onClick={() => handleBoxClick('/modelaa')}>다음</Box2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 336px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;

`;

const Box1 = styled.div`
  width: 168px;
  height: 55px;
  border-radius: 16px;
  background-color: #CFCFCF;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0055CC;
  }
`;

const Box2 = styled.div`
  width: 168px;
  height: 55px;
  border-radius: 16px;
  background-color: #DFF1FF;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s; 

  &:hover {
    background-color: #0055CC;
  }
`;

export default Nextbutton;