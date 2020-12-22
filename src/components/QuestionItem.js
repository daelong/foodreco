import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
// import { itemList } from "../data/items";

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
  const [isHide5, setIsHide5] = useState(true);
  const [items, setItems] = useState([
    { name: '자장면', point: 0 }, //0
    { name: '짬뽕', point: 0 }, //1
    { name: '볶음밥', point: 0 }, //2
    { name: '마라탕', point: 0 }, //3
    { name: '초밥', point: 0 }, //4
    { name: '사케동', point: 0 }, //5
    { name: '라멘', point: 0 }, //6
    { name: '돈부리', point: 0 }, //7
    { name: '파스타', point: 0 }, //8
    { name: '피자', point: 0 }, //9
    { name: '리조또', point: 0 }, //10
    { name: '스테이크', point: 0 }, //11
    { name: '치킨', point: 0 }, //12
    { name: '회', point: 0 }, //13
    { name: '곱창', point: 0 }, //14
    { name: '전', point: 0 }, //15
    { name: '돈까스', point: 0 }, //16
    { name: '불닭볶음면', point: 0 }, //17
    { name: '라면', point: 0 }, //18
    { name: '삼겹살', point: 0 }, //19
    { name: '떡볶이', point: 0 }, //20
    { name: '국밥', point: 0 }, //21
    { name: '닭발', point: 0 }, //22
  ]);
  const [best, setBest] = useState('');
  const [bestPoint, setBestPoint] = useState(items[0]);
  // let best;
  // let bestPoint;
  const checkPoint = (items) => {
    // bestPoint = items[0];
    // setBest('hi');
    // console.log(best);
    // setBestPoint(items[0]);
    for (let i = 0; i < items.length - 1; i++) {
      if (bestPoint.point > items[i + 1].point) {
        // best = bestPoint.name;
        setBest(bestPoint.name);
      } else {
        // bestPoint = items[i + 1];
        setBestPoint(items[i + 1]);
        setBest(bestPoint.name);
        // best = bestPoint.name;
      }
    }
  };

  return (
    <>
      <ItemBoxTemplate hide={isHide}>
        <ItemBox
          onClick={() => {
            setIsHide(true);
            setIsHide1(false);
            items[1].point += 1;
            items[3].point += 2;
            items[17].point += 2;
            items[18].point += 1;
            items[20].point += 1;
            items[22].point += 2;
          }}
        >
          매운거
        </ItemBox>
        <ItemBox
          onClick={() => {
            setIsHide(true);
            setIsHide1(false);
            items[0].point += 1;
            items[2].point += 1;
            items[4].point += 1;
            items[5].point += 1;
            items[6].point += 1;
            items[7].point += 1;
            items[8].point += 1;
            items[9].point += 1;
            items[10].point += 1;
            items[11].point += 1;
            items[12].point += 1;
            items[13].point += 1;
            items[14].point += 1;
            items[15].point += 1;
            items[16].point += 1;
            items[19].point += 1;
            items[21].point += 1;
          }}
        >
          안매운거
        </ItemBox>
      </ItemBoxTemplate>
      <ItemBoxTemplate hide={isHide1}>
        <ItemBox
          onClick={() => {
            setIsHide1(true);
            setIsHide2(false);
            items[9].point += 1;
            items[12].point += 2;
            items[13].point += 2;
            items[14].point += 2;
            items[15].point += 2;
            items[19].point += 2;
            items[21].point += 1;
            items[22].point += 2;
          }}
        >
          술안주
        </ItemBox>
        <ItemBox
          onClick={() => {
            setIsHide1(true);
            setIsHide2(false);
            items[0].point += 1;
            items[1].point += 1;
            items[2].point += 1;
            items[3].point += 1;
            items[4].point += 1;
            items[5].point += 1;
            items[6].point += 1;
            items[7].point += 1;
            items[8].point += 1;
            items[11].point += 1;
            items[16].point += 1;
            items[17].point += 1;
            items[18].point += 1;
            items[20].point += 1;
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
            items[0].point += 1;
            items[1].point += 1;
            items[4].point += 1;
            items[6].point += 1;
            items[8].point += 1;
            items[17].point += 1;
            items[18].point += 1;
          }}
        >
          면류
        </ItemBox>
        <ItemBox
          onClick={() => {
            setIsHide2(true);
            setIsHide3(false);
            items[2].point += 1;
            items[3].point += 1;
            items[5].point += 1;
            items[7].point += 1;
            items[9].point += 1;
            items[10].point += 1;
            items[11].point += 1;
            items[12].point += 1;
            items[13].point += 1;
            items[14].point += 1;
            items[15].point += 1;
            items[16].point += 1;
            items[19].point += 1;
            items[20].point += 1;
            items[21].point += 1;
            items[22].point += 1;
          }}
        >
          Not 면류
        </ItemBox>
      </ItemBoxTemplate>
      <ItemBoxTemplate hide={isHide3}>
        <ItemBox
          onClick={() => {
            setIsHide3(true);
            setIsHide4(false);
            items[1].point += 1;
            items[3].point += 1;
            items[6].point += 1;
            items[18].point += 1;
            items[21].point += 1;
          }}
        >
          국물있는거?
        </ItemBox>
        <ItemBox
          onClick={() => {
            setIsHide3(true);
            setIsHide4(false);
            items[0].point += 1;
            items[2].point += 1;
            items[4].point += 1;
            items[5].point += 1;
            items[7].point += 1;
            items[8].point += 1;
            items[9].point += 1;
            items[10].point += 1;
            items[11].point += 1;
            items[12].point += 1;
            items[13].point += 1;
            items[14].point += 1;
            items[15].point += 1;
            items[16].point += 1;
            items[17].point += 1;
            items[19].point += 1;
            items[20].point += 1;
            items[22].point += 1;
          }}
        >
          국물없는거?
        </ItemBox>
      </ItemBoxTemplate>
      <ItemBoxTemplate hide={isHide4}>
        <ItemBox
          onClick={() => {
            setIsHide4(true);
            setIsHide5(false);
            items[0].point += 1;
            items[4].point += 1;
            items[5].point += 1;
            items[6].point += 1;
            items[8].point += 1;
            items[9].point += 1;
            items[15].point += 1;
            items[17].point += 1;
            items[18].point += 1;
            items[19].point += 1;
            items[21].point += 1;
            items[22].point += 1;
            console.log(items);
            checkPoint(items);
            console.log(best);
          }}
        >
          고기
        </ItemBox>
        <ItemBox
          onClick={() => {
            setIsHide4(true);
            setIsHide5(false);
            items[1].point += 1;
            items[2].point += 1;
            items[3].point += 1;
            items[7].point += 1;
            items[10].point += 1;
            items[11].point += 1;
            items[12].point += 1;
            items[13].point += 1;
            items[14].point += 1;
            items[16].point += 1;
            items[20].point += 1;
            checkPoint(items);
            console.log(best);
          }}
        >
          야채
        </ItemBox>
      </ItemBoxTemplate>
      <ItemBoxTemplate hide={isHide5}>dsfdsf{best}</ItemBoxTemplate>
    </>
  );
};

export default QuestionItem;
