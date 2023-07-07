import './App.css';
import './style.css';

function App() {
  return (
    <div id="wrapper">
      <div id="header">
        <div className="header-logo">
          <div className="header-logo-icon"></div>
          <div className="header-logo-text">Dongs Board</div>
        </div>
        <div className="header-search">
          <div className="header-search-icon"></div>
        </div>
      </div>
      <div id="main">
        <div className="main-left-container">
          <div className="main-left-icon"></div>
          <div className="main-left-text-box">
            <div className="main-left-text">환영합니다</div>
            <div className="main-left-text">DONGS BOARD 입니다.</div>
          </div>
        </div>
        <div className="main-right-container">
          <div className="main-right-card">
            <div className="main-right-card-top">
              <div className="sign-in-text">로그인</div>
              <div className="sign-in-input-container">
                <div className="input-box">
                  <div className="input-label">이메일 주소</div>
                  <div className="input-container">
                    <input className="input" placeholder="이메일 주소를 입력해 주세요." />
                  </div>
                </div>
                <div className="input-box">
                  <div className="input-label">비밀번호</div>
                  <div className="input-container">
                    <input className="input" type="password" placeholder="비밀번호를 입력해 주세요." />
                    <div className="show-icon"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-right-card-bottom">
              <button className="sign-in-button" >로그인</button>
              <div className="sign-up-description">
                신규 사용자이신가요? <a href="#" className="emphasis">회원가입</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default App;
