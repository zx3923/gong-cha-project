import React from "react";
import style from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={style.bannerwrap}>
      <div className={style.banner}></div>
      <div className={style.bannerMenu}>
        <ul>
          <li>
            <a href=""> 스페셜 커피 신메뉴</a>
          </li>
          <li>
            <a href="">제주 신메뉴</a>
          </li>
          <li>
            <a href="">공차, 골든 펄에 빠지다!</a>
          </li>
          <li>
            <a href="">베스트 콤비네이션</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
