import { css } from '@emotion/react';
import reset from './reset';

const global = css`
  ${reset}
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    scrollbar-width: none;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
`;

export default global;
