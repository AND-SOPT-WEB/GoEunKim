import styled from '@emotion/styled';

const Table = () => {
  return (
    <Container>
      <thead>
        <tr>
          <th scope="col">타임스탬프</th>
          <th scope="col">레벨</th>
          <th scope="col">플레이 시간</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="col">5월 1일 12:00</td>
          <td scope="col">Level 1</td>
          <td scope="col">5: 20</td>
        </tr>
        <tr>
          <td scope="col">5월 1일 12:00</td>
          <td scope="col">Level 1</td>
          <td scope="col">5: 20</td>
        </tr>
      </tbody>
    </Container>
  );
};

export default Table;

const Container = styled.table`
  width: 80%;
  margin: 2% 10% 5% 10%;
  padding-bottom: 2%;

  & thead {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }

  & tr,
  & td {
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.lightBlue};
    vertical-align: middle;
  }
`;
