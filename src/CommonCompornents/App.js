import './App.scss';
import "../_develop/asset.scss"
import { Start } from "../page_Start/Start";
import { Main } from "../page_Main/Main";
import { Course } from '../page_Course/Course';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NewAccount } from '../page_Account/NewAccount';
import { Login } from '../page_Account/Login';
import { QR } from '../page_QR/QR';
import { Mat } from '../page_Mat/Mat';





function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          {/* --- ユーザー情報関係 --- */}
          <Route path='/creatAccount' element={<NewAccount />}/>
          <Route path='/login' element={<Login />} />
          {/* --- メイン --- */}
          <Route path="/main" element={<Main />} />
          <Route path='/course' element={<Course />}/>
          {/* --- 機能 --- */}
          <Route path='/QR' element={<QR />} />


          {/* --- 外部ページ --- */}
          <Route path='/stampMat' element={<Mat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
