import React, { useEffect } from 'react';
import Header from '../../components/Main/Header';
import BottomMenu from '../../components/Main/BottomMenu';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

function Modelb() {
  // localStorage에서 데이터 가져오기
  const storedData = JSON.parse(localStorage.getItem('modelBData'));

  // 데이터 확인을 위한 콘솔 로그
  console.log('Modelb에서 localStorage에서 가져온 데이터:', storedData);

  if (!storedData) {
    return null;
  }

  const { negative_news_count, positive_news_count, negative_news_examples, positive_news_examples, prediction } = storedData;

  // 그래프 데이터 설정
  const chartData = {
    labels: ['Negative News', 'Positive News'],
    datasets: [
      {
        data: [negative_news_count, positive_news_count],
        backgroundColor: ['#FF5733', '#33FF57'],
      },
    ],
  };

  return (
    <>
      <Container>
        <Header />
        <Text>Model b 결과 페이지</Text>

        {/* 원 그래프 */}
        <ChartContainer>
          <Doughnut data={chartData} />
        </ChartContainer>

        {/* 부정적 뉴스 예시 */}
        <ResultContainer>
          <ResultText>Negative News Examples:</ResultText>
          <NewsList>
            {negative_news_examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </NewsList>
        </ResultContainer>

        {/* 긍정적 뉴스 예시 */}
        <ResultContainer>
          <ResultText>Positive News Examples:</ResultText>
          <NewsList>
            {positive_news_examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </NewsList>
        </ResultContainer>

        {/* 예측 결과 */}
        <ResultContainer>
          <ResultText>Prediction: {prediction}</ResultText>
        </ResultContainer>

        <BottomMenu select={'두번째메뉴'} />
      </Container>
    </>
  );
}

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

const ChartContainer = styled.div`
  width: 80%;
  max-width: 400px;
  margin: 20px auto;
`;

const ResultContainer = styled.div`
  margin-top: 20px;
`;

const ResultText = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

const NewsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export default Modelb;
