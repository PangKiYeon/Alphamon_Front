import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function BottomMenu() {
    const navigate = useNavigate();
    const [selectMenu, setSelectMenu] = useState('홈메뉴'); 
    console.log(selectMenu);

    const handleMenuClick = (menu) => {
        if (selectMenu === menu) {
            setSelectMenu('');
        } else {
            setSelectMenu(menu);
        }
    };
    
    return (
        <>
            <Container>
                <HomeMenu
                    src="/icons/HomeMenu.png"
                    alt="홈메뉴"
                    onClick={() => {
                        handleMenuClick('홈메뉴');
                        navigate('/Main');
                    }}
                    isSelected={selectMenu === '홈메뉴'}
                />
                <SecondMenu
                    src="/icons/SecondMenu.png"
                    alt="두번째메뉴"
                    onClick={() => {
                        handleMenuClick('두번째메뉴');
                        navigate('/Model');
                    }}
                    isSelected={selectMenu === '두번째메뉴'}
                />
                <CommuMenu
                    src="/icons/CommuMenu.png"
                    alt="커뮤메뉴"
                    onClick={() => {
                        handleMenuClick('커뮤메뉴');
                        navigate('/Cmain');
                    }}
                    isSelected={selectMenu === '커뮤메뉴'}
                />
                <MyMenu
                    src="/icons/MyMenu.png"
                    alt="마이메뉴"
                    onClick={() => {
                        handleMenuClick('마이메뉴');
                        navigate('/Mypage');
                    }}
                    isSelected={selectMenu === '마이메뉴'}
                />
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 414px;
    height: 72px;
    flex-shrink: 0;
    background: #FFF;
    box-shadow: 0px 2px 48px 0px rgba(0, 0, 0, 0.12);
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    z-index: 999;
`;

const MenuIcon = styled.img`
    width: 18px;
    height: 20px;
    flex-shrink: 0;
    margin-left: 42px;
    margin-right: 42px;
    cursor: pointer;
    transition: filter 0.3s;
    filter: ${props => (props.isSelected ? 'invert(48%) sepia(91%) saturate(1437%) hue-rotate(204deg) brightness(91%) contrast(95%)' : 'none')};
    color: ${props => (props.isSelected ? '#2A64D9' : '#C5C7CB')};`;

// HomeMenu icon 수정필요
const HomeMenu = styled(MenuIcon)`
    `; 

const SecondMenu = styled(MenuIcon)`

    `; 

const CommuMenu = styled(MenuIcon)`
    `; 

const MyMenu = styled(MenuIcon)`
    `; 

export default BottomMenu;