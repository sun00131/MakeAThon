import styled from "styled-components";
import BarComponent from "Components/Bar";

const SubTopVariety = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px 50px 100px 130px;
  width: 400px;
  height: 300px;
`;

const SmallTitle = styled.span`
  opacity: 0.4;
  font-size: 14px;
  font-weight: 700;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;

const Bar = styled(BarComponent)`
  width: 35px;
  height: 5px;
`;

const SubTopComponent = ({ subTopData }) => (
  <SubTopVariety>
    <Bar />
    <Title>
      <div> {subTopData.mainTitle1}</div>
      <div>{subTopData.mainTitle2}</div>
    </Title>
    <SmallTitle>{subTopData.subTitle}</SmallTitle>
  </SubTopVariety>
);

export default SubTopComponent;
