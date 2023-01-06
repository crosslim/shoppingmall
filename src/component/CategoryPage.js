import ListForm from './common/ListForm'
// import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { itemList } from '../data/item_fashion';

function Interior() {
  return (
    <>
      <div className='categoryImg'>interior</div>
      <div className='pdList'>      
        <ListForm itemList={itemList}/>
      </div>
    </>
  );
}

function Digital() {
  return (
    <>
      <div className='categoryImg'>digital</div>
      <div className='pdList'>      
        <ListForm itemList={itemList}/>
      </div>
    </>
  );
}

export { Interior, Digital }