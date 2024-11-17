import styled from '@emotion/styled';
import { theme } from '../../styles';

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

export { Footer };
