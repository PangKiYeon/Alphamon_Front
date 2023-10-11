import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cheader from '../../components/Community/Cheader';
import CTop from '../../components/Community/CTop';
import BottomMenu from '../../components/Main/BottomMenu';
import Clion from './/Clion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 게시글 작성 역할만
// Clist Component로 게시글 보여줌

function Cmain() {
  const [id, setId] = useState(''); 
  const [tendency, setTendency] = useState(''); 
  const [nickname, setNickname] = useState(''); 
  const [content, setContent] = useState(''); 
  const [createdDatetime, setcreatedDatetTime] = useState(''); 
  const [viewcount, setViewcount] = useState(0); 
  const navigate = useNavigate();

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    
    // setDate(formattedDate);
    // setTime(formattedTime);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 서버로 데이터를 보내기
      await axios.post('/api/community/post', {
        id,
        tendency,
        nickname,
        content,
        createdDatetime,
        viewcount,
      });

      // 게시글 작성 후 할 작업
      navigate('/post-list');
    } catch (error) {
      console.error('게시글 작성 실패:', error);
    }
  };

  return (
    <>
      <Container>
        <Cheader></Cheader>
        <CTop></CTop>
        <BottomMenu></BottomMenu>
      </Container>
      <ContentContainer>
        <form onSubmit={handleSubmit}>
          <Textarea
                placeholder="의견을 작성하세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
        </form>     
        <SubmitButton type="submit">
          <ButtonImage src="icons/send.png" alt="Submit" />
        </SubmitButton>
      </ContentContainer>
      {/* 여기서 tendency 나눠서 해당 tendency Component 불러오는 방식 */}
      <Clion></Clion>
    </>
  );
}

const Container = styled.div``;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 42px;
  margin-right: 42px;
`;

const Textarea = styled.textarea`
  width: 330px;
  height: 105px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #F2F3F5;
  resize: none;
  font-family: 'Poppins', sans-serif;
`;

const SubmitButton = styled.button`
  width: 19px;
  height: 19px;
  border: none;
  cursor: pointer;
  position: relative; 
`;

const ButtonImage = styled.img`

`;

// const Context = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 329.003px;
//   height: 125px;
//   flex-shrink: 0;
//   margin: 15px 42px;
// `;

export default Cmain;