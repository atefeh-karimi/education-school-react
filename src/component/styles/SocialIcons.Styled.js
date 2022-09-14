import styled from "styled-components";

export const SocialIconsStyled = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  font-size: 18px;

  li {
    font-size: 28px;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: var(--color-danger);
    }
  }
`;
