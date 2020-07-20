import styled from "@emotion/styled";

export const Header = styled.h1`
  font-size: ${props => (props.fontSize ? props.fontSize : "20px")};
  color: var(--dark-000);
  margin-bottom: 30px;
`;
