import styled from '@emotion/styled';
import { useState, useEffect, useMemo } from 'react';

const Game = ({ level, setTime, time }) => {
  const gridSize = parseInt(level) + 2;
  const perGameSize = gridSize * gridSize;
  const maxNumber = perGameSize * 2;

  const [cards, setCards] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  const shuffledCards = () => {
    const NumsArr = new Set();

    while (NumsArr.size < maxNumber) {
      if (NumsArr.size % 2 === 0) {
        NumsArr.add(Math.floor(Math.random() * perGameSize) + 1);
      } else {
        NumsArr.add(Math.floor(Math.random() * perGameSize) + perGameSize + 1);
      }
    }

    const Nums = Array.from(NumsArr);
    let tempArr = [];
    console.log(Nums);
    for (let i = 0; i < maxNumber; i += 2) {
      if (Nums[i + 1] !== undefined) {
        tempArr.push([
          { num: Nums[i], isClicked: false },
          { num: Nums[i + 1], isClicked: false },
        ]);
      }
    }
    console.log(tempArr);
    setCards(tempArr);
  };

  const handleCardClick = (index) => {
    const clickedCard = cards[index];

    if (!isRunning) {
      setIsRunning(true);
    }

    if (clickedCard[0].num === nextNumber) {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        newCards[index][0].isClicked = true;
        return newCards;
      });
      setNextNumber((prev) => prev + 1);
    } else if (clickedCard[1].num === nextNumber) {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        newCards[index][1].isClicked = true;
        return newCards;
      });
      setNextNumber((prev) => prev + 1);
    }

    if (nextNumber + 1 > maxNumber) {
      setIsRunning(false);
      setTime(time);
    }
  };

  useEffect(() => {
    shuffledCards();
  }, [level]);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, setTime, time]);

  return (
    <Wrapper>
      <h1>다음 숫자 : 1</h1>
      <Grid columns={gridSize}>
        {cards.map((card, index) =>
          card[1].isClicked ? null : (
            <Cell key={`card-${index}`} isClicked={card[0].isClicked} onClick={() => handleCardClick(index)}>
              {card[0].isClicked ? card[1].num : card[0].num}
            </Cell>
          )
        )}
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
