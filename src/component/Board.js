import Header from './common/Header'
import Footer from './common/Footer'
import SideMenu from './common/SideMenu';
import { Outlet } from 'react-router-dom'
import { board_noticeList, board_customer } from '../data/board_list';
import '../style/board.css';
import { Link, useParams } from 'react-router-dom'

//카테고리 리스트페이지 전체
function Board() {
  return (
    <div>
      <SideMenu />
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

//공지사항
function Notice() {
  let pageName = '공지사항';
  let dataName = 'board_noticeList';
  let subtitle = '새로운 공지사항 입니다.';
  let currentItemArray = board_noticeList;

  return (
    <div className='categoryPageTop'>
      <div className='pagePath'>
        <span><Link to='/'>홈</Link></span>&nbsp; &gt; &nbsp;
        <span>{pageName}</span>
      </div>
      <div className='pageName'>{pageName}
        <span className='subtitle'>{subtitle}</span>
      </div>
      <Board_Area 
        subtitle={subtitle} 
        currentItemArray={currentItemArray} 
        dataName={dataName}
      />
    </div>
  );
}

//고객센터
function Customer() {
  let pageName = '고객센터';
  let dataName = 'board_customer';
  let subtitle = '문의사항 게시판 입니다.';
  let currentItemArray = board_customer;

  return (
    <div className='categoryPageTop'>
      <div className='pagePath'>
        <span><Link to='/'>홈</Link></span>&nbsp; &gt; &nbsp;
        <span>{pageName}</span>
      </div>
      <div className='pageName'>{pageName}
        <span className='subtitle'>{subtitle}</span>
      </div>
      <Board_Area 
        subtitle={subtitle} 
        currentItemArray={currentItemArray} 
        dataName={dataName}
      />
    </div>
  );
}



//board list
function Board_Area(props){
  return(
    <ul className='boardStyle board_notice'>
      <li className='title'>
        <span>번호</span>
        <span>제목</span>
        <span>작성일</span>
        <span>작성자</span>
      </li>
      {
        props.currentItemArray.map((a,i)=>{
          return(
            <li className='text'>
              <span>{i + 1}</span>
              <span>
                <Link to={'/board/board_read/'}>
                  {props.currentItemArray[i].title}
                </Link>
              </span>
              <span>{props.currentItemArray[i].date}</span>
              <span>{props.currentItemArray[i].user}</span>
            </li>
          )
        })
      }
    </ul>
  )
}



//board read
function Board_read_Form(){
  let {id} = useParams();
  let productId;
  if(id != null){
    productId = parseInt(id);
  }
 
  let currentProduct = board_noticeList.find(function(x){
    return x.id == productId
  });

  return(
    <div className="categoryPageTop board_read">
      게시글읽기 작업중
    </div>
  )
}





export {Board, Notice, Board_read_Form, Customer} ;