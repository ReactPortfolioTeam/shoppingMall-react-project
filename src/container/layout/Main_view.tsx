import * as React from "react";
import styled from "styled-components";

const MainView: React.FC = () => {
  return (
    <MainViewContainer id="main__view">
      <div style={{ height: "200px" }}>item</div>
      <div style={{ height: "200px" }}>item</div>
      <div style={{ height: "200px" }}>item</div>
      <div style={{ height: "200px" }}>item</div>
      <div style={{ height: "200px" }}>item</div>
    </MainViewContainer>
  );
};

const MainViewContainer = styled.main`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
`;

export default MainView;
