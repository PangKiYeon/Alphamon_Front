// import logo from './logo.svg';
// import './App.css';
import Header from '../../components/Mypage/MyHeader';
import BottomMenu from '../../components/Main/BottomMenu';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Mypage() {
    const navigate = useNavigate();
  return(
  <>
    <Container>
      <Header></Header>
      <InfoContainer>
        <Myinfo>
          <div>Your Name <EditButton>Edit</EditButton></div>
          <div>User Name <EditButton>Edit</EditButton></div>
          <div>Birth <EditButton>Edit</EditButton></div>
          <div>Gender <EditButton>Edit</EditButton></div>
          <div>Phone Number <EditButton>Edit</EditButton></div>
          <div>Email <EditButton>Edit</EditButton></div>
        </Myinfo>
        <Password>
          <div>비밀번호 변경<EditButton>Edit</EditButton> </div>
          <div>계정 비밀번호를 변경할 수 있습니다.</div>
        </Password>
        <Community>
          <div>내가 작성한 게시글 및 댓글<EditButton>Edit</EditButton></div>
          <div>내가 작성한 게시글 및 댓글을 확인할 수 있습니다.</div>
        </Community>
     </InfoContainer>
     <BottomMenu select = "마이메뉴" />
    </Container>
  </>
  );
}

const Container = styled.div`
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const Myinfo = styled.div`
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  background-color: #FFFFFF; /* 배경색 설정 */
  padding: 10px; /* 패딩 설정 */
  border: 1px solid #ccc; /* 테두리 스타일 설정 */
  width: 300px; /* 가로 크기 */
  height: 342px; /* 세로 크기 */
  div {
    margin-bottom: 38px; /* 아래쪽 간격을 10px로 설정 */
  }
  div {
    display: flex;
    justify-content: space-between; /* 요소 사이의 공간을 최대화하여 버튼을 오른쪽에 배치 */
    align-items: center; /* 세로 중앙 정렬 */
  }
`;

const Password = styled.div`
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  background-color: #FFFFFF; /* 배경색 설정 */
  padding: 10px; /* 패딩 설정 */
  border: 1px solid #ccc; /* 테두리 스타일 설정 */
  width: 300px;
  height: 88.35px;
  margin-top: 20px;
  div:last-child {
    font-size: 8px;
    color: #49454F;
    margin-top: 10px;
  }  
  div {
    display: flex;
    justify-content: space-between; /* 요소 사이의 공간을 최대화하여 버튼을 오른쪽에 배치 */
    align-items: center; /* 세로 중앙 정렬 */
  }
`;

const Community = styled.div`
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  background-color: #FFFFFF; /* 배경색 설정 */
  padding: 10px; /* 패딩 설정 */
  border: 1px solid #ccc; /* 테두리 스타일 설정 */
  width: 300px;
  height: 88.35px;
  margin-top: 20px;
  div:last-child {
    font-size: 8px;
    color: #49454F;
    margin-top: 10px;
  }
  div {
    display: flex;
    justify-content: space-between; /* 요소 사이의 공간을 최대화하여 버튼을 오른쪽에 배치 */
    align-items: center; /* 세로 중앙 정렬 */
  }  
`;

const EditButton = styled.button`
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'Poppins', sans-serif;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  background-color: #DFF1FF;
  color: black;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export default Mypage;