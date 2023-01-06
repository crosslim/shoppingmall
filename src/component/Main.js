import React from 'react';
import { Link } from 'react-router-dom'

// page Imports
import Header from './common/Header'
import Footer from './common/Footer'
import SideMenu from './common/SideMenu';
import ListForm from './common/ListForm'

// style import
import '../style/common.css'
import '../style/main.css'

// data
import { itemList } from '../data/item_fashion';
import { mainSlideImage } from '../data/shop_info';



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

  return (
    <section className='main_contents'>
      {/* 상단 슬라이드 */}
      <section className='imageSlideWrap'>
        <h3>상단슬라이스</h3>
        <ul className='imageSlide'>
          <button className="btnLeft">left</button>
          <button className="btnRight">right</button>
          <div className='indicator'>
          {
            mainSlideImage.map((a,i)=>{
              return(
                  <span></span>
              )
            })
          }
          </div>
          {
            mainSlideImage.map((a,i)=>{
              return (
                <li className='slideItem'><img src={mainSlideImage[i]} alt="" /></li>
              )
            })
          }
        </ul>
      </section>

      {/* 세일배너3개 */}
      <section>
        <h3>세일배너3개</h3>
        <div className='wid1050'></div>
      </section>

      {/* 쵸이스 아이템 */}
      <section className='choiceItem'>
        <h3>쵸이스 아이템</h3>
        <ListForm itemList={itemList}/>
      </section>

      {/* 이벤트배너 */}
      <section>
        <h3>이벤트배너</h3>
      </section>

      {/* 한주 인기 아이템 */}
      <section className='bestItem'>
        <h3>한주 인기 아이템</h3>
        <ListForm itemList={itemList}/>
      </section>

      {/* 이벤트배너1 */}
      <section>
        <h3>이벤트배너1</h3>
      </section>

      {/* 신상상품목록 */}
      <section className='newItem'>
        <h3>신상 목록</h3>
      </section>

      {/* 이벤트배너2 */}
      <section>
        <h3>이벤트배너2</h3>
      </section>

      {/* 세일 */}
      <section className='saleItem'>
        <h3>세일</h3>
        <ListForm itemList={itemList}/>
      </section>

      {/* MD's pick */}
      <section className='mdpickItem'>
        <h3>MD's pick</h3>
        <ListForm itemList={itemList}/>
      </section>

      {/* 컬렉션 */}
      <section>
        <h3>컬렉션</h3>
        <div className='wid1050'></div>
      </section>
      
      {/* 베스트리뷰 */}
      <section>
        <h3>베스트리뷰</h3>
        <div className='wid1050'></div>
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
