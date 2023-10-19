import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { serverUrl, communitypostIDEndpoint , commentpostEndpoint} from '../../config';
import Cheader from '../../components/Community/Cheader';
import BottomMenu from '../../components/Main/BottomMenu';
import styled from 'styled-components';

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [newComment, setNewComment] = useState(''); 
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const postUrl = `${serverUrl}/api/community/post/${postId}`;

    fetch(postUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          const postInfo = data.data;
          setPost(postInfo);
          setComments(postInfo.comments);
        } else {
          console.error('게시글을 불러오는 중 오류가 발생했습니다.');
        }
      })
      .catch((error) => {
        console.error('게시글을 불러오는 중 네트워크 오류가 발생했습니다.');
      });
  }, [postId]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    const newCommentObj = {
      parentCommentId: comments.length + 1, 
      // parentCommentId: null,
      nickname: "testUser", 
      content: newComment,
      // createdDateTime: new Date().toISOString(),
    };

    // 댓글 목록
    setComments([...comments, newCommentObj]);
    setNewComment('');

    const postUrl = `${serverUrl}/api/community/comment/{postId}`;
    try {
      const nickname = "testUser";  
      const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
          newCommentObj,
          // swagger tendency 수정
        }),
      });
      console.log(response);
      if (response.ok) {
        console.log('댓글 작성 성공:', response.status);
      } else {

        console.error('댓글 작성 실패:', response.statusText);
      }
    } catch (error) {
      console.error('댓글작성 실패:', error);
    }
    // 서버에 새 댓글을 저장
    // 게시글 post 구현 후 넘어오기
  };

  if (!post) {
    return <p>로딩 중...</p>;
  }

  return (
    <Container>
      <Cheader></Cheader>
      <PostContainer>
        <PostInfo>
          <Author>{post.nickname}</Author>
          <p>{post.createdDateTime}</p>
        </PostInfo>
        <PostContent>
          <p>{post.content}</p>
        </PostContent>
        <CommentsContainer>
          <h3>댓글</h3>
          <ul>
            {comments.map((comment) => (
              <CommentItem key={comment.commentId}>
                <Author>{comment.nickname}</Author>
                <p>{comment.createdDateTime}</p>
                <p>{comment.content}</p>
              </CommentItem>
            ))}
          </ul>
          <CommentForm>
            <textarea
              placeholder="댓글을 작성해보세요"
              value={newComment}
              onChange={handleCommentChange}
            />
            <button onClick={handleCommentSubmit}>POST</button>
          </CommentForm>
        </CommentsContainer>
      </PostContainer>
      <BottomMenu></BottomMenu>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
  color: #5F6368;
  font-family: Roboto;
  font-size: 14px;
`;

const PostContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px 0;
  background-color: #fff;
`;

const PostInfo = styled.div`
  margin-bottom: 16px;
  p {
    margin: 4px 0;
  }
`;

const PostContent = styled.div`
  p {
    margin: 4px 0;
  }
`;

const CommentsContainer = styled.div`
  margin-top: 24px;
  h3 {
    margin: 0;
  }
`;

const Author = styled.p`
  color: #2A64D9;
  font-weight: 700;
  margin: 0 12px 0 0;
`;

const CommentItem = styled.li`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px 0;
  background-color: #f9f9f9;
  list-style: none;
  color: #5F6368;
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.5px;
`;

const CommentForm = styled.div`
  textarea {
    width: 100%;
    height: 100px;
    padding: 8px;
    margin-bottom: 8px;
    Browse plugins
    Rectangle 4349
    width: 329px;
    height: 45.971px;
    flex-shrink: 0;
  }

  button {
    background-color: #2A64D9;
    color: #FFF;
    font-family: Helvetica;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
  }
`;

export default Post;
