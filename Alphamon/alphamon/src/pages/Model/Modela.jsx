import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Main/Header';
import BottomMenu from '../../components/Main/BottomMenu';

const Modela = () => {
  const navigate = useNavigate();

  const handleNext1 = () => {
    navigate('/model');
  };

  const handleNext2 = () => {
    navigate('/modelaa');
  };

  return (
    <>
      <Header />
      <Container>
        <Text>원하는 주식 종목 코드를 <br />입력해주세요</Text>
        <InputBox type="text" placeholder="주식 종목 코드 입력" />
        <ButtonContainer>
          <Button1 onClick={handleNext1}>이전</Button1>
          <Button2 onClick={handleNext2}>다음</Button2>
        </ButtonContainer>
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

const InputBox = styled.input`
  width: 327px;
  height: 55px;
  padding: 8px;
  margin-left: 30px;
  border: 1px solid #ccc;
  border-radius: 16px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 400px;
`;

const Button1 = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  width: 168px;
  height: 55px;
  background-color: #CFCFCF;
  color: #black;
  border: none;
  border-radius: 16px;
  cursor: pointer;
`;

const Button2 = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  width: 168px;
  height: 55px;
  background-color: #DFF1FF;
  color: #black;
  border: none;
  border-radius: 16px;
  cursor: pointer;
`;

export default Modela;
