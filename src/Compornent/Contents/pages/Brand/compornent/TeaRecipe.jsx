import React, { useState } from "react";
import style from "./TeaRecipe.module.css";
import TeaRecipe_original from "./TeaRecipe/TeaRecipe_original";
import TeaRecipe_milk from "./TeaRecipe/TeaRecipe_milk";
import TeaRecipe_fruit from "./TeaRecipe/TeaRecipe_fruit";
const TeaRecipe = () => {
  const [Menu, setMenu] = useState([1]);

  const TeaRecipeList = {
    1: <TeaRecipe_original />,
    2: <TeaRecipe_milk />,
    3: <TeaRecipe_fruit />,
  };

  return (
    <div className={style.ContentsWrap}>
      <div className={style.InnerContents}>
        <ul>
          <li className={style.title}>공차 티 레시피</li>
          <li>
            <ul className={style.menu}>
              <li>
                <button
                  onClick={() => {
                    setMenu(1);
                  }}
                >
                  오리지널 티
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setMenu(2);
                  }}
                >
                  밀크 티
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setMenu(3);
                  }}
                >
                  과일 믹스
                </button>
              </li>
            </ul>
          </li>
        </ul>
        {TeaRecipeList[Menu]}
      </div>
    </div>
  );
};

export default TeaRecipe;
