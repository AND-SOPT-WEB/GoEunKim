import styled from '@emotion/styled';
import { theme } from '../../styles';

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

export { Label, SubmitBtn };
