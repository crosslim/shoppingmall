import Header from './common/Header'
import Footer from './common/Footer'
import SideMenu from './common/SideMenu';
import '../style/common.css'
import '../style/login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <SideMenu />
      <Header />
      <Contents />
      <Footer />
    </div>
  );
}

function Contents(){


  function form_switch(){
    document.getElementById('btn1')?.classList.toggle('current');
    document.getElementById('btn2')?.classList.toggle('current');
    document.querySelector('.join')?.classList.toggle('hide');
    document.querySelector('.no_join')?.classList.toggle('hide');
  }
  
  
  return(
    <div className="company con">
      <div className="pagePath">
        <Link to='/'>홈</Link>
        &nbsp; &gt; &nbsp;
        <Link to='/login'>로그인</Link>
      </div>
      <div className="title">Login</div>
      <div className="login">
        <div className='buttonSet1'>
          <button id='btn1' className='formSwitch current' onClick={()=>{form_switch()}}>회원 로그인</button>
          <button id='btn2' className='formSwitch ' onClick={()=>{form_switch()}}>비회원</button>
        </div>
        <form className='loginForm'>
          {/* 로그인 */}
          <div className="join form">
            <input type='text' name='id' placeholder='아이디' />
            <input type='password' name='pw' placeholder='비밀번호' />
            <span>보안접속</span>
            <button className='btnLogin'>로그인</button>
            <div className="buttonSet2">
              <Link to=''>아이디 찾기</Link><span>|</span>
              <Link to=''>비밀번호 찾기</Link><span>|</span>
              <Link to='/join'>회원가입</Link>
            </div>
            <div className='snsLogin'>
              <button><img src="images/shop/login_facebook.png" alt="" /> 페이스북 로그인</button>
              <button><img src="images/shop/login_naver.png" alt="" /> 네이버 로그인</button>
            </div>
          </div>

          {/* 비회원 주문조회 */}
          <div className="no_join form hide">
            <div className='inputSet'>
              <div>
                <span>비회원 주문자명</span>
                <input type="text" disabled/>
              </div>
              <div>
                <span>비회원 주문자명</span>
                <input type="text" disabled/>
              </div>
              <div>
                <span>비회원 주문자명</span>
                <input type="text" disabled/>
              </div>
            </div>
            <div className="alertTxt">
              비회원의 경우, 주문조회 페이지에서<br />
              주문내역 확인이 가능합니다.
            </div>
            <button className='btn'>비회원 주문조회 바로가기</button>
            <div className='joinTxt'>
              아직 회원이 아니신가요?<br />
              회원이 되시면 다양한 혜택을 누리실 수 있습니다.
              <button className='btn btnJoin'>회원가입</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )  
}

export default Login;
