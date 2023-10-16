import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Main from '../src/pages/Main/Main';
import Test from '../src/pages/Test';
import Start from '../src/pages/start_z'
import Login from '../src/pages/login_z'
import Join from '../src/pages/memjoin_z'
import Cmain from '../src/pages/community/Cmain'
import Post from '../src/pages/community/Post'
import Mypage from '../src/pages/mypage/mypage'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/main" element={<Main />} />  
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/cmain" element={<Cmain />} />
        <Route path="/post/:postId" element={<Post />} /> 
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
