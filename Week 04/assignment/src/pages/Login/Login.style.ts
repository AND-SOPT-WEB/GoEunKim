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
export { Wrapper, Title };
