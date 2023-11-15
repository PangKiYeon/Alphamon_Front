import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Main/Header';
import BottomMenu from '../../components/Main/BottomMenu';
import { serverUrl, predictpriceEndpoint} from '../../config';


const Modela = () => {
  const navigate = useNavigate();
  // 주식 코드 상태
  const [stockCode, setStockCode] = useState('');

  const handleNext1 = () => {
    navigate('/model');
  };

  const handleNext2 = async () => {
    try {
      const nickname = localStorage.getItem('nickname');
      // API 요청을 위한 데이터 구조
      const requestData = {
        nickname: nickname,
        ticker: stockCode,
      };

      // API 호출
      const response = await fetch(`${serverUrl}${predictpriceEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      // 응답 성공
      if (response.ok) {
        const result = await response.json();
        console.log('API 응답:', result);

        localStorage.setItem('modelAData', JSON.stringify(result));
        navigate('/modelaa');
      } else {
        // 실패한 경우
        console.error('API 오류:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('API 호출 중 오류:', error);
    }
  };

  const handleInputChange = (e) => {
    setStockCode(e.target.value);
  };

  return (
    <>
      <Header />
      <Container>
        <Text>원하는 주식 종목 코드를 <br />입력해주세요</Text>
        <InputBox type="text" placeholder="주식 종목 코드 입력"  value={stockCode} onChange={handleInputChange}  />
        <ButtonContainer>
          <Button1 onClick={handleNext1}>이전</Button1>
          <Button2 onClick={handleNext2}>다음</Button2>
        </ButtonContainer>
        <BottomMenu select={"두번째메뉴"}/>
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
