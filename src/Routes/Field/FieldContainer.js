import React, { useState } from "react";
import FieldPresenter from "./FieldPresenter";

const FieldContainer = () => {
  const [subTopData] = useState({
    subTitle: "Field of Business",
    mainTitle: "ėŽė ėė­",
  });
  

  return (
    <FieldPresenter
      subTopData={subTopData}
    />
  );
};

export default FieldContainer;
