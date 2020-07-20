import styled from "@emotion/styled";

export const Button = styled.button`
  font-size: 16px;
  padding: 6px 15px;
  height: 37px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: none;
  border-radius: 3px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  box-shadow: 3px 3px 8px -3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${props => props.backgroundColorHover};
    color: ${props => props.textColorHover};
  }
`;
