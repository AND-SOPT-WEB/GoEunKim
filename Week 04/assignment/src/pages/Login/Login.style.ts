import styled from '@emotion/styled';
import { theme } from '../../styles';

const Wrapper = styled.div`
  width: 35%;
  height: 40%;
`;

const Title = styled.h1`
  font-family: '양진체';
  color: ${theme.colors.carrot};
  font-size: 3rem;
  margin-bottom: 5rem;
  text-align: center;
`;

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
`;

const Input = styled.input`
  font-family: 'Pretendard-Regular';
  height: 4rem;
  border: 1px solid ${theme.colors.grey};
`;

export { Title, Form, Wrapper, Input };
