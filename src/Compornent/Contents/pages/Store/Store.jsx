import React from "react";
import style from "./App.module.css";
import Park from "./Park";

const Store = () => {
  return <div className={style.main_store}>{<Park />}</div>;
};

export default Store;
