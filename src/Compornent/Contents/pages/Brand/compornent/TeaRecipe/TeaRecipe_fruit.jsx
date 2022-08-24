import React from "react";
import style from "./TeaRecipe1.module.css";

const TeaRecipe_fruit = () => {
  return (
    <div className={style.ContentsWrap}>
      <div className={`${style.LeftContents} ${style.LeftContentsImg3}`}></div>
      <div className={style.RightContents}>
        <h2>TEA RECIPE - 티 레시피</h2>
        <h3>과일믹스 – Fruit Mix</h3>
        <h4>
          찻잎의 푸름을 간직한 녹차만 골라 최적의 온도 89℃로 우려
          <br />
          달콤상큼한 과일을 더해 만듭니다.
        </h4>
        <button>
          <span>메뉴 보러가기</span>
        </button>
      </div>
    </div>
  );
};

export default TeaRecipe_fruit;
