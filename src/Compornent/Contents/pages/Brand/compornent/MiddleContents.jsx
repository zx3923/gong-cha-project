import React from "react";
import style from "./MiddleContents.module.css";

const MiddleContents = () => {
  return (
    <div className={style.ContentsWrap}>
      <div className={style.ContentsFirst}>
        <div className={style.FirstBox}>
          <a href="">
            <img
              src="https://www.gong-cha.co.kr/uploads/banner/20200915/o2DSQ9YWyp06egV3_20200915.jpg"
              alt=""
            />
          </a>
        </div>
        <div className={style.SecondBox}>
          <h3>매장검색</h3>
          <h3>
            공차 매장을 쉽고 빠르게
            <br />
            찾아보세요.
          </h3>
          <input
            type="text"
            Placeholder="매장명 또는 주소를 입력하세요"
          ></input>
          <button>매장검색하기</button>
        </div>
      </div>
      <div className={style.ContentsSecond}>
        <div className={style.FirstBox}>
          <h3>HOW TO ORDER 주문하기</h3>{" "}
          <h3>
            공차는 취향에 맞게 토핑, 당도, 얼음량까지
            <br /> 맞춤주문 가능합니다.
          </h3>
          <a href="">자세히 보기</a>
        </div>
        <div className={style.SecondBox}>
          <a href=""></a>
        </div>
      </div>
      <div className={style.ContentsLast}>
        <div className={style.FirstBox}>
          <h3>공차 가맹점 개설문의</h3>
          <ul>
            <li>개설안내</li>
            <li>
              공차만의 프랜차이즈 운영
              <br />
              노하우로 안정된 창업을 이루세요.
            </li>
            <li>FAQ</li>
            <li>
              가맹점 개설과 관련한
              <br />
              자주 묻는 질문입니다.
            </li>
          </ul>
          <button>내용보기</button>
        </div>
        <div className={style.SecondBox}>
          <a href=""></a>
          <div>
            <h3>오픈 매장안내 </h3> <a href="">자세히 보기</a>
          </div>
        </div>
        <div className={style.ThirdBox}></div>
      </div>
    </div>
  );
};

export default MiddleContents;
