import React from "react";
import style from "./TeaRecipe1.module.css";

const TeaRecipe_original = () => {
  return (
    <div className={style.ContentsWrap}>
      <div className={`${style.LeftContents} ${style.LeftContentsImg1}`}></div>
      <div className={style.RightContents}>
        <h2>TEA RECIPE - 티 레시피</h2>
        <h3>오리지널 티 - Original Tea</h3>
        <h4>
          티백이나 가루가 아닌 황실에 바치던 잎차만 골라 1도 1초도 어기지 않고
          차마다 다른 황금률로 우려 한 잔 한 잔 부드러움을 더해 만듭니다.
        </h4>
        <button>
          <span>메뉴 보러가기</span>
        </button>
      </div>
    </div>
  );
};

export default TeaRecipe_original;
