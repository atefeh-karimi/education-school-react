import styled from "styled-components";

export const Btn = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  display: inline-block;
  padding: 16px 32px;
  width: ${(props) => props.theme.width || ""};
  border: 1px solid transparent;
  transition: all 400ms ease;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.hoverTextColor};
    background-color: transparent;
    border-color: white;
  }
  &:disabled,
  &[disabled] {
    color: #ffffff73;
    background-color: #f758428f;
  }
`;
Btn.defaultProps = {
  theme: {
    width: "",
    textColor: "black",
    backgroundColor: "red",
    hoverTextColor: "white",
  },
};
