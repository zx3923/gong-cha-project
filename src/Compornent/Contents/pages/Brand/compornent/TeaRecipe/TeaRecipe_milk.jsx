import React from "react";
import style from "./TeaRecipe1.module.css";

const TeaRecipe_milk = () => {
  return (
    <div className={style.ContentsWrap}>
      <div className={`${style.LeftContents} ${style.LeftContentsImg2}`}></div>
      <div className={style.RightContents}>
        <h2>TEA RECIPE - 티 레시피</h2>
        <h3>밀크티 - Milk Tea</h3>
        <h4>
          최적의 자연이 키워낸 입차만 골라 각 차종에 맞는 황금률로 우려 담백한
          우유와 허니, 카라멜 등 새로운 맛을 더해 만듭니다.
        </h4>
        <button>
          <span>메뉴 보러가기</span>
        </button>
      </div>
    </div>
  );
};

export default TeaRecipe_milk;
