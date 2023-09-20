import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Main from '../src/pages/Main/Main';
import Test from '../src/pages/Test';
import Start from '../src/pages/start_z'
import Login from '../src/pages/login_z'
import Join from '../src/pages/memjoin_z'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/main" element={<Main />} />  
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
