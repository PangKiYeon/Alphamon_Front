import React from 'react';
import './memjoin_sty.css';
import { useState } from 'react';
import { AiOutlineLeft, AiFillLock, AiFillUnlock } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { serverUrl , joinEndpoint } from '../config';

const JoinUrl = serverUrl + joinEndpoint;

  function Memjoin() {

    const navigate = useNavigate();
    let emailid = document.querySelector('#emailid');
    let password = document.querySelector('#password');
    let nickname = document.querySelector('#nickname');
    let birth = document.querySelector('#birth');
    let sex = document.querySelector('#sex');
    let career = document.querySelector('#career');
    let agreebox = document.querySelector('#agreebox');

    const [passwordType, setpasswordType] = useState('password');

    const handlepasswordType = () => {
      setpasswordType(prevType => (prevType === 'password' ? 'text' : 'password'));
    }

    const [nicknameAv, setnicknameAv] = useState(false);

    const [agreeAv, setagreeAv] = useState(false);

    const handleagreeAv = () => {
      setagreeAv(!agreeAv);
    };

    const [inputs, setInputs] = useState({
      emailid: '',
      password: '',
      nickname: '',
      birth: '',
      sex: '',
      career:'',
    });

    const onChange = (e) => {
      const { name, value } = e.target
      const nextInputs = {...inputs, [name]: value,}
      setInputs(nextInputs);
    }

    function CheckEmail(str) {
      let pass1 = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,}$/;
      return(pass1.test(str));
    };

    function CheckPassword(str) {
      let pass2 = /^[A-Za-z0-9]{4,15}$/;
      return(pass2.test(str))
    };

    function CheckBirth(str) {
      let pass3 = /^\d{4}-\d{2}-\d{2}$/;
      return(pass3.test(str))
    };
    
    
    function letsJoin() {
      if(inputs.emailid===""){
        alert("아이디를 입력해주세요!");
        emailid.focus();
        return;
      }else if(inputs.password===""){
        alert("비밀번호를 입력해주세요!");
        password.focus();
        return
      }else if(inputs.nickname===""){
        alert("닉네임을 입력해주세요!");
        nickname.focus();
        return
      }else if(inputs.birth===""){
        alert("생일을 입력해주세요!");
        birth.focus();
        return
      }else if(inputs.sex===""){
        alert("성별을 선택해주세요!");
        sex.focus();
        return
      }else if(inputs.career===""){
        alert("직업을 선택해주세요!");
        career.focus();
        return
      }else if(CheckEmail(inputs.emailid) === false){
        alert("이메일 형식을 지켜주세요!")
        emailid.focus();
        return
      }else if(CheckPassword(inputs.password) === false){
        alert("비밀번호 형식을 지켜주세요!")
        password.focus();
        return
      }else if(CheckBirth(inputs.birth) === false){
        alert("생년월일 형식을 지켜주세요!")
        birth.focus();
      }else if(agreeAv === false){
        alert("개인 정보 수집 및 이용에 동의해주세요!")
        agreebox.focus();
      }
      else{
        localStorage.setItem("nickname", inputs.nickname);
        fetch(JoinUrl,
        {
          method: 'post',
          headers: {
            'content-type': 'application/json;charset=UTF-8'
          },
          body : JSON.stringify({
            email: inputs.emailid,
            password: inputs.password,
            nickname: inputs.nickname,
            birth: inputs.birth,
            gender: inputs.sex,
            career: inputs.career
          })
        }).then(res => res.json())
        .then(responseData => {
          if(responseData.code === 201) {
            alert(responseData.message);
            navigate('/login');
          }else if (responseData.code === 400) {
            alert(responseData.message);
          }else if (responseData.code === 500) {
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
      <div className='z-join'>
        
        <button className='leftback' onClick={()=>navigate('/')} title='gostart'><AiOutlineLeft /></button>
        <h2 className='jointitle'>Let's sign up!</h2>

        <div className='joinform'>

          <div className='form-z'>
            <input type="text" id="emailid" name="emailid" onChange={onChange}
            placeholder='아이디 (email)'/>
          </div>

          <div className='form-z'>
            <input type={passwordType} id="password" name="password" value={inputs.password} onChange={onChange}
            placeholder='Password (4~15자 영문 대소문자, 숫자 혼합)'/>
            <span onClick={handlepasswordType} className='lockbtn'>
              {passwordType === 'text' ? <AiFillUnlock /> : <AiFillLock/> }
            </span>
          </div>

          <div className='form-z'>
            <input type= "text" id ="nickname" name="nickname" onChange={onChange}
            placeholder='닉네임'/>
            <button className='nickbtn'>중복확인</button>
          </div>

          <div className='form-z'>
            <input type="text" id="birth" name="birth" onChange={onChange}
            placeholder='생년월일 (xxxx-xx-xx)'/>
          </div>

          <div className='form-z'>
            <select id="sex" name='sex' onChange={onChange}>
              <option disabled hidden selected>성별</option>
              <option value="boy">남</option>
              <option value="girl">여</option>
            </select>
          </div>

          <div className='form-z'>
            <select id="career" name='career' onChange={onChange}>
              <option disabled hidden selected>직업</option>
              <option value="service">서비스업</option>
              <option value="buisness">경영 및 사무</option>
              <option value="public">공공부문</option>
              <option value="engineering">기술 및 엔지니어링</option>
              <option value="media">예술 및 미디어</option>
              <option value="agriculture">농업</option>
              <option value="manufacturing">제조 및 건설</option>
              <option value="medical">의료 및 보건</option>
              <option value="others">기타</option>
            </select>
          </div>

          <div className='agreebox'>
            <input type="checkbox" id="agreebox" onClick={handleagreeAv}/>
            <span className='writecheck'>개인 정보 수집 및 이용에 동의합니다.</span>
          </div>

          <div className='joinbtn'>
            <button className='btnsign' onClick={letsJoin} id="btnsign">Sign up</button>
          </div>
        </div>
      </div>
    );
  }

export default Memjoin;