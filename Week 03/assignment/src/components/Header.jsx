import styled from '@emotion/styled';
import Select from './atoms/Select';

const Header = ({ isGameMode, setIsGameMode, setLevel, time, level }) => {
  return (
    <Wrapper>
      <section>
        <h1>1 to 50</h1>
        <Btns>
          <li>
            <button onClick={() => setIsGameMode(true)}>게임 🎰</button>
          </li>
          <li>
            <button onClick={() => setIsGameMode(false)}>랭킹 🏆</button>
          </li>
        </Btns>
      </section>
      {isGameMode && (
        <section>
          <Select setLevel={setLevel} time={time} level={level} />
        </section>
      )}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 9rem 2rem 5rem;
  background-color: ${({ theme }) => theme.colors.midBlue};
  color: white;

  & section {
    display: flex;
    align-items: center;
    color: white;
    gap: 3rem;
  }

  & h1 {
    font-size: 2rem;
    font-family: 'YOnepickTTF-Bold';
    font-size: 1.2rem;
  }

  & h2 {
    font-size: 1.4rem;
  }
`;

const Btns = styled.menu`
  display: flex;
  gap: 1.2rem;

  & button {
    background-color: ${({ theme }) => theme.colors.midBlue};
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    color: white;
    font-size: 1.2rem;
    font-weight: 200;
    font-family: 'STUNNING-Bd';
  }
  & button:focus {
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }
`;
