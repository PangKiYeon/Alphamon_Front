import Header from '../../components/Main/Header';
import BottomMenu from '../../components/Main/BottomMenu';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


function Modelcc() {
  const navigate = useNavigate();

  const handleNext1 = () => {
    navigate('/modelc');
  };

  const handleNext2 = () => {
    navigate('/modelccc');
  };
  
  return (
    <Container>
      <Header />
      <Text>다음 페이지에서 결과를 확인할 수 있어요!</Text>
      <Text1>유의사항을 꼭 읽어주세요</Text1>
      <BoxesContainer>
        <Box1>
          <BoxContent>
            <h3>포토폴리오 최적화 서비스 안내</h3>
            <h4>당신의 주식 포토폴리오가 안전한지 궁금하시나요? <br />
            우리의 인공지능 모델이 위험성을 계산해서 <br />
            최적의 안전 비율을 제안해드릴게요!</h4>
          </BoxContent>
        </Box1>
        <Box4>
          <BoxContent>
            <h3>유의사항</h3>
            <h4>본 서비스는 다양한 알고리즘과 최신 인공지능 기술을 활용하여 주식의 미래 주가를 예측하고 있습니다. <br />
            하지만 투자는 항상 리스크가 동반되므로, 여러 정보와 본 서비스의 예측을 종합적으로 고려하여 최종 결정을 내리시길 바랍니다.</h4>
          </BoxContent>
        </Box4>
      </BoxesContainer>
      <ButtonContainer>
          <Button1 onClick={handleNext1}>이전</Button1>
          <Button2 onClick={handleNext2}>결과보기</Button2>
      </ButtonContainer>
      <BottomMenu />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
`;

const Text = styled.div`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0;
  margin-left: 35px;
  font-weight: bold;
  text-align: left;
`;

const Text1 = styled.div`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  color: #A4A4AA;
  margin-bottom: 16px;
  margin-left: 35px;
  font-weight: bold;
  text-align: left;
`;

const BoxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Box1 = styled.div`
  background-color: #FFFFFF;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  width: 345px;
  height: 150px;
  border-radius: 16px;
`;

const Box4 = styled.div`
  background-color: #FFFFFF;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  width: 345px;
  height: 175px;
  border-radius: 16px;
  margin-top: 30px;
`;

const BoxContent = styled.div`
  display: flex;
  align-items: center; 
  position: relative;

  h2 {
    margin-bottom: 10px;
    margin-left: 20px; 
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
  }

  h3, h4 {
    display: block;
    margin-bottom: 10px;
    margin-right: 10px;
    font-family: 'Poppins', sans-serif;
  }
  
  h3 {
    font-size: 16px;
    position: absolute; 
    top: 0; 
  }
  
  h4 {
    font-size: 14px;
    color: #A4A4AA;
    margin-top: 60px;
  }

  h5 {
    font-size: 14px;
    color: #A4A4AA;
    margin-top: 60px;
  }

  img {
    max-width: 100%;
    height: auto;
    width: 48px;
    height: 48px;
    margin-left: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 80px;
`;

const Button1 = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  width: 168px;
  height: 55px;
  background-color: #CFCFCF;
  color: #black;
  border: none;
  border-radius: 16px;
  cursor: pointer;
`;

const Button2 = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  width: 168px;
  height: 55px;
  background-color: #DFF1FF;
  color: #black;
  border: none;
  border-radius: 16px;
  cursor: pointer;
`;

export default Modelcc;
