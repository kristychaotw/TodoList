import React from "react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LogoutBtn } from '../components/Logout'
import { SignupBtn } from '../components/Signup'
import { LoginBtn } from '../components/Login'

export default function HomePage() {



  return (
    <>
      <div>
        <h2>React 練習專案</h2>
      </div>
      <main>歡迎光臨我的頁面</main>
      <LogoutBtn />
      <button>
        <Link to="/list">點此開始</Link>
      </button>
      <hr/>
      <SignupBtn />
      <hr />
      <LoginBtn />
      

    </>
  );
}
