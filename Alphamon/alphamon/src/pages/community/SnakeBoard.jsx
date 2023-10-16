import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { serverUrl , communitypostIDEndpoint } from '../../config';
import { Link } from 'react-router-dom';

function SnakeBoard() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API 엔드포인트 및 필요한 매개변수를 정의합니다.
    const boardUrl = `${process.env.REACT_APP_SERVER_URL}/api/community/board?tendency=SNAKE&page=0`;

    // 서버로 GET 요청을 보냅니다.
    fetch(boardUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          // 성공적인 응답에서 게시물 목록을 추출합니다.
          const lionPosts = data.data;
          setPosts(lionPosts);
        } else {
          setError("서버에서 게시물을 불러오는 중 오류가 발생했습니다.");
        }
      })
      .catch((error) => {
        setError("게시물을 불러오는 중 네트워크 오류가 발생했습니다.");
      });
  }, []);

  return (
    <BoardContainer>
      {error && <p>{error}</p>}
      <ul>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <p>작성자: {post.nickname}</p>
            <p>작성 시간: {post.createdDateTime}</p>
            <p>내용: {post.content}</p>
            <StyledLink to={`/post/${post.id}`}>게시글 보기</StyledLink>
          </PostItem>
        ))}
      </ul>
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
  font-family: 'Poppins', sans-serif;
  color: #606770;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
  letter-spacing: 0.5px;
`;

const PostItem = styled.li`
  list-style: none;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  color: #007BFF; 
  text-decoration: none;
  color: #2A64D9;
  font-family: Roboto;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:hover {
    color: #0056b3; /* 마우스 호버시 색상 변경 (옵션) */
  }
`;


export default SnakeBoard;
