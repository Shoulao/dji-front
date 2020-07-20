import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 400px;
  margin: 0 auto;
  transform: translateY(30%);
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const InputLabel = styled.label`
  width: 300px;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: var(--dark-050);
`;

export const Input = styled.input`
  width: 300px;
  border-radius: 3px;
  padding: 10px 15px;
  border: 1px solid var(--neutral-150);
  margin-bottom: 5px;
  box-shadow: 3px 3px 8px -3px var(--neutral-300);
  cursor: pointer;

  &:hover {
    border: 1px solid var(--blue);
  }
`;
