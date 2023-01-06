import React from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Main from './component/Main'
import Detail from './component/Detail'
import Company from './component/Company'
import Login from './component/Login'
import Join from './component/Join'
import Category from './component/Category'
import { Interior, Digital } from './component/CategoryPage'

// import {Interior} from './component/CategoryPage'
import './style/common.css'

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
          <Route path="interior" element={ <Interior /> } />
          <Route path="digital" element={ <Digital /> } />
        </Route>
      </Routes>
    </div>
  );
}



export default App;
