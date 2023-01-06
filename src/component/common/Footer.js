import { shopInfo } from '../../data/shop_info'

function Footer() {
  return (
    <footer className='footer'>
      <section>
        <div className='footerinfo1'>
          <ul className='customerCenter'>
            <li className='title'>customer center</li>
            <li className='txt1'>{shopInfo.customerCenter}</li>
            <li className='txt2'>
              - 평일 : {shopInfo.businessHours.Weekday} (점심시간:{shopInfo.businessHours.lucnh})<br />
              - 휴무 : {shopInfo.businessHours.holiday}<br />
              * 고객센터 운영시간에 순차적으로 답변 드리겠습니다.
            </li>
            <li className='txt3'>통화량이 많을때는 문의게시판으로 문의주세요.</li>
            <li className='txt4'>
              <button>문의게시판</button>
              <button>자주 묻는 질문</button>
            </li>
          </ul>
          <ul className='otherInformation'>
            <li className='title'>other information</li>
            <li className='txt1'>
              {shopInfo.bank[0].bankName} {shopInfo.bank[0].bankNum} ({shopInfo.bank[0].name})<br />
              {shopInfo.bank[1].bankName} {shopInfo.bank[1].bankNum} ({shopInfo.bank[1].name})<br />
            </li>
            <li className='txt2'>입금자명 불일치시 자동 입금확인이 되지 않습니다.</li>
            <li>반품주소지<br />- {shopInfo.address}</li>
            <li className='txt3'>
              <button>
                <span>
                  <img src="images/shop/car.png" alt="" />
                </span>
                <span>내가 주문한 상품 배송조회 바로가기<br />대한통운 택배 / 1588-1255</span>
              </button>
            </li>
          </ul>
          <ul className='myMenu'>
            <li>
              <button>
                <img src="images/shop/my_order.png" alt="" />
                <span>order</span><br />
                <span>주문 내역</span>
              </button>
              <button>
                <img src="images/shop/my_profile.png" alt="" />
                <span>profile</span><br />
                <span>개인정보</span>
              </button>
              <button>
                <img src="images/shop/my_wish.png" alt="" />
                <span>wish list</span><br />
                <span>관심 상품</span>
              </button>
            </li>
            <li>
              <button>
                <img src="images/shop/my_mileage.png" alt="" />
                <span>mileage</span><br />
                <span>적립금</span>
              </button>
              <button>
                <img src="images/shop/my_coupon.png" alt="" />
                <span>coupon</span><br />
                <span>쿠폰 내역</span>
              </button>
              <button>
                <img src="images/shop/my_board.png" alt="" />
                <span>myboard</span><br />
                <span>내가 쓴 글</span>
              </button>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className='footerinfo2'>
          <span><a href='#'>회사소개</a></span>
          <span><a href='#'>이용약관</a></span>
          <span><a href='#'>개인정보처리방침</a></span>
          <span><a href='#'>이용안내</a></span>
        </div>
      </section>
      <section>
        <div className='footerinfo3'>
          <div className='shopInfo_txt'>
            <span>
              <p>법인명(상호) : {shopInfo.shopName}</p>
              <p>대표자(성명) : {shopInfo.ceoName}</p>
              <p>사업자 등록번호 안내 : {shopInfo.businessNumber}</p>
            </span>
            <span>
              <p>통신판매업 신고 : {shopInfo.telemarketingBusiness}</p>
              <p>개인정보보호책임자 : {shopInfo.infoProtectionManager}</p>
            </span>
            <span>
              <p>전화 : {shopInfo.tel}</p>
              <p>주소 : {shopInfo.address}</p>
            </span>
            <span className='copyLight'>Copyright © 에비뉴. All rights reserved.</span>
          </div>
          <div><img src="images/shop/escrow.png" alt="에스크로서비스" /></div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
