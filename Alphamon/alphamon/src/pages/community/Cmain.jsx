import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cheader from '../../components/Community/Cheader';
import CTop from '../../components/Community/CTop';
import BottomMenu from '../../components/Main/BottomMenu';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Cmain() {
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  // 페이지 로드 시 현재 날짜와 시간 반영
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    
    setDate(formattedDate);
    setTime(formattedTime);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 서버로 데이터를 보냄
      await axios.post('/api/post', {
        content,
        userId,
        date,
        time,
      });

    //   // 게시글 작성 후 할 작업
    //   navigate('/post-list');
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
      <Context>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            type="text"
            placeholder="사용자 ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="text"
            placeholder="날짜"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="시간"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">게시</button>
        </form>
      </Context>
    </>
  );
}

const Container = styled.div``;

const Context = styled.div`
  margin-top: 338px;
`;

export default Cmain;