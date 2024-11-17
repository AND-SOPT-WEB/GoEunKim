import styled from '@emotion/styled';
import { theme } from '../../styles';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 2% 5% 0 5%;
  font-size: 1.5rem;
  & section {
    display: flex;
    gap: 5rem;
  }

  & nav {
    display: flex;
    gap: 3rem;
    margin-top: 1rem;
  }

  & li {
    list-style: none;
    text-decoration: none;
  }

  & a,
  & button {
    font-size: 1.8rem;
    font-family: 'Pretendard-Regular';
    font-weight: 900;
    color: ${theme.colors.black};
  }
  & button {
    background: none;
    border: none;
    padding-bottom: 2rem;
  }

  & button:hover {
    text-decoration: underline;
  }
`;

export { HeaderWrapper };
