import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

function TopMenu() {
    const navigate = useNavigate();
    const [selectMenu, setSelectMenu] = useState('홈 화면'); 
    console.log(selectMenu);

    const handleMenuClick = (menu) => {
        if (selectMenu === menu)
        setSelectMenu(menu);
    };

    return (
    <>
        <Container>
            <HomeTag onClick={() => {setSelectMenu('홈 화면'); navigate('/Main');}}isSelected={selectMenu === '홈 화면'}>홈 화면</HomeTag>
            <GuideTag onClick={() => {setSelectMenu('주식 초보자 가이드'); navigate('/Starter');}}isSelected={selectMenu === '주식 초보자 가이드'}>주식 초보자 가이드</GuideTag>
            <ChatbotTag onClick={() => {setSelectMenu('챗봇 서비스 이용하기'); }}isSelected={selectMenu === '챗봇 서비스 이용하기'}>챗봇 서비스 이용하기</ChatbotTag>
            {/* <HighlightBox isSelected={selectMenu === '주식 초보자 가이드'} /> */}
        </Container>
    </>
    );

    // topmenu 를 props 끌어와서 state마다 components를 보여주는 방식은 어떤지
}

const Container = styled.div`
    display: flex;
    width: 386px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 14px;
    background: #F2F2F2;
    font-family: 'Poppins', sans-serif;
    font-size : 10.25px;
    position: absolute;
    top: 126px;
    left: 14px;
    justify-content: space-between;
    align-items: center; 
`;

const HomeTag = styled.div`
    width: 120px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 12px;
    // background: #FFF;
    // box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.06);
    color: ${props => (props.isSelected ? '#2A64D9' : 'black')};
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const GuideTag = styled.div`
    color: ${props => (props.isSelected ? '#2A64D9' : 'black')};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ChatbotTag = styled.div`
    color: ${props => (props.isSelected ? '#2A64D9' : 'black')};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`;

// const highlightAnimation = keyframes`
//     from {
//         transform: translateX(0);
//     }
//     to {
//         transform: translateX(100%);
//     }
// `;

// const HighlightBox = styled.div`
//     width: 120px;
//     height: 38px;
//     border-radius: 12px;
//     background: #FFF;
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: -1;
//     transform: ${props => (props.isSelected ? 'translateX(0)' : 'translateX(100%)')};
//     animation: ${highlightAnimation} 0.3s ease-in-out forwards;
// `;

export default TopMenu;