import styled from '@emotion/styled';
import { useState, useEffect, useMemo } from 'react';

const Game = ({ level }) => {
  const gridSize = parseInt(level) + 2;
  const numbersPerPage = gridSize * gridSize;
  const maxNumber = numbersPerPage * 2;

  const [cards, setCards] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);

  const shuffledCards = () => {
    const NumsArr = new Set();
    while (NumsArr.size < numbersPerPage) {
      NumsArr.add(Math.floor(Math.random() * numbersPerPage));
    }
    // 두 번째 범위 (numbersPerPage + 1 ~ maxNumber)
    while (NumsArr.size < maxNumber) {
      NumsArr.add(Math.floor(Math.random() * numbersPerPage) + numbersPerPage);
    }
    console.log(NumsArr);
    // const Nums = Array.from(NumsArr).slice(0, maxNumber);
    // let tempArr = [];
    // for (let i = 0; i < maxNumber; i += 2) {
    //   tempArr.push({ num: Nums[i], isClicked: false }, { num: Nums[i + 1], isClicked: false });
    // }
  };

  useEffect(() => {
    shuffledCards();
  }, []);

  return (
    <Wrapper>
      <h1>다음 숫자 : 1</h1>
      <Grid columns={gridSize}>
        {cards.map((card, index) => (
          <Cell key={`card-${index}`} isClicked={card[0].isClicked}>
            {card[0].num}
          </Cell>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Game;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 5% 20%;
  padding: 2% 0;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  padding: 2rem 8rem;
  gap: 0.5rem;
`;

const Cell = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  color: white;
  background-color: ${({ isClicked, theme }) => (isClicked ? theme.colors.darkBlue : theme.colors.midBlue)};
`;
