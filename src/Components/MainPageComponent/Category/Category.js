import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  width: 70%;
  height: 250px;
  margin: 150px auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const MenuTitle = styled.div`
  position: absolute;
  font-size: 25px;
  font-weight: 400;
  background-color: white;
  top: -40px;
  left: -10px;
  padding: 40px;
  padding-left: 0;
`;

const Tab = styled.div``;
const ImgContainer = styled(Link)`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-20px);
    box-shadow: var(--main-color) 0px 3px 8px;
  }
`;

const Img = styled.img`
  width: 50%;
  height: 50%;
  opacity: 0.6;
  transition: all 0.2s linear;
`;
const Title = styled.div`
  margin-top: 20px;
  text-align: center;
  font-weight: 400;
`;

const Category = () => {
  const data = [
    {
      imgUrl: "img/mainPage/3d.png",
      title: "3D프린팅",
    },
    {
      imgUrl: "img/mainPage/pen.png",
      title: "3D펜",
    },
    {
      imgUrl: "img/mainPage/vr.png",
      title: "VR",
    },
    {
      imgUrl: "img/mainPage/ar.png",
      title: "AR",
    },
    {
      imgUrl: "img/mainPage/drone.png",
      title: "드론",
    },
    {
      imgUrl: "img/mainPage/coding.png",
      title: "코딩",
    },
    {
      imgUrl: "img/mainPage/car.png",
      title: "자율주행자동차",
    },
  ];
  return (
    <Container>
      <MenuTitle>카테고리에 따라 강의를 선택하세요</MenuTitle>
      {data.map((item) => (
        <Tab>
          <ImgContainer to="/online/maker1">
            <Img src={require(`../../../${item.imgUrl}`).default} />
          </ImgContainer>
          <Title>{item.title}</Title>
        </Tab>
      ))}
    </Container>
  );
};

export default Category;
