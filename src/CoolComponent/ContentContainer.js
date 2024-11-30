import React from "react";

import s from "./ContentContainer.module.scss";

const ContentContainer = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <h1 className={s.header}>Content</h1>
      </div>
    </div>
  );
};

export default ContentContainer;
