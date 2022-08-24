import React from "react";
import style from "./Brand.module.css";
import Banner from "./compornent/Banner";
import MiddleContents from "./compornent/MiddleContents";
import TeaRecipe from "./compornent/TeaRecipe";
const Brand = () => {
  return (
    <div className={style.Contentswrap}>
      <Banner />
      <MiddleContents />
      <TeaRecipe />
    </div>
  );
};

export default Brand;
