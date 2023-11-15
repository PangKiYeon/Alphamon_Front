import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearch } from "react-icons/bi";
import Header from '../components/Main/Header';
import TopMenu from '../components/Main/TopMenu';
import BottomMenu from '../components/Main/BottomMenu'

const Startergu = styled.div`
width: 414px;
height: 896px;
border-radius: 32px;
background: #FAFAFA;
position: absolute;
`;

const Searchgu = styled.div`
width: 386px;
height: 42px;
border-radius: 8px;
background: var(--light-gray-2, #F5F5F5);
position: relative;
margin-top: 205px;
margin-left: 14px;
`;

const Gutitle = styled.div`
color: var(--light-gray-11, #000);
font-family: 'Poppins', sans-serif;
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.1px;
position: aboslute;
margin-top: 30px;
margin-left: 36px;
margin-bottom: 4px;
`;

const Guqnabox = styled.div`
width: 342px;
height: 139px;
margin-top: 17px;
margin-left: 36px;
border-radius: 8px;
border: 1.5px solid var(--light-gray-4, #D9D9D9);
`;

const Question = styled.div`
width: 247px;
height: 24px;
color: var(--light-gray-11, #000);
font-family: 'Poppins', sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0.1px;
padding-top: 16px;
padding-left: 16px;
`;

const Answer = styled.div`
width: 282px;
color: var(--light-gray-7, #757575);
font-family: 'Poppins', sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0.25px;
padding-top: 8px;
padding-left: 16px;
`;

const Searchicon = styled(BiSearch)`
width: 24px;
height: 24px;
padding-top: 9px;
padding-left: 16px;
`;

const Searchinput = styled.input`
position: absolute;
height: 40px;
width: 332px;
border: none;
outline: none;
background: var(--light-gray-2, #F5F5F5);
font-family: 'Poppins', sans-serif;
font-size: 14px;
font-weight: 400;
letter-spacing: 0.25px; 
;`

function Guide() {
  const [search, setSearch] = useState('');

  const startergdata = [
    {
      question: '질문 예시 1',
      answer: '답변 예시 1',
    },
    {
    },
    {
    },
  ];

  const filteredData = startergdata.filter(
    (item) =>
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Startergu>
      <Header />
      <TopMenu />
      <Searchgu>
        <Searchicon />
        <Searchinput
        type="text"
        placeholder="키워드를 입력하세요"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
      </Searchgu>
      <Gutitle>가장 많이 하는 질문</Gutitle>
      {filteredData.map((item, index) => (
        <Guqnabox key={index}>
          <Question>Q. {item.question}</Question>
          <Answer>A. {item.answer}</Answer>
        </Guqnabox>
      ))}
      <BottomMenu />
    </Startergu>
  );
}

export default Guide;
