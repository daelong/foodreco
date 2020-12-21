import React from "react";
import styled from "styled-components";

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
