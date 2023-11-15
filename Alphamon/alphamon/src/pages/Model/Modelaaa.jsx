import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Main/Header';
import BottomMenu from '../../components/Main/BottomMenu';
import { Line } from 'react-chartjs-2'; 
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const Modelaaa = () => {
  const navigate = useNavigate();
  const modelAstoredData = JSON.parse(localStorage.getItem('modelAData'));
  const { average_prediction, Bollinger, MACD, MOK, RSI, STCK, VR, WR } = modelAstoredData;

  console.log('ModelA에서 localStorage에서 가져온 데이터:', modelAstoredData);
  // 그래프 데이터 설정
  const chartData = {
    labels: ['average_prediction', 'Bollinger', 'MACD', 'MOK', 'RSI', 'STCK', 'VR', 'WR'],
    datasets: [
      {
        label: 'Predicted Values',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        pointRadius: 5,
        data: [average_prediction, Bollinger, MACD, MOK, RSI, STCK, VR, WR],
      },
    ],
  };

  // 차트 옵션
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  useEffect(() => {
    // 차트 초기화
    const initializeChart = () => {
      const ctx = document.getElementById('myChart');
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: chartData,
          options: options,
        });
      }
    };

    initializeChart();

    return () => {
      // 차트 제거
      const ctx = document.getElementById('myChart');
      if (ctx) {
        const chartInstance = Chart.getChart(ctx);
        chartInstance.destroy();
      }
    };
  }, []); // 빈 배열은 컴포넌트가 마운트될 때만 실행됩니다.

  return (
    <>
      <Header />
      <Container>
        <Text>Model a 결과 페이지</Text>
        <ChartContainer>
          <canvas id="myChart"></canvas>
        </ChartContainer>
        <BottomMenu select={'두번째메뉴'} />
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

const ChartContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  height: 400px;
`;

export default Modelaaa;
