import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainSubTop from "Components/MainPageComponent/MainSubTop";

const Container = styled.section`
  background-color: white;
  height: 300px;
  display: flex;
  position: relative;
  margin: 100px 0 0 0;
`;

const SlideBox = styled.div`
  width: calc(90vw - 400px);
  overflow: hidden;
  border: 5px solid var(--main-color);
`;

const SlideList = styled.div`
  display: table;
  width: calc((90vw - 400px) / 5 * 8);
`;

const SlideContent = styled(Link)`
  display: table-cell;
  width: calc((90vw - 400px) / 5);
  height: 300px;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.2);
  padding: 30px 20px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 2px solid #3b8188;
  }
  transform: translate3d(${(props) => props.imageCurrentNo}px, 0px, 0px);
  transition: all 0.4s linear;
`;

const PosterImg = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 70px;
`;

const Title = styled.div``;

const RightArrow = styled.div`
  position: absolute;
  top: 45%;
  left: 87vw;
  font-size: 50px;
  opacity: 0.4;
  color: #004c86;
  transition: opacity 0.1s linear;
  transition: font-size 0.1s linear;
  &:hover {
    opacity: 0.9;
    font-size: 60px;
  }
`;
const LeftArrow = styled.div`
  position: absolute;
  top: 45%;
  left: 27vw;
  font-size: 50px;
  opacity: 0.4;
  color: #004c86;
  transition: opacity 0.1s linear;
  transition: font-size 0.1s linear;
  z-index: 1;
  &:hover {
    opacity: 0.9;
    font-size: 60px;
  }
`;

const EduList = ({ data }) => {
  const subTopData = {
    mainTitle1: "한양에듀",
    mainTitle2: "교육 프로그램",
    subTitle: "The technology in education",
  };
  const [imageCurrentNo, updateNo] = useState(0);

  const slidingLeft = () => {
    if (imageCurrentNo <= -200) updateNo(imageCurrentNo + 200);
  };
  const slidingRight = () => {
    if (imageCurrentNo >= -500) updateNo(imageCurrentNo - 200);
  };
  console.log(data);
  return (
    <Container>
      <MainSubTop subTopData={subTopData} />
      <LeftArrow onClick={slidingLeft}>
        <i className="fas fa-chevron-left" />
      </LeftArrow>
      <SlideBox>
        <SlideList>
          {data.map((item) => (
            <SlideContent imageCurrentNo={imageCurrentNo} to="/online/maker1">
              <PosterImg
                src={require(`../../../${item.imgUrl}`).default}
                alt="lecture"
              />
              <Title>{item.title}</Title>
            </SlideContent>
          ))}
        </SlideList>
      </SlideBox>
      <RightArrow onClick={slidingRight}>
        <i className="fas fa-chevron-right" />
      </RightArrow>
    </Container>
  );
};

export default EduList;
