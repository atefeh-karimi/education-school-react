import styled from "styled-components";

export const Btn = styled.a`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  display: inline-block;
  padding: 16px 32px;
  border: 1px solid transparent;
  transition: all 400ms ease;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.hoverTextColor};
    background-color: transparent;
    border-color: white;
  }
`;
Btn.defaultProps = {
  theme: {
    textColor: "black",
    backgroundColor: "red",
    hoverTextColor: "white",
  },
};
