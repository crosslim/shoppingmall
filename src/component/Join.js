import Header from './common/Header'
import Footer from './common/Footer'
import SideMenu from './common/SideMenu';
import '../style/common.css'
import '../style/join.css'
import { Link } from 'react-router-dom'
import { terms } from '../data/shop_info'

function Join() {
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
  

  document.getElementById('checkAll')?.addEventListener('change', function(){

    
    
})

  return(
    <div className="join con">
      <div className="pagePath">
        <Link to='/'>홈</Link>
        &nbsp; &gt; &nbsp;
        회원가입
      </div>
      <div className="title">Join</div>
      <table>
        <tr>
          <td>아이디<span className='important'>*</span></td>
          <td>
            <input type="text" />(영문소문자/숫자, 4~16자)
          </td>
        </tr>
        <tr>
          <td>비밀번호<span className='important'>*</span></td>
          <td><input type="text" />(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)</td>
        </tr>
        <tr>
          <td>비밀번호 확인<span className='important'>*</span></td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td>이름<span className='important'>*</span></td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td>휴대전화</td>
          <td className='phoneNumber'>
          <input type="text" value='010' /> 
           - <input type="text" /> - <input type="text" /></td>
        </tr>
        <tr>
          <td>이메일<span className='important'>*</span></td>
          <td><input type="text" /></td>
        </tr>
        </table>
        <div className='terms'>
          <span>전체 동의</span>
          <ul>
            <li>
              <label><input id='checkAll' name='termsCheckAll' type='checkBox'/>이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다.</label>
            </li>
            {
              terms.map((a,i)=>{
                return(
                  <li>
                    <span>{ terms[i].title }</span>
                    <textarea>{ terms[i].text }</textarea>
                    <span>
                      { terms[i].check }
                      <label><input id={'checkBox'+[i]} name='termsCheck' type='checkBox'/>동의함</label>
                    </span>
                  </li>
                )
              })
            }
          </ul>
        </div>
    </div>
  )
}

export default Join;
