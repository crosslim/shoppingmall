import Header from './common/Header'
import Footer from './common/Footer'
import SideMenu from './common/SideMenu';
import { Outlet } from 'react-router-dom'
import { itemList } from '../data/item_fashion';
import { ListForm, SaleList} from './common/ListForm'
import '../style/category.css';

//카테고리 리스트페이지 전체
function Category() {
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
function PageTop(props){
  return(<>
    <div className='categoryPageTop'>
      <div className='pagePath'>
        <span>홈</span>&nbsp; &gt; &nbsp;
        <span>{props.pageName}</span>
      </div>
      <div className='pageName'>{props.pageName}</div>
      <div className='pageDetail'>
        <div className='detail1'>- Total <span>{props.totalNum}</span> Items</div>
        <div className='detail2'>
          <span>신상품</span>
          <span>상품명</span>
          <span>낮은가격</span>
          <span>높은가격</span>
          <span>제조사</span>
        </div>
      </div>
    </div>
    <div className='pdList'>  
    {
      props.listForm === 'sale'
      ? <SaleList itemList={props.itemList}/>
      : <ListForm itemList={props.itemList}/>
    }    
    </div>
    </>
  )
}



//디자인 문구
function DesignStationery() {
  let categoryName = '디자인 문구';
  let currentItemArray = itemList;
  return (
    <>
      <PageTop pageName={categoryName} totalNum={itemList.length} itemList={currentItemArray}/>
    </>
  );
}

//패션잡화
function Fashion() {
  let categoryName = '패션잡화';
  let currentItemArray = itemList;
  return (
    <>
      <PageTop pageName={categoryName} totalNum={itemList.length} itemList={currentItemArray}/>
    </>
  );
}

//뷰티
function Beauty() {
  let categoryName = '뷰티';
  let currentItemArray = itemList;
  return (
    <>
      <PageTop pageName={categoryName} totalNum={itemList.length} itemList={currentItemArray}/>
    </>
  );
}

//인테리어
function Interior() {
  let categoryName = '인테리어';
  let currentItemArray = itemList;
  return (
    <>
      <PageTop pageName={categoryName} totalNum={itemList.length} itemList={currentItemArray}/>
    </>
  );
}

//소품
function Items() {
  let categoryName = '소품';
  let currentItemArray = itemList;
  return (
    <>
      <PageTop pageName={categoryName} totalNum={itemList.length} itemList={currentItemArray}/>
    </>
  );
}

//디지털
function Digital() {
  let categoryName = '디지털';
  let currentItemArray = itemList;
  return (
    <>
      <PageTop pageName={categoryName} totalNum={itemList.length} itemList={currentItemArray}/>
    </>
  );
}

//세일
function Sale() {
  let categoryName = '세일';
  let currentItemArray = itemList;
  return (
    <>
      <PageTop pageName={categoryName} totalNum={itemList.length} itemList={currentItemArray} listForm={'sale'}/>
    </>
  );
}

export {Category, DesignStationery, Fashion, Beauty, Interior, Items, Digital, Sale} ;