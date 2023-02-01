import React from 'react';
import Header from './common/Header'
import Footer from './common/Footer'
import SideMenu from './common/SideMenu';
import { itemList } from '../data/item_fashion';
import { payInfo, deliveryInfo, returnInfo } from '../data/detail_common';
import { Link, useParams } from 'react-router-dom'
import '../style/common.css'
import '../style/detail.css'

function Detail() {
  return (
    <div className="detail">
      <SideMenu />
      <Header />
      <Contents />
      <Footer />
    </div>
  );
}

function Contents(){
  let {id} = useParams();
  let productId;
  if(id != null){
    productId = parseInt(id);
  }
 
  let currentProduct = itemList.find(function(x){
    return x.id == productId
  });

  return(
    <div className='detail_wrap'>
      <div className="categoryTxt">
        <Link to='/'>Home</Link>&nbsp;&nbsp; &gt;&nbsp;&nbsp;  
        <Link to='/fashion'>{currentProduct?.categoryName}</Link> &nbsp;&gt; &nbsp; {currentProduct?.itemName}
      </div>
      <div className="detailTop">
        <div className="thum2">
          <img src={'../' + currentProduct?.imagePath + 'item' + currentProduct?.id + '/thum2.jpg'} alt="" />
        </div>
        <div className="productInfo">
          <form >
            <ul>
              <li className='pdName'>
                <span className="title">{currentProduct?.itemName}</span>
                {currentProduct?.subTitle}
              </li>
              <li className='price'>
                <span className="title">
                  {
                    currentProduct?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                </span>
                won
              </li>
              <li className='delivery'>
                <span className="subtitle">배송방법</span>
                <span className="text">택배</span>
              </li>
              <li className='color'>
                <span className="subtitle">색상</span>
                <span className="text">
                  {
                    currentProduct?.productColor.map((a,i)=>{
                      return(
                        <>
                        <button className='colorBar' style={{background: currentProduct?.productColor[i]}}></button><span className='selected'>V</span>
                        </>
                      )
                    })
                  }
                  <b className='importantText'>&#91;필수&#93; 옵션을 선택해 주세요</b>
                </span>
              </li>
              <li className='packaging'>
                <span className="subtitle">선물포장</span>
                <span className="text">
                  <label><input type='radio' name='packaging'/>포장</label>
                  <label><input type='radio' name='packaging' />미포장</label><br />
                 <b className='importantText'>&#91;필수&#93; 옵션을 선택해 주세요</b>
                </span>
              </li>
                <table>
                  <tr>
                    <td>상품명</td>
                    <td>수량</td>
                    <td>가격</td>
                  </tr>
                  <tr>
                    <td>{currentProduct?.itemName}<span></span></td>
                    <td></td>
                    <td>
                      {
                        currentProduct?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                      }
                    </td>
                  </tr>
                </table>
                <span className='totalprice'><b>0원</b><br />
                &#91;최소주문수량 1개이상&#93;</span>
              <li className='buttonSet'>
                <button className="buy">바로구매</button>
                <button className="cart">장바구니</button>
                <button className="wishlist">관심상품</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <Recommend />
      <CommonTxt />
    </div>
  )
  document.querySelector('.colorBar')?.addEventListener('click',function(){
    document.querySelector('.selected')?.classList.add('selectedShow');
  })
  //span.selected

}

function Recommend(){
  return (
    <div className='recommend'>

    </div>
  )
}

//배송 교환 및 반품 안내
function CommonTxt(){
  return(
    <div className='information'>
      {/* 결제정보 */}
      <ul className='pay_info'>
        <li className='title'>
          {payInfo.title}
        </li>
        <li>
          {
            payInfo.txt.map((a,i)=>{
              return(
                <span>- {payInfo.txt[i]}</span>
              )
            })
          }
        </li>
      </ul>

      {/* 배송정보 */}
      <ul className='delivery_info'>
        <li className='title'>
          {deliveryInfo.title}
        </li>
        <li>
          {
            deliveryInfo.txt.map((a,i)=>{
              return(
                <span>
                  {deliveryInfo.txt[i].subTitle} : 
                  {deliveryInfo.txt[i].txt}
                </span>
              )
            })
          }
        </li>
      </ul>

      {/* 교환반품안내 */}
      <ul className='return_info'>
        <li className='title'>
            {returnInfo.title}
        </li>
        <li className='info'>
            <span className='subtitle'>
              {returnInfo.txt1.subTitle}
            </span>
            {
              returnInfo.txt1.txt.map((a,i)=>{
                return (
                  <span>{returnInfo.txt1.txt[i]}</span>
                )
              })
            }
        </li>
        <li className='info'>
          <span className='subtitle'>
            {returnInfo.txt2.subTitle}
          </span>
          {
            returnInfo.txt2.txt.map((a,i)=>{
              return (
                <span>{returnInfo.txt2.txt[i]}</span>
              )
            })
          }
        </li>
      </ul>
    </div>
  )
}
export default Detail;
