import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";

import { SectionHeader, BaseButton } from "./components/styled";

const theme = {
  primary: "blue"
};

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const List = styled.ul`
  & > li {
    color: blue;
    &:first-child {
      color: red;
    }
    &:nth-child(3) {
      animation: ${pulse} 2s linear infinite;
    }
    &:nth-child(4) {
      color: ${() => {
        const rgb = [];

        for (let i = 0; i < 3; i++) {
          rgb.push(Math.floor(Math.random() * 255));
        }

        return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
      }};
    }
    &:hover {
      color: green;
    }
  }
  @media only screen and (min-width: 900px) {
    font-size: 18px;
  }
`;

const StyledButton = styled(BaseButton)`
  color: red;
  background-color: ${props => (props.solid ? "blue" : "")};
`;

const ThemedText = styled.p`
  color: ${props => props.theme.primary};
`;

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <SectionHeader>Basic CSS</SectionHeader>
      <List>
        <li>Red</li>
        <li>Blue</li>
        <li>Animated</li>
        <li>Random</li>
      </List>
      <SectionHeader>Extended Styles</SectionHeader>
      <BaseButton>Base</BaseButton>
      <StyledButton>Styled</StyledButton>
      <SectionHeader>Props</SectionHeader>
      <StyledButton solid>Props</StyledButton>
      <SectionHeader>Themes</SectionHeader>
      <ThemedText>This text is colored by the theme.</ThemedText>
    </ThemeProvider>
  </div>
);

export default App;
