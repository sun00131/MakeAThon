import React from "react";
import { Poster, Slide, Category } from "Components/MainPageComponent";
import { WayCome } from "Components/EduDetailComponent";

const OnlinePresenter = ({ data }) => {
  return (
    <>
      <Poster />
      <Slide data={data} />
      <Category />
      <WayCome />
    </>
  );
};

export default OnlinePresenter;
