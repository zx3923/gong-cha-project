import React from "react";
import style from "./Contents.module.css";
import Brand from "./pages/Brand/Brand";
import Menu from "./pages/Menu/Menu";
import Store from "./pages/Store/Store";
import Membership from "./pages/Membership/Membership";
import Benefit from "./pages/Benefit/Benefit";
import Event from "./pages/Event/Event";
import { Routes, Route } from "react-router-dom";

const Contents = () => {
  return (
    <div className={style.Contents}>
      <Routes>
        <Route path="" element={<Brand />} />
        <Route path="/Brand" element={<Brand />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/Benefit" element={<Benefit />} />
        <Route path="/Event" element={<Event />} />
      </Routes>
    </div>
  );
};

export default Contents;
