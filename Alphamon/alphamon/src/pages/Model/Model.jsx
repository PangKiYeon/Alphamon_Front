import React, { useState } from 'react';
import Header from '../../components/Main/Header';
import BottomMenu from '../../components/Main/BottomMenu';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { serverUrl, predictmarketEndpoint } from '../../config';

function Model() {
  const navigate = useNavigate();

  const handleBoxClick = async (route) => {
    // box2를 클릭하면 API 호출
    if (route === '/modelb') {
      try {
        // API 호출
        const response = await fetch(`${serverUrl}${predictmarketEndpoint}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // 성공
        if (response.ok) {
          const result = await response.json();
          console.log('API 응답:', result);
          navigate(route);
        } else {
          // 실패
          console.error('API 오류:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('API 호출 중 오류:', error);
      }
    } else {
      // 다른 페이지 이동
      navigate(route);
    }
  };

  return (
    <Container>
      <Header />
      <BoxesContainer>
        <Box onClick={() => handleBoxClick('/modela')}>
          <BoxContent>
            <img src="/images/box1.png" alt="box1" />
            <h2>원하는 주식을 입력하고<br />미래 주가를 지금 바로 확인하세요</h2>
          </BoxContent>
        </Box>

        <Box onClick={() => handleBoxClick('/modelb')}>
          <BoxContent>
            <img src="/images/box2.png" alt="box2" />
            <h2>최근 뉴스와 코스피 주가를 이용해<br />
            예측한 주식 시장 미래 흐름을<br />
            지금 바로 확인하세요</h2>
          </BoxContent>
        </Box>

        <Box onClick={() => handleBoxClick('/modelc')}>
          <BoxContent>
            <img src="/images/box3.png" alt="box3" />
            <h2>가지고 있는 주식 종목을 입력하고<br />
            최적의 결과를 지금 바로 확인하세요</h2>
          </BoxContent>
        </Box>

        <Box4>
          <BoxContent>
            <h3>유의사항</h3>
            <h4>본 서비스는 다양한 알고리즘과 최신 인공지능 기술을 활용하여 주식의 미래 주가를 예측하고 있습니다. <br />
            하지만 투자는 항상 리스크가 동반되므로, 여러 정보와 본 서비스의 예측을 종합적으로 고려하여 최종 결정을 내리시길 바랍니다.</h4>
          </BoxContent>
        </Box4>
      </BoxesContainer>
    
      <BottomMenu />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const BoxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  background-color: #FFFFFF;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  width: 343px;
  height: 90px;
  border-radius: 16px;
`;

const Box4 = styled.div`
  background-color: #FFFFFF;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  width: 345px;
  height: 175px;
  border-radius: 16px;
`;

const BoxContent = styled.div`
  display: flex;
  align-items: center; 
  position: relative;

  h2 {
    margin-bottom: 10px;
    margin-left: 20px; 
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
  }

  h3, h4 {
    display: block;
    margin-bottom: 10px;
    margin-right: 10px;
    font-family: 'Poppins', sans-serif;
  }
  
  h3 {
    font-size: 16px;
    position: absolute; 
    top: 0; 
  }
  
  h4 {
    font-size: 14px;
    color: #A4A4AA;
    margin-top: 60px;
  }

  img {
    max-width: 100%;
    height: auto;
    width: 48px;
    height: 48px;
    margin-left: 10px;
  }
`;

export default Model;
