import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="nanumgothic">
      <div className="QuickMenu">
        <a href="">
          <img
            src="	https://www.gong-cha.co.kr/view/gongcha/images/brand/quick_img_off.png"
            alt=""
          />
        </a>
      </div>
      <header className="topBar h-28 whitespace-nowrap font-bold ">
        <div className="mx-auto h-28 flex justify-center">
          <div className="topBarIcon self-center mr-3">
            <a href="">
              <img
                src="https://www.gong-cha.co.kr/view/gongcha/images/common/logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="topBarMenu">
            <ul className="flex h-full">
              <li>
                <a href="" className="flex h-full items-center">
                  <span className="en ml-2">Brand</span>
                  <span className="ko opacity-0 absolute">브랜드</span>
                </a>
                <ul className="flex items-center flex-col">
                  <li>
                    <a href="">브랜드 소개</a>
                  </li>
                  <li>
                    <a href="">공차의 약속</a>
                  </li>
                  <li>
                    <a href="">브랜드 아이덴티티</a>
                  </li>
                  <li>
                    <a href="">세계속의 공차</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="" className="flex h-full items-center">
                  <span className="en">Menu</span>
                  <span className="ko opacity-0 absolute">메뉴</span>
                </a>
                <ul className="flex items-center flex-col">
                  <li>
                    <a href="">주문방법</a>
                  </li>
                  <li>
                    <a href="">음료</a>
                  </li>
                  <li>
                    <a href="">디저트</a>
                  </li>
                  <li>
                    <a href="">MD상품</a>
                  </li>
                  <li>
                    <a href="">티스토리</a>
                  </li>
                  <li>
                    <a href="">티레시피</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="" className="flex h-full items-center">
                  <span className="en">Store</span>
                  <span className="ko opacity-0 absolute">매장</span>
                </a>
                <ul className="flex items-center flex-col">
                  <li>
                    <a href="">매장 찾기</a>
                  </li>
                  <li>
                    <a href="">가맹점 개설문의</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="" className="flex h-full items-center">
                  <span className="en">Membership</span>
                  <span className="ko opacity-0 absolute">멤버십</span>
                </a>
                <ul className="flex items-center flex-col">
                  <li>
                    <a href="">NEW 공차 멤버십</a>
                  </li>
                  <li>
                    <a href="">공차 카드 & e-Gift</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="" className="flex h-full items-center">
                  <span className="en">Benefit</span>
                  <span className="ko opacity-0 absolute">제휴 서비스</span>
                </a>
                <ul className="flex items-center flex-col">
                  <li>
                    <a href="">통신사 제휴</a>
                  </li>
                  <li>
                    <a href="">결제 서비스</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="" className="flex h-full items-center">
                  <span className="en">Event&News</span>
                  <span className="ko opacity-0 absolute">이벤트&뉴스</span>
                </a>
                <ul className="flex items-center flex-col">
                  <li>
                    <a href="">이벤트</a>
                  </li>
                  <li>
                    <a href="">공차소식</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="topBarSns">
            <ul className="flex h-full">
              <li className="flex">
                <a href="" className="self-center text-sm">
                  공지사항
                </a>
              </li>
              <li className="flex">
                <a href="" className="self-center">
                  <img
                    src="https://www.gong-cha.co.kr/view/gongcha/images/common/btn_f.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="flex">
                <a href="" className="self-center">
                  <img
                    src="https://www.gong-cha.co.kr/view/gongcha/images/common/btn_i.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="flex">
                <a href="" className="self-center">
                  <img
                    src="https://www.gong-cha.co.kr/view/gongcha/images/common/btn_k.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="topBarFranchisee text-white ml-6">
            <a href="">
              <div className="flex">
                <span>
                  <img
                    src="https://www.gong-cha.co.kr/view/gongcha/images/common/go_main_franchise_ico.png"
                    alt=""
                  />
                </span>
                <span>
                  가맹점
                  <br />
                  개설문의
                </span>
              </div>
              <div>02-3276-9583</div>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
