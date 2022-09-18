import styled from "styled-components";

export const SocialIconsStyled = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 32px;

  li {
    font-size: 28px;
    cursor: pointer;
    a {
      background: transparent;
      transition: var(--transition);
      &:hover {
        color: var(--color-danger);
      }
    }
  }
  @media (max-width: ${(props) => props.theme.mobile}) {
    justify-content: center;
  }
  li {
    margin-right: 5px;
    &:hover {
      opacity: 0.6;
    }
  }
`;
export const StyleSocials = styled(SocialIconsStyled)`
  li {
    font-size: 14px;
    a {
      background: var(--color-bg1);
      padding: 8px;
      border-radius: 50%;
      transition: var(--transition);
      &:hover {
        color: white;
        background: transparent;
      }
    }
  }
`;
