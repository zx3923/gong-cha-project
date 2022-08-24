import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.Footer}>
      <footer className={style.InnerFooter}>
        <div className={style.InnerFooterLeft}>
          <div className={style.logo}></div>
          <div className={style.contnent}>
            (C)GONGCHA KOREA CO.,LTD ALL RIGHTS RESERVED.
          </div>
        </div>
        <div className={style.InnerFooterRight}>
          <div className={style.first}>
            <ul>
              <li>
                {" "}
                <a href="/">회사소개</a>
              </li>
              <li>
                <a href="/">제휴제안</a>
              </li>
              <li>
                <a href="/">고객센터</a>
              </li>
              <li>
                <a href="/">개인정보처리방침</a>
              </li>
              <li>
                <a href="/">이메일무단수집거부</a>
              </li>
              <li>
                <a href="/">HOT-LINE</a>
              </li>
              <li>
                <a href="/">사이트맵</a>
              </li>
            </ul>
          </div>
          <div className={style.center}>
            고객센터02-779-7758(운영시간: 오전 9시 30분 ~ 오후 5시 30분 /
            점심시간: 낮 12시 ~ 오후 1시 / 주말 및 공휴일 휴무)
          </div>
          <div className={style.last}>
            <ul>
              <li>서울 종로구 종로 47(공평동, 7층)</li>
              <li>대표이사 이봉진</li>
              <li>사업자등록번호 214-88-84534</li>
              <li>통신판매번호: 2020-서울종로-0966</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
