import React from 'react';
import { Link } from 'react-router-dom'

function ListForm(props) {
  let currentArray = props.itemList;
  
  return(
    <div className='wid1050 itemBox'>
          {
            currentArray.map((a,num)=>{
              return(
                <Link to={'/Detail/' + currentArray[num].id} className='item' id={'item' + currentArray[num].id}>
                  <span className='img'><img src={currentArray[num].imagePath + 'item' + currentArray[num].id + '/thum1.jpg'} alt="" /></span>
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

export default ListForm;
