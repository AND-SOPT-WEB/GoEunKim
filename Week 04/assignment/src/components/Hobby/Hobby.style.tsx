import styled from '@emotion/styled';
import { theme } from '../../styles';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 60%;
  margin: 0 20%;
  padding-bottom: 6%;
  background-color: ${theme.colors.lightYellow};

  & > h1 {
    font-family: '양진체';
    font-weight: 100;
    color: ${theme.colors.burgundy};
    font-size: 2.5rem;
    margin-top: 5rem;
  }

  & article {
    width: 100%;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  margin: 2% 25%;
  padding-top: 2rem;

  & input,
  & button {
    height: 4rem;
  }
  & input {
    border: 0.1rem solid ${theme.colors.grey};
    padding-left: 1rem;
  }

  & button {
    background-color: ${theme.colors.carrot};
    border: none;
    color: ${theme.colors.white};
  }
`;

const SubTitle = styled.h2`
  font-family: 'Pretendard-Regular';
  font-weight: 900;
  color: ${theme.colors.yellow};
  font-size: 2rem;
`;

const Info = styled.p`
  font-family: 'Pretendard-Regular';
  color: ${theme.colors.black};
  font-size: 1.7rem;
`;

export { Wrapper, Container, SubTitle, Info };
