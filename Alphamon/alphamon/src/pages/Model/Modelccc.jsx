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
  
  console.log('ModelC에서 localStorage에서 가져온 데이터:', modelCstoredData);
  // 데이터 가공
  const optimalWeightsData = {
    labels: modelCstoredData.data.stocks,
    datasets: [
      {
        data: modelCstoredData.data.optimal_weights,
        backgroundColor: ['#FF6384', '#36A2EB'], 
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
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
        data: [modelCstoredData.data.risk_contributions],
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
        <Text></Text>

        <Text></Text>
        <pre>{JSON.stringify(predicted_volatilities, null, 2)}</pre>


        <Text></Text>
        <pre>{JSON.stringify(explanations, null, 2)}</pre>

        <ChartContainer>
          <Doughnut data={optimalWeightsData} />
        </ChartContainer>

        <ChartContainer>
          <Bar data={riskContributionsData} options={options} />
        </ChartContainer>

      </Container>
      <BottomMenu />
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
  margin-left: 35px;
  font-weight: bold;
  text-align: left;
`;

const ChartContainer = styled.div`
  width: 80%;
  max-width: 400px;
  margin: 20px auto;
  margin-top: 0px;
`;

export default Modelccc;