import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div>
        {/* top menu */}
        <div className='topMenu'>
          <div>
            <div className='menu-Left'>
              <span><Link to='/login'>로그인</Link></span>
              <span><Link to='/join'>회원가입</Link></span>
              <span><Link to='/cart'>장바구니</Link></span>
              <span><Link to='/order'>주문조회</Link></span>
              <span><Link to='/mypage'>마이페이지</Link></span>
            </div>
            <div className='center-Logo'><Link to='/'>
              <img src="images/shop/logo.png" alt="" /></Link>
            </div>
            <div className='menu-right'>
              <span><Link to='/community'>커뮤니티</Link></span>
              <span><Link to='/customerCenter'>고객센터</Link></span>
            </div>
          </div>
        </div>

        {/* center logo */}
        <div className='topLogo'>
          <div>
            <div className='topLogo_product'></div>
            <div className='topLogo_logo'></div>
            <div className='topLogo_search'></div>
          </div>
        </div>

        {/* category */}
        <div className='category'>
          <div>
            <div className='category_btn'></div>
            <div className='category_list'>
              <span><a>브랜드</a></span>
              <span><Link to='/company'>회사소개</Link></span>
              <span><a>디자인문구</a></span>
              <span><a>패션잡화</a></span>
              <span><a>뷰티</a></span>
              <span><Link to='/category/interior'>인테리어</Link></span>
              <span><a>소품</a></span>
              <span><Link to='/category/digital'>디지털</Link></span>
              <span><a>타임세일</a></span>
              <span><a>추가메뉴</a></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
