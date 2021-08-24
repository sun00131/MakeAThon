import React, { useState } from "react";
import MainPagePresenter from "./MainPagePresenter";

const MainPageContainer = () => {
  const [data] = useState([
    {
      imgUrl: "img/edu_img.PNG",
      title: "3D프린팅 전문가",
    },
    {
      imgUrl: "img/3dPen.PNG",
      title: "3D펜 디자이너",
    },
    {
      imgUrl: "img/garbage.PNG",
      title: `초음파 센서로 "로봇 쓰레기통"만들기`,
    },
    {
      imgUrl: "img/dog.PNG",
      title: `적외선 센서로 "강아지 자동차" 만들기`,
    },
    {
      imgUrl: "img/speaker.PNG",
      title: `"블루투스 스피커" 만들기`,
    },
    {
      imgUrl: "img/ar.PNG",
      title: "나만의 AR 어플리케이션 만들기",
    },
    {
      imgUrl: "img/meta.PNG",
      title: "메타버스의 이해와 제페토 체험",
    },
    {
      imgUrl: "img/industry.PNG",
      title: "4차 산업혁명과 청소년 기업가정신",
    },
  ]);

  return <MainPagePresenter data={data} />;
};

export default MainPageContainer;
