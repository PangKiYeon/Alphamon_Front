// 서버에서 게시글 data 가져와서 보여주는 역할 
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import styled from 'styled-components';

function Csheep({ postId }) {
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        // postId를 사용하여 특정 게시물을 가져오는 API 요청을 보내기
        axios.get(`/api/community/post/${postId}`)
            .then(response => {
                // API 응답에서 게시글 데이터 가져오기
                const postData = response.data;
                // state에 데이터 저장
                setPostData(postData);
            })
            .catch(error => {
                console.error('게시글 데이터를 불러오는 중 오류 발생: ', error);
            });
    }, [postId]);

return (
  <div>
    {postData ? (
      <PostContainer>
        <h2>{postData.title}</h2>
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
            <CommentText>{comment.content}</CommentText>
            <p>작성 시간: {comment.createdDatetime}</p>
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
`;

const CommentContainer = styled.div`
  border: 1px solid #eee;
  padding: 8px;
  margin: 8px 0;
`;

const CommentText = styled.p`
  margin: 4px 0;
`;

export default Csheep;