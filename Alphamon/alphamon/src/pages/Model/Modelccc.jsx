import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Main/Header';
import BottomMenu from '../../components/Main/BottomMenu';

const Modelccc = () => {
  const navigate = useNavigate();



  return (
    <>
      <Header />
      <Container>
        <Text>Model c 결과 페이지</Text>
      <BottomMenu />
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;

const Text = styled.div`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 16px;
  margin-left: 35px;
  font-weight: bold;
  text-align: left;
`;

export default Modelccc;
