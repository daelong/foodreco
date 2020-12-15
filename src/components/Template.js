import React, { Children } from "react";
import styled, { css } from "styled-components";
import QuestionItem from "./QuestionItem";

const Box = styled.div`
  background-color: white;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const MainQuestion = styled.h2`
  position: fixed;
`;
const QuestionItems = styled.div`
  position: relative;
  top: 100px;
`;

const Template = ({ children }) => {
  return (
    <Box>
      <QuestionBox>
        <MainQuestion>뭐가 땡겨?</MainQuestion>
        <QuestionItems>{children}</QuestionItems>
      </QuestionBox>
    </Box>
  );
};

export default Template;
