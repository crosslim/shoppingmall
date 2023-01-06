import Header from './common/Header'
import Footer from './common/Footer'
import SideMenu from './common/SideMenu';
import '../style/common.css'
import { Link } from 'react-router-dom'

function Company() {
  return (
    <div>
      <SideMenu />
      <Header />
      <Contents />
      <Footer />
    </div>
  );
}

function Contents(){
  return(
    <div className="company con">
      <div className="pagePath">
        <Link to='/'>홈</Link>
        &nbsp; &gt; &nbsp;
        <Link to='/company'>회사소개</Link>
      </div>
      <div className="title">About us</div>
    </div>
  )
}

export default Company;
