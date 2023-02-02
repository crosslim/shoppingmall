import Header from './common/Header'
import Footer from './common/Footer'
import SideMenu from './common/SideMenu';
import { Outlet } from 'react-router-dom'
// import { board_notice } from '../data/board.js';
import {board_notice} from '../data/board.js';
import '../style/board.css';

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

//카테고리 공통 상단
function BoardForm(props){
  return(<>
    <div className='categoryPageTop'>
      <div className='pagePath'>
        <span>홈</span>&nbsp; &gt; &nbsp;
        <span>{props.pageName}</span>
      </div>
      <div className='pageName'>{props.pageName}
        <span className='subtitle'>{props.subtitle}</span>
      </div>
      
      <ul className='board_notice'>
        <li className='title'>
          <span>번호</span>
          <span>제목</span>
          <span>작성자</span>
        </li>
        {
        //  currentItemArray.map(()=>{
        //   return(
        //     <li className='list'>
        //       <span>번호</span>
        //       <span>제목</span>
        //       <span>작성자</span>
        //     </li>
        //   )
        //  }) 
        }
      </ul>
    </div>
    </>
  )
}



//공지사항
function Notice() {
  let boardName = '공지사항';
  let subtitle = '새로운 공지사항 입니다.';
  // let currentItemArray = board_notice;
  return (
    <>
      <BoardForm 
        pageName={boardName} 
        subtitle={subtitle} 
        // currentItemArray={currentItemArray}
      />
    </>
  );
}

export {Board, Notice} ;