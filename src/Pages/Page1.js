import React from "react";

import s from "./Page1.module.scss";

import ContentContainer from "../CoolComponent/ContentContainer";

const Page1 = () => {
  return (
    <div className={s.container}>
      <ContentContainer />
    </div>
  );
};

export default Page1;
