import React from 'react';
import './login_sty.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { serverUrl , loginEndpoint } from '../../config';

const LoginUrl = serverUrl + loginEndpoint;

function MemLogin() {

    const navigate = useNavigate();
    let userid = document.querySelector('#userid');
    let userpassword = document.querySelector('#userpassword');

    const [uspasswordType, setuspasswordType] = useState('password');

    const handleuspasswordType = () => {
        setuspasswordType(prevType => (prevType === 'password' ? 'text' : 'password'));
    }

    const [useinputs, setuseInputs] = useState({
        userid: '',
        userpassword: '',
    });

    const onChange = (e) => {
        const { name, value } = e.target
        const nextInputs = {...useinputs, [name]: value,}
        setuseInputs(nextInputs);
    }

    function CheckuseEmail(str) {
        let pass1 = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,}$/;
        return(pass1.test(str));
    };

    function letsLogin() {
        if(useinputs.userid===""){
            alert("아이디를 입력해주세요!");
            userid.focus();
            return;
        }else if(useinputs.userpassword===""){
            alert("비밀번호를 입력해주세요!");
            userpassword.focus();
            return
        }else if(CheckuseEmail(useinputs.userid) === false){
            alert("이메일 형식을 지켜주세요!")
            userid.focus();
            return
        }else{
            fetch(LoginUrl,
        {
          method: 'post',
          headers: {
            'content-type': 'application/json;charset=UTF-8'
          },
          body : JSON.stringify({
            email: useinputs.userid,
            password: useinputs.userpassword,
          })

        }).then(res => res.json())
        .then(responseData => {
          if(responseData.code === 200) {
            alert(responseData.message);
            localStorage.setItem('nickname',responseData.data.nickname);
            localStorage.setItem('tendency',responseData.data.tendency);
            navigate('/main');
          }else if (responseData.code === 400) {
            alert(responseData.message);
          }else {
            alert('오류가 발생하였습니다');
          }
        })
        .catch(error => {
          console.error('오류 발생:', error);
        });
        }
    }

    return (
        <div className='z-login'>
            <button className='lftback'><AiOutlineLeft /></button>
            <span className='logintitle'>Login</span>

            <div className='loginform'>
                <div className='form-l'>
                    <h3 className='idtitle'>Email Address</h3>
                    <input type="text" id="userid" name="userid" onChange={onChange} placeholder='Enter Your Email'/>
                </div>
                <div className='form-l'>
                    <h3 className='pswtitle'>Password</h3>
                    <input type={uspasswordType} id="userpassword" name="userpassword" value={useinputs.userpassword} onChange={onChange}
                    placeholder='Enter Your Password'/>
                    <span onClick={handleuspasswordType} className='eyebtn'>
                        {uspasswordType === 'text' ? <AiOutlineEye /> : <AiOutlineEyeInvisible/> }
                    </span>
                </div>
            </div>

            <div className='loginbtn'>
            <button className='btnlogin' onClick={letsLogin} id="btnlogin">Log in</button>
          </div>

        </div>
    );
}

export default MemLogin;