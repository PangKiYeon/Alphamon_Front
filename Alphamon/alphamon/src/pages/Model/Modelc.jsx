import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Main/Header';
import BottomMenu from '../../components/Main/BottomMenu';
import { serverUrl, predictportfolioEndpoint} from '../../config';

const Modelc = () => {
  const navigate = useNavigate();
  const [stockCodes, setStockCodes] = useState('');

  const handleNext1 = () => {
    navigate('/model');
  };

  const handleNext2 = async () => {
    try {
      // 입력된 주식 코드를 배열로 변환
      const nickname = localStorage.getItem('nickname');
      // 데이터
      const requestData = {
        nickname: nickname,
        stock_list: stockCodes,
      };

      // API 호출
      const response = await fetch(`${serverUrl}${predictportfolioEndpoint}`, {
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
        navigate('/modelcc');
      } else {
        // 실패
        console.error('API 오류:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('API 호출 중 오류:', error);
    }
  };

  const handleInputChange = (e) => {
    setStockCodes(e.target.value);
  };

  return (
    <>
      <Header />
      <Container>
        <Text>가지고 있는 <br />주식 종목 코드를 입력해주세요</Text>
        <Text1>쉼표로 구분하여 입력해주세요!</Text1>
        <InputBox type="text" placeholder="주식 종목 코드 입력" 
        value={ stockCodes }
        onChange={handleInputChange}/>
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
  margin-bottom: 0;
  margin-left: 35px;
  font-weight: bold;
  text-align: left;
`;

const Text1 = styled.div`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  color: #A4A4AA;
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
  margin-top: 380px;
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

export default Modelc;
