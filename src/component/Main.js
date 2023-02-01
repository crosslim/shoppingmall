import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jquery from 'jquery';
import $ from 'jquery';

// page Imports
import Header from './common/Header'
import Footer from './common/Footer'
import SideMenu from './common/SideMenu';
import { ListForm, SaleList, ReviewList } from './common/ListForm'

// style import
import '../style/common.css'
import '../style/main.css'

// data
import { itemList } from '../data/item_fashion';
import { mainSlideImage, searchWord } from '../data/shop_info';



function Main() {
  return (
    <div className="Main">
      <SideMenu />
      <Header />
      <Contents />
      <Footer />
    </div>
  );
}


function Contents() {

  //image slide - 
  let slidePage = 1;
  let slideTotalNum = mainSlideImage.length;
  let positionX = 100;

  return (
    <section className='main_contents'>

      {/* 상단 슬라이드 */}
      <section className='imageSlideWrap'>
        <h3>상단슬라이스</h3>      
        <ul className='imageSlide'>
          {
            mainSlideImage.map((a,i)=>{
              return (
                <li className='slideItem'><img src={mainSlideImage[i]} alt="" /></li>
              )
            })
          }
        </ul>
        <div className='slideDot'>
          {
            mainSlideImage.map((a,i)=>{
              return (
                <button className={i} onClick={()=>{
                  if(i + 1 != slidePage){
                    $(".imageSlide").css("transform", "translateX(-" + (positionX * i) + "vw)");
                    slidePage = i + 1;
                  }
                }}></button>
              )
            })
          }
          
        </div>
        {/* pre button */}
        <button className='slide_preBtn' onClick={()=>{
          $('.slideDot li').css('background','#aaa');
          if (slidePage == 1){
            $(".imageSlide").css("transform", "translateX(-"+ (positionX * (slideTotalNum - 1)) +"vw)");
            slidePage = slideTotalNum;
          } else { //4
            $(".imageSlide").css("transform", "translateX(-" + (positionX * (slidePage - 2)) + "vw)");
            slidePage = slidePage - 1;
          }
        }}>pre</button>

        {/* next button */}
        <button className='slide_nextBtn' onClick={()=>{
          $('.slideDot li').css('background','#aaa');
          if (slidePage == slideTotalNum){
            $(".imageSlide").css("transform", "translateX(0vw)");
            slidePage = 1;
          } else {
            $(".imageSlide").css("transform", "translateX(-" + (positionX * slidePage) + "vw)");
            slidePage = slidePage + 1;
          }          
        }}>next</button>
      </section>

      {/* 세일배너3개 */}
      <section className='saleBanner'>
        <h3>세일배너3개</h3>
        <div className='wid1050'>
          <img src='../images/shop/1.jpg' alt='' />
          <img src='../images/shop/2.jpg' alt='' />
          <img src='../images/shop/3.jpg' alt='' />
        </div>
      </section>

      {/* 쵸이스 아이템 */}
      <section className='choiceItem'>
        <h3>쵸이스 아이템</h3>
        <div>
          <p className='title'>
            <b>Choice item</b><br />평범한 일상, 소소한 즐거움
          </p>
          <div className='btnSet'>
            <button>Design</button>
            <button>interior</button>
            <button>Fashion</button>
          </div>
        </div>
        <ListForm itemList={itemList}/>
      </section>

      {/* 이벤트배너 */}
      <section className='banner1'>
        <h3>이벤트배너</h3>
        <img src='../images/shop/banner1.jpg' alt='' />
      </section>

      {/* 한주 인기 아이템 */}
      <section className='bestItem'>
        <h3>한주 인기 아이템</h3>
        <div className='title'>
          <b>new arrivals</b>
          더 좋은 제품으로 찾아온 신상품, 만나보세요
        </div>
        <ListForm itemList={itemList}/>
      </section>

      {/* 이벤트배너2 */}
      <section className='banner2'>
        <h3>이벤트배너</h3>
        <img src='../images/shop/banner2.jpg' alt='' />
      </section>

      {/* 신상상품목록 */}
      <section className='newItem'>
        <h3>신상 목록</h3>
        <div className='title'>
          <b>on sale</b>
          지금은 타임세일 진행중
        </div>
      </section>

      {/* 이벤트배너2 */}
      <section>
        <h3>이벤트배너2</h3>
      </section>

      {/* 세일 */}
      <section className='saleItem'>
        <h3>세일</h3>
        <SaleList itemList={itemList}/>
      </section>

      {/* MD's pick */}
      <section className='mdpickItem'>
        <h3>MD's pick</h3>
        <div className='title'>
          <b>MD's pick</b>
          다른 고객들은 이 상품을 보고 있어요
        </div>
        <ListForm itemList={itemList}/>
      </section>

      {/* 컬렉션 */}
      <section className='collection_banner'>
        <h3>컬렉션</h3>
        <div className='wid1050'></div>
      </section>
      
      {/* 베스트리뷰 */}
      <section className='bestReview'>
        <h3>베스트리뷰</h3>
        <div className='title'>
            <b>BEST REVIEWS</b>
          </div>
        <div className='wid1050'>
          <ReviewList />
        </div>
      </section>

      {/* 이벤트슬라이드 */}
      <section>
        <h3>이벤트슬라이드</h3>
        <div className='wid1050'></div>
      </section>
    </section>
  )
}
export default Main;
