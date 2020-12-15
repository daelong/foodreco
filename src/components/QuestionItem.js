import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const ItemBoxTemplate = styled.div`
  margin-bottom: 30rem;
`;

const ItemBox = styled.div`
  background-color: #ffeaa7;
  width: 250px;
  font-size: 2rem;
  margin-bottom: 1rem;
  &:hover {
    background-color: #ff7675;
  }
`;

const handleHide = (event) => {
  console.log(event);
};

const handlePoint = (event) => {};

const QuestionItem = () => {
  return (
    <>
      <ItemBoxTemplate>
        <ItemBox>매운거</ItemBox>
        <ItemBox>담백한거</ItemBox>
      </ItemBoxTemplate>
      <ItemBoxTemplate>
        <ItemBox>술안주</ItemBox>
        <ItemBox>식사</ItemBox>
      </ItemBoxTemplate>
    </>
  );
};

export default QuestionItem;
