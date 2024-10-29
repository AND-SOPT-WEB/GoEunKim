import styled from '@emotion/styled';
import Table from './atoms/Table';

const Ranking = () => {
  return (
    <Wrapper>
      <header>
        <h1>랭킹 🏆</h1>
        <button>초기화 🤪</button>
      </header>
      <Table />
    </Wrapper>
  );
};

export default Ranking;

const Wrapper = styled.section`
  background-color: white;
  width: 60%;
  margin: 5% 20%;
  padding: 2% 0;
  position: relative;

  & header {
    display: flex;
    justify-content: center;
    margin: 0 30%;
    padding-top: 2%;
  }

  & header h1 {
    font-size: 1.5rem;
  }

  & header button {
    position: absolute;
    right: 6rem;
    border: none;
    border-radius: 0.2rem;
    padding: 0.3rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: white;
  }
`;
