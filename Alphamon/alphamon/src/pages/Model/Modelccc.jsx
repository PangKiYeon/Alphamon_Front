import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Main/Header';
import BottomMenu from '../../components/Main/BottomMenu';
import { Doughnut, Bar } from 'react-chartjs-2';

const Modelccc = () => {
  const navigate = useNavigate();
  const modelCstoredData = JSON.parse(localStorage.getItem('modelCData'));
  const { predicted_volatilities, explanations, optimal_weights, risk_contributions } = modelCstoredData;
  

  const generateColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(getRandomColor());
    }
    return colors;
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  console.log('ModelC에서 localStorage에서 가져온 데이터:', modelCstoredData);
  // 데이터 가공
  const optimalWeightsData = {
    labels: modelCstoredData.data.stocks,
    datasets: [
      {
        data: modelCstoredData.data.optimal_weights,
        backgroundColor: generateColors(modelCstoredData.data.stocks.length), 
        hoverBackgroundColor: generateColors(modelCstoredData.data.stocks.length),
      },
    ],
  };

  const riskContributionsData = {
    labels: modelCstoredData.data.stocks,
    datasets: [
      {
        label: 'Risk Contributions',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: modelCstoredData.data.risk_contributions,
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: false,
        min: Math.min(...Object.values(modelCstoredData.data.risk_contributions)), 
      },
    },
  };
  

  return (
    <>
      <Header />
      <Container>
        <Text>
          {/* predicted_volatilities */}
          <div>
            <strong>[ 예측 변동성 ] </strong>
          </div>
          {Object.values(modelCstoredData.data.predicted_volatilities).map((volatility, index) => (
            <div key={index}>{volatility}</div>
          ))}
        </Text>

        <Text>
          {/* explanations */}
          <div>
            <strong>[ Alphamon의 설명 ]</strong>
          </div>
          {Object.values(modelCstoredData.data.explanations).map((explanation, index) => (
            <div key={index}>{explanation}</div>
          ))}
        </Text>

        <ChartContainer>
          <Doughnut data={optimalWeightsData} />
        </ChartContainer>

        <ChartContainer>
          <Bar data={riskContributionsData} options={options} />
        </ChartContainer>
      </Container>
      <BottomMenu select={'두번째메뉴'}/>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

const Text = styled.div`
  font-size: 10px;
  font-family: 'Poppins', sans-serif;
  margin-left: 35px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
`;

const ChartContainer = styled.div`
  width: 80%;
  max-width: 400px;
  margin: 20px auto;
  margin-top: 0px;
`;

export default Modelccc;
