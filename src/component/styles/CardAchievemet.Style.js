import styled from "styled-components";

export const AchievemetCardStyle = styled.div`
  background: var(--color-bg1);
  font-family: "IranSansBold";
  text-align: center;
  padding: 25px;
  border-radius: 16px;
  transition: var(--transition);

  &:hover {
    background: var(--color-bg2);
    box-shadow: 0 48px 48px rgba(0, 0, 0, 0.3);
  }
  p {
    margin-top: 10px;
  }
`;
export const AchievemetIconStyle = styled.span`
  background: var(--color-danger);
  padding: 5px 9px;
  border-radius: 16px;
  margin-bottom: 32px;
  display: inline-block;
  font-size: 32px;
`;
