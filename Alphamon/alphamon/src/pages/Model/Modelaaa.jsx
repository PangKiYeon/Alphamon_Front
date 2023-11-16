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
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        pointRadius: 5,
        data: [modelAstoredData.data.average_prediction, modelAstoredData.data.Bollinger, modelAstoredData.data.MACD, modelAstoredData.data.MOK, modelAstoredData.data.RSI, modelAstoredData.data.STCK, modelAstoredData.data.VR, modelAstoredData.data.WR],
      },
    ],
  };

  // Chart 옵션 수정
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        barPercentage: 1.0,
      },
      y: {
        beginAtZero: true,
        max: 150,
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
  }, []); 

  return (
    <>
      <Header />
      <Container>
        <Text></Text>
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
  font-weight: bold;
  text-align: left;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const ChartContainer = styled.div`
  width: 95%;
  margin: 85px auto;
  height: 450px;
`;

export default Modelaaa;
