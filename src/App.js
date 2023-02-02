import React from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Main from './component/Main'
import Detail from './component/Detail'
import Company from './component/Company'
import Login from './component/Login'
import Join from './component/Join'
import { Category, DesignStationery, Fashion, Beauty, Interior, Items, Digital, Sale} from './component/Category'
import { Board, Notice} from './component/Board'
import './style/common.css'
import './style/mobile.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/detail/:id" element={ <Detail /> } />
        <Route path="/company" element={ <Company /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/join" element={ <Join /> } />
        <Route path="/category" element={ <Category /> }>
          <Route path="designStationery" element={ <DesignStationery /> } />
          <Route path="fashion" element={ <Fashion /> } />
          <Route path="beauty" element={ <Beauty /> } />
          <Route path="interior" element={ <Interior /> } />
          <Route path="items" element={ <Items /> } />
          <Route path="digital" element={ <Digital /> } />
          <Route path="sale" element={ <Sale /> } />
        </Route>
        <Route path="/board" element={ <Board /> }>
          <Route path="notice" element={ <Notice /> } />
        </Route>
      </Routes>
    </div>
  );
}



export default App;
