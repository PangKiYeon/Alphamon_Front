import React, { useState, useEffect } from 'react';
import { serverUrl , communitypostEndpoint } from '../../config';
import Cheader from '../../components/Community/Cheader';
import CTop from '../../components/Community/CTop';
import BottomMenu from '../../components/Main/BottomMenu';
import Clion from './/Clion';
import LionBoard from './LionBoard'; 
import SnakeBoard from './SnakeBoard'; 
import MonkeyBoard from './MonkeyBoard'; 
import SheepBoard from './SheepBoard';
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
  const [selectedMenu, setSelectedMenu] = useState('공격투자형'); // 기본 메뉴 설정
  const navigate = useNavigate();

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    setNickname(localStorage.getItem("nickname"));
  }, []);

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
  };

  const handleSend = async (e) => {
    const postUrl = `${serverUrl}/api/community/post`;
    try {
    const nickname = "testUser";
    // setnickname 가져와서 하기
    const response = await fetch(postUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        nickname,
        content,
        // tendency 넣기
      }),
    });
    // console.log(response);
    if (response.ok) {
      // alert(response.message);
      // swagger
      console.log('게시글 작성 성공:', response.status);
    } else {
      // 오류 내용을 다르게 해주기
      console.error('게시글 작성 실패:', response.statusText);
    }
  } catch (error) {
    console.error('게시글 작성 실패:', error);
  }
};
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const id = 123; 
      const tendency = 'Some Tendency';
      const nickname = 'testUser'; 
      const time = new Date().toISOString();
      const viewcount = 0;

      // API 요청을 보내기
      const response = await fetch(`${serverUrl}${communitypostEndpoint}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
          id,
          tendency,
          nickname,
          content,
          createdDatetime,
          viewcount,
        }),
      });

      if (response.ok) {
        // alert('게시글 작성이 완료되었습니다.');
        console.log('게시글 작성 성공:', response.status);
      } else {
        console.error('게시글 작성 실패:', response.statusText);
      }
    } catch (error) {
      console.error('게시글 작성 실패:', error);
    }
  };

  return (
    <>
      <Container>
        <Cheader></Cheader>
        <CTop onMenuSelect={handleMenuSelect} /> {/* CTop 컴포넌트에 메뉴 선택 핸들러 전달 */}
        <BottomMenu select = "커뮤메뉴" />
      </Container>
      <ContentContainer>
        <form onSubmit={handleSubmit}>
          <Textarea
                placeholder="의견을 작성하세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
        </form>     
        <SubmitButton onClick={handleSend}>
          <ButtonImage src="icons/send.png" alt="Submit" />
        </SubmitButton>
      </ContentContainer>

        {/* 선택된 메뉴에 따라 해당 컴포넌트 렌더링 */}
        {selectedMenu === '공격투자형' && <LionBoard />}
        {selectedMenu === '적극투자형' && <MonkeyBoard />} 
        {selectedMenu === '위험중립형' && <SnakeBoard />} 
        {selectedMenu === '안정추구형' && <SheepBoard />}
          {/* {selectedMenu === '공격투자형' && <Clion postId={1} />}
          {selectedMenu === '적극투자형' && <Csnake />}
          {selectedMenu === '위험중립형' && <Cmonkey />}
          {selectedMenu === '안정추구형' && <Csheep />} */}
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

const SubmitButton = styled.div`
  width: 19px;
  height: 19px;
  border: none;
  cursor: pointer;
  position: relative; 
`;

const ButtonImage = styled.img`

`;


export default Cmain;