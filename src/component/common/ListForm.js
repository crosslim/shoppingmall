import React from 'react';
import { Link } from 'react-router-dom'
import { review_List } from '../../data/review.js'

function ListForm(props) {
  let currentArray = props.itemList;
  
  return(
    <div className='wid1050 itemBox'>
      {
        currentArray.map((a,num)=>{
          return(
            <Link to={'/Detail/' + currentArray[num].id} className='item' id={'item' + currentArray[num].id}>
              <span className='img'><img src={'../'+currentArray[num].imagePath + 'item' + currentArray[num].id + '/thum1.jpg'} alt="" /></span>
              <span className='colorBar'>
                  {
                    currentArray[num].productColor.map((a,j)=>{
                      return(
                        <span className='color' style={{background : currentArray[num].productColor[j]}}></span>
                      )
                    })
                  }
                </span>
                <span className='name'>{currentArray[num].itemName}</span>
                <span className='subTxt'>{currentArray[num].subTitle}</span>
                <span className='price'>
                  {
                    currentArray[num].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }&nbsp;Won
                </span>
                <span className='review'>reviews <span>{currentArray[num].review.length}</span></span>
            </Link>
          )
        })
      }
    </div>
  )
}

function SaleList(props){
  let currentArray = props.itemList;
  
  return(
    <div className='wid1050 itemBox'>
      {
        currentArray.map((a,num)=>{
          return(
            <Link to={'/Detail/' + currentArray[num].id} className='item' id={'item' + currentArray[num].id}>
              <span className='img'><img src={'../'+currentArray[num].imagePath + 'item' + currentArray[num].id + '/thum1.jpg'} alt="" /></span>
              <div className='eventAlert'>이벤트가 종료 되었습니다</div>
              <span className='colorBar'>
                  {
                    currentArray[num].productColor.map((a,j)=>{
                      return(
                        <span className='color' style={{background : currentArray[num].productColor[j]}}></span>
                      )
                    })
                  }
                </span>
                <span className='name'>{currentArray[num].itemName}</span>
                <span className='subTxt'>{currentArray[num].subTitle}</span>
                <span className='price'>
                  {
                    currentArray[num].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }&nbsp;Won
                </span>
                <span className='review'>reviews <span>{currentArray[num].review.length}</span></span>
            </Link>
          )
        })
      }
    </div>
  )
}

function ReviewList(){
  // let userId = review_List[i].userId
  return(
    <div className='reviews'>
      {
        review_List.map((a,i)=>{
          return(
            <div className='reviewBox'>
              <img className='icon' src='../images/shop/review_ico.png' alt='' />
              <div className='reviewImg'><img src={review_List[i].image} alt='' /></div>
              <div className='reviewTxt'>
                <b>{review_List[i].title}</b><br />
                {review_List[i].text}
                <span className='userId'>{review_List[i].userId.replace(/(?<=.{1})./gi,"*")}</span>
              </div>
              <div className='reviewDetail'>
                <div className='userImg'><img src={review_List[i].image} alt='' /></div>
                <div>
                  <ul>
                    <li>
                      <span></span>
                      <span>댓글 <b>{review_List[i].comment.length}</b></span>
                    </li>
                    <li>새로운 이야기</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        })
      }
      <button className='reviewMore'>후기더보기</button>
    </div>
  )
}
export { ListForm, SaleList, ReviewList };
