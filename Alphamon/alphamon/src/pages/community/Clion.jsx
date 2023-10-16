import React, { useEffect, useState } from 'react';
// import axios from 'axios'; 
import styled from 'styled-components';
import { serverUrl , communitypostIDEndpoint } from '../../config';

function Clion({ postId }) {
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/api/community/post/${postId}?sort=latest`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          const postData = data.data;

          // "tendency"가 "LION"에 해당하는 게시물만 표시
          if (postData.tendency === "LION") {
            setPostData(postData);
          } else {
            setError("해당 게시물의 tendency가 LION이 아닙니다.");
          }
        } else if (data.code === 400) {
          setError("요청하신 게시글 id가 존재하지 않습니다.");
        } else if (data.code === 500) {
          setError("서버 내부 오류");
        }
      })
      .catch((error) => {
        setError("게시글 데이터를 불러오는 중 오류 발생");
        console.error('게시글 데이터를 불러오는 중 오류 발생: ', error);
      });
  }, [postId]);

  return (
    <div>
      {postData ? (
        <PostContainer>
          <p>작성자: {postData.nickname}</p>
          <p>작성 시간: {postData.createdDateTime}</p>
          <p>조회수: {postData.viewCount}</p>
          <p>{postData.content}</p>
        </PostContainer>
      ) : (
        <p>게시글을 불러오는 중...</p>
      )}

      {postData && postData.comments ? (
        <div>
          {postData.comments.map((comment) => (
            <CommentContainer key={comment.id}>
              <p>작성자: {comment.nickname}</p>
              <p>작성 시간: {comment.createdDateTime}</p>
              <CommentText>{comment.content}</CommentText>
            </CommentContainer>
          ))}
        </div>
      ) : (
        <p>댓글을 불러오는 중...</p>
      )}
    </div>
  );
}

const PostContainer = styled.div`
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

const CommentContainer = styled.div`
  border: 1px solid #eee;
  padding: 8px;
  margin: 8px 0;
  font-family: 'Poppins', sans-serif;
  color: #606770;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
  letter-spacing: 0.5px;
`;

const CommentText = styled.p`
  margin: 4px 0;
  font-family: 'Poppins', sans-serif;
  color: #606770;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
  letter-spacing: 0.5px;
`;

export default Clion;