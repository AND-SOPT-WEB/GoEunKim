import styled from '@emotion/styled';
import { theme } from '../../styles';

const Form = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & button {
    background-color: ${theme.colors.carrot};
    font-size: 1.5rem;
    color: ${theme.colors.white};
    border: none;
    height: 4.5rem;
    font-family: 'Pretendard-Regular';
  }

  &.login button:hover {
    background-color: ${theme.colors.yellow};
    transition: 2s ease;
  }

  & p {
    text-align: center;
    font-size: 1.5rem;
    color: ${theme.colors.black};
    margin-top: 1rem;
    font-family: 'Pretendard-Regular';
  }

  & span {
    color: ${theme.colors.waring};
    font-size: 1.2rem;
  }
`;

const Input = styled.input<{ isDisabled?: boolean }>`
  font-family: 'Pretendard-Regular';
  height: 4rem;

  border: ${({ isDisabled }) => (isDisabled ? `1px solid ${theme.colors.waring}` : `1px solid ${theme.colors.grey}`)};
`;

const Label = styled.label`
  font-size: 1.7rem;
  font-weight: 700;
`;
const SubmitBtn = styled.button`
  &:disabled {
    background-color: ${theme.colors.grey};
    cursor: not-allowed;
  }
`;

export { Form, Input, Label, SubmitBtn };
