
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import jquery from 'jquery';
import $ from 'jquery';
import { searchWord } from '../../data/shop_info';

function Header() {
  return (
    <header className='header'>
      <TopBanner />
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
            <img src="../images/shop/logo.png" alt="" /></Link>
          </div>
          <div className='menu-right'>
            <span><Link to='/community'>커뮤니티</Link></span>
            <span><Link to='/customerCenter'>고객센터</Link></span>
          </div>
        </div>
      </div>   
      <TopMain />
      <CategoryBar />
    </header>
  );
}

//상단 이벤트 배너
function TopBanner(){
  let [topBanner, setTopbanner] = useState(0);

  useEffect(()=>{ //사용이유 : html 랜더링이 다된후 실행됨. 오래걸리는작업 넣기(서버에서 데이터가져오는등)
    console.log(topBanner);
    $('.topBannerClose').click(function(){
      if($('input:radio[name=bannerHideCheck]').is(":checked")){
        setTopbanner(1);
      }
      $('.topBanner').hide();
    })
    console.log(topBanner);
  })
  return (
    <>
    {
      topBanner === 0
      ? <div className='topBanner'>
      <div>
        <label name='bannerHideCheck'>
          <input type='checkBox' name='bannerHideCheck' />
            <span>오늘하루 보지않기</span>
        </label>
        <button className='topBannerClose'><img src='../images/shop/close.png' alt='' /></button>
      </div>
    </div>
      : null
    }
    </>
  )
}

//nav
function TopMain(){
  useEffect(()=>{
    
    //검색어 박스
    $('.list').css('display','none');    
    $('.searchBox').hover(function(){
      $('.list').css('display','block'); 
    }, function(){
      $('.list').css('display','none');
    }
    )

    //실시간 검색어
    $(function() {
       var ticker = function() { 
        setTimeout(function(){
           $('.searchList li:first').animate( {marginTop: '-20px'}, 400, function() {
             $(this).detach().appendTo('.searchList').removeAttr('style'); 
            }); ticker(); 
          }, 3000); 
        }; ticker(); 
      });


    $('.thum2').hide();
    let currentImg = 1;
    setInterval(function() { 
      let currentImgName;
      $('.thum img').fadeOut();
      if(currentImg == 1){
        currentImgName = '.thum2'
        $(currentImgName).fadeIn();
        currentImg = 2;
      }else{
        currentImgName = '.thum1'
        $(currentImgName).fadeIn();
        currentImg = 1;
      }
    }, 4000);

    $('.center-Logo a img').hide();
    
  })
  return(
    <div className='topMain'>
      <div className='thum'>
        <img className='thum1' src='../images/shop/top_thum1.png' alt='' />
        <img className='thum2' src='../images/shop/top_thum2.png' alt='' />
      </div>
      <div className='logo'>
        <Link to='/'><img src='../images/shop/mainLogo.png' alt='' /></Link>
      </div>
      <div className='search'>
        <div className='searchBar'>
          <input placeholder='검색어 입력'></input>
          <button></button>
        </div>
        <div className='searchBox'>
          <ul className='searchList'>
            {
              searchWord.map((a,i)=>{
                return(
                  <li><span>{[i+1]}.</span>{searchWord[i]}</li>
                )
              })
            }
          </ul>
        </div>
          <ul className='list'>
            <li>인기 검색어</li>
            {
              searchWord.map((a,i)=>{
                return(
                  <li><span>{[i+1]}.</span>{searchWord[i]}</li>
                )
              })
            }
          </ul>
      </div>
    </div>
  )
}

function CategoryBar() {
  return(
    <div className='category'>
      <div>
        <div className='category_btn'></div>
        <div className='category_list'>
          <span><a>브랜드</a></span>
          <span><Link to='/company'>회사소개</Link></span>

          <span><Link to='/category/designStationery'>디자인문구</Link></span>
          <span><Link to='/category/fashion'>패션잡화</Link></span>
          <span><Link to='/category/beauty'>뷰티</Link></span>
          <span><Link to='/category/interior'>인테리어</Link></span>
          <span><Link to='/category/items'>소품</Link></span>
          <span><Link to='/category/digital'>디지털</Link></span>
          <span><Link to='/category/sale'>타임세일</Link></span>
          <span><a>추가메뉴</a></span>
        </div>
      </div>
    </div>
  )
}

export default Header;
