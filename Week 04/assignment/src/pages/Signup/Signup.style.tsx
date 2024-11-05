import styled from '@emotion/styled';
import { theme } from '../../styles';

const Title = styled.h1`
  font-family: '양진체';
  color: ${theme.colors.carrot};
  font-size: 3rem;
  margin-bottom: 5rem;
  text-align: center;
`;

const Footer = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${theme.colors.black};
  margin-top: 1rem;
  font-family: 'Pretendard-Regular';

  & span {
    color: ${theme.colors.carrot};
    margin-left: 1rem;
  }
`;

export { Title, Footer };
