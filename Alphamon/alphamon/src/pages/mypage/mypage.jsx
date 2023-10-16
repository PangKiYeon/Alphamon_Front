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
      
      <BottomMenu></BottomMenu>
    </Container>
  </>
  );
}

const Container = styled.div`
`;


export default Mypage;