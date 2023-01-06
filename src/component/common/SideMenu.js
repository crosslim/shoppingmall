import React from 'react';
import { shopInfo } from '../../data/shop_info'

function SideMenu() {
  return (
    <section className='sidemenu'>
      <div className='sideMenu_btn'>
        <button className='sideMenuBtn' onClick={()=>{sideMenu()}}>
          <img src="images/shop/close.png" alt="" />
        </button>
        <button><img src="images/shop/quick_ico_01.png" alt="" /></button>
        <button><img src="images/shop/side_board.png" alt="" /></button>
        <button><img src="images/shop/side_kakao.png" alt="" /></button>
        <button><img src="images/shop/side_naver.png" alt="" /></button>
        <button><img src="images/shop/side_instar.png" alt="" /></button>
      </div>
      <div className='sideMenu_con'>
        {/* banner */}
        <div className='side_banner'>
          <span><img src="images/shop/side_banner1.jpg" alt="" /></span>
          <span><img src="images/shop/side_banner2.jpg" alt="" /></span>
        </div>

        {/* button */}
        <div className='side_buttonSet'>
          <span><button>카달로그/목록</button></span>
          <span><button>이벤트</button></span>
          <span>
            <button>쿠폰</button>
            <button>이벤트</button>
          </span>
          <span>
            <button>적립금</button>
            <button>입고지연</button>
          </span>
        </div>

        {/* customer center */}
        <div className='side_customer'>
          <span className='title'>고객센터</span>
          <span className='customNumber'>{shopInfo.customerCenter}</span>
          <span className='time'>
            평일 : {shopInfo.businessHours.Weekday}<br />
            점심 : {shopInfo.businessHours.lucnh}<br />
            {shopInfo.businessHours.holiday2}
          </span>
          <button>문의게시판</button>
          <button>자주 묻는 질문</button>
        </div>

        {/* bank */}
        <div className='side_bank'>
          <span className='title'>계좌안내</span>
          <span className='bankNum'>{shopInfo.bank[0].bankName} {shopInfo.bank[0].bankNum}</span>
          <span className='bankNum'>{shopInfo.bank[1].bankName} {shopInfo.bank[1].bankNum}</span>
        </div>
      </div>
    </section>
  );

  // 사이드메뉴 토글버튼
  function sideMenu(){
    let side = document.querySelector('.sidemenu');
    if(side != null){
      side.classList.toggle('sideView');
    }
  }
}

export default SideMenu;
