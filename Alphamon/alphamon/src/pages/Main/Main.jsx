// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Main/Header';
import TopMenu from '../../components/Main/TopMenu';
import BottomMenu from '../../components/Main/BottomMenu';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { serverUrl , newsEndpoint } from '../../config';
import { LuNewspaper } from "react-icons/lu";
 
function Main() {
  const navigate = useNavigate();
  const [newsdata, setNewsdata] = useState([]);
  
  useEffect (() => {
    const nickname = localStorage.getItem('nickname');
    const NewsUrl = serverUrl + newsEndpoint + `?nickname=${nickname}`;

    fetchNews(NewsUrl);

  }, []);

  async function fetchNews(Url) {
    try{
      const response = await fetch(Url, {
        method: "GET",
        headers: {
          "Content-Type" : "application/json;charset=UTF-8",
        },
      });
      const data = await response.json();

      if(data.code === 200) {
        const news = data.data.map(item => ({
          title: item.title,
          link: item.link,
          datetime: item.dateTime,
          source: item.source
        }));

        setNewsdata(news);

      } else if (data.code === 400) {
        alert(data.message);
      } else if (data.code === 401) {
        alert(data.message);
      } else if (data.code === 500) {
        alert(data.message);
      } else {
        alert('오류가 발생하였습니다');
      } 
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return(
  <>
    <Container>
      <Header></Header>
      <TopMenu select = "홈 화면"/>
      <PaperIcon />
      <Maintext>투자 성향 맞춤 뉴스</Maintext>
      <Mainexplain>항목을 선택하면 해당 뉴스 기사를 자세히 읽을 수 있어요.</Mainexplain>
      <Mainservice>
        {newsdata.slice(0,5).map((item, index) => (
          <News key = {index} onClick={() => window.open(item.link)}>
            <NewsTitle>{item.title}</NewsTitle>
            <NewsSource>{item.source} {item.datetime}</NewsSource>
          </News>
        ))}
      </Mainservice>
      <Test onClick={()=>navigate('/test')}>
        <Testimage src="/images/edit.png" alt="테스트"></Testimage>
        <TextContainer>
          <Testtext>투자 성향 테스트</Testtext>
          <Testexplain>나는 어떤 투자 성향을 가지고 있을까?</Testexplain>
        </TextContainer>
      </Test>
      <BottomMenu select={"홈메뉴"}/>
    </Container>
  </>
  );
}

const Container = styled.div`
display: flex;
justify-content: center;
`;

const PaperIcon = styled(LuNewspaper)`
width: 43px;
height: 43px;
margin-right: 314px;
margin-top: 203px;
color: #C5C7CB;
`;

const NewsSource = styled.div`
margin-left: 13px;
margin-top: 10px;
color: var(--Black, #212226); /*블랙 수정*/
font-family: 'Poppins', sans-serif;
font-size: 11.5px;
font-weight: 500;
line-height: 14.468px;
`;

const NewsTitle = styled.div`
margin-left: 10px;
margin-top: 11px;
margin-right: 7px;
color: var(--Black, #212226);
font-family: 'Poppins', sans-serif;
font-size: 14px;
font-weight: 550;
line-height: 14.468px;
letter-spacing: -0.18px;
`;

const News = styled.div`
width: 335px;
height: 72px;
margin-top: 12px;
margin-left: 25px;
border-radius: 8px;
background: white;
border: 1.8px solid var(--light-gray-4, #D9D9D9);
`;

const Mainservice = styled.div`
  position: absolute;
  left: 14px;
  bottom: 180px;
  width: 386px;
  height: 450px;
  background-color: #F2F2F2;
  border-radius: 10px;
  opacity: 0.8;
`;

const Maintext = styled.div`
position: absolute;
left: 90px;
top: 204px;
color: var(--Black, #212226);
font-family: 'Poppins', sans-serif;
font-size: 18px;
font-weight: 600;
line-height: 14.468px;
letter-spacing: -0.18px;
`;

const Mainexplain = styled.div`
position: absolute;
left: 90px; 
top: 235px;
color: var(--Black, #212226);
font-family: 'Poppins', sans-serif;
font-size: 11.8px;
line-height: 14.468px;
letter-spacing: -0.18px;
`;

const Test = styled.div`
  position: absolute;
  left: 14px; 
  bottom: 97.8px;
  display: flex;
  width: 386px;
  height: 71px;
  transform: rotate(0.023deg);
  padding: 6.029px 0px 6.029px 6.029px;
  align-items: center;
  gap: 9.646px;
  flex-shrink: 0;
  border-radius: 9.043px;
  background: var(--White, #FFF);
  box-shadow: 0px 9.64561px 19.29122px 0px rgba(245, 248, 252, 0.60);
`;

const Testimage = styled.img`
  margin-top: 6px;
  width: 48px;
  height: 48px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Testtext = styled.div`
  margin-top: 13px;
  color: var(--Black, #212226);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.468px; /* 120.57% */
  letter-spacing: -0.18px;
`;

const Testexplain = styled.div`
  margin-top: 6px;
  color: var(--Gray-Text, #949BA5);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 10.851px; /* 108.513% */
  letter-spacing: -0.15px;
`;

export default Main;