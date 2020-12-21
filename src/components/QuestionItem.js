import React, { useState } from "react";
import styled, { css } from "styled-components";

const ItemBoxTemplate = styled.div`
  margin-bottom: 30rem;
  ${(props) =>
    props.hide &&
    css`
      display: none;
    `}
`;

const ItemBox = styled.div`
  background-color: #ffeaa7;
  width: 250px;
  font-size: 2rem;
  margin-bottom: 1rem;
  &:hover {
    background-color: #ff7675;
    cursor: pointer;
  }
`;

const QuestionItem = () => {
  const [isHide, setIsHide] = useState(false);
  const [isHide1, setIsHide1] = useState(true);
  const [isHide2, setIsHide2] = useState(true);
  const [isHide3, setIsHide3] = useState(true);
  const [isHide4, setIsHide4] = useState(true);
  const itemList = {
    itemList: [
      { name: "자장면", point: 0 },
      { name: "짬뽕", point: 0 },
      { name: "볶음밥", point: 0 },
      { name: "마라탕", point: 0 },
      { name: "초밥", point: 0 },
      { name: "사케동", point: 0 },
      { name: "라멘", point: 0 },
      { name: "돈부리", point: 0 },
      { name: "파스타", point: 0 },
      { name: "피자", point: 0 },
      { name: "리조또", point: 0 },
      { name: "스테이크", point: 0 },
      { name: "치킨", point: 0 },
      { name: "회", point: 0 },
      { name: "곱창", point: 0 },
      { name: "전", point: 0 },
      { name: "돈까스", point: 0 },
      { name: "불닭볶음면", point: 0 },
      { name: "라면", point: 0 },
      { name: "삼겹살", point: 0 },
      { name: "떡볶이", point: 0 },
      { name: "국밥", point: 0 },
    ],
  };
  itemList.itemList[0].point += 1;
  console.log(itemList);
  return (
    <>
      <ItemBoxTemplate hide={isHide}>
        <ItemBox
          onClick={() => {
            setIsHide(true);
            setIsHide1(false);
            itemList.itemList[1].point += 1;
            console.log(itemList.itemList[1].point);
          }}
        >
          매운거
        </ItemBox>
        <ItemBox
          onClick={() => {
            setIsHide(true);
            setIsHide1(false);
          }}
        >
          담백한거
        </ItemBox>
      </ItemBoxTemplate>
      <ItemBoxTemplate hide={isHide1}>
        <ItemBox
          onClick={() => {
            setIsHide1(true);
            setIsHide2(false);
          }}
        >
          술안주
        </ItemBox>
        <ItemBox
          onClick={() => {
            setIsHide1(true);
            setIsHide2(false);
          }}
        >
          식사
        </ItemBox>
      </ItemBoxTemplate>
      <ItemBoxTemplate hide={isHide2}>
        <ItemBox
          onClick={() => {
            setIsHide2(true);
            setIsHide3(false);
          }}
        >
          면
        </ItemBox>
        <ItemBox
          onClick={() => {
            setIsHide2(true);
            setIsHide3(false);
          }}
        >
          밥
        </ItemBox>
      </ItemBoxTemplate>
      <ItemBoxTemplate hide={isHide3}>
        <ItemBox
          onClick={() => {
            setIsHide3(true);
            setIsHide4(false);
          }}
        >
          국물있는거?
        </ItemBox>
        <ItemBox
          onClick={() => {
            setIsHide3(true);
            setIsHide4(false);
          }}
        >
          국물없는거?
        </ItemBox>
      </ItemBoxTemplate>
      <ItemBoxTemplate hide={isHide4}>
        <ItemBox onClick={() => setIsHide4(true)}>따듯한거</ItemBox>
        <ItemBox onClick={() => setIsHide4(true)}>차가운거</ItemBox>
      </ItemBoxTemplate>
    </>
  );
};

export default QuestionItem;
