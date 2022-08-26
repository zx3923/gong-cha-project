import React from "react";
import Heading from "./Heading";
import styles from "./Event.module.css";
import Menu01 from "./Menu01";
import { Outlet } from "react-router-dom";

const Event = () => {
  return (
    <div>
      <Heading />
      <Outlet />
    </div>
  );
};

export default Event;
