import Header from './common/Header'
import Footer from './common/Footer'
import SideMenu from './common/SideMenu';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

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

export default Category;