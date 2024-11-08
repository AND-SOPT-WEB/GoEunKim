import styled from '@emotion/styled';

const Table = ({ records }) => {
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
        {records &&
          records.map((e, idx) => (
            <tr key={idx}>
              <td scope="col">{e.date}</td>
              <td scope="col">{`Level ${e.level}`}</td>
              <td scope="col">{e.time}</td>
            </tr>
          ))}
      </tbody>
    </Container>
  );
};

export default Table;

const Container = styled.table`
  width: 80%;
  margin: 2% 10% 5% 10%;
  padding-bottom: 2%;
  font-family: 'S-CoreDream-3Light';
  font-size: 0.9rem;

  & thead {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }

  & tr,
  & td,
  & th {
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.lightBlue};
    vertical-align: middle;
    height: 2.4rem;
  }
  & tbody tr:hover {
    background-color: ${({ theme }) => theme.colors.tableHover};
  }
`;
