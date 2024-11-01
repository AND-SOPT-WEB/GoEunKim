import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import Modal from './atoms/Modal';
import useGame from '../hooks/useGame';

const Game = ({ level, setTime, time }) => {
  const { cards, gridSize, nextNumber, gameEnd, date, isRunning, closeModal, handleCardClick } = useGame(
    level,
    setTime,
    time
  );

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
      <h1>
        다음 숫자 <span>{` " ${nextNumber} " `}</span>
      </h1>
      <Grid columns={gridSize}>
        {cards.map((card, index) =>
          card[1].isClicked ? (
            <Blank key={`blank-${index}`} />
          ) : (
            <Cell
              key={`card-${index}`}
              id={`card-${index}`}
              isClicked={card[0].isClicked}
              onClick={() => {
                handleCardClick(index);
              }}
            >
              {card[0].isClicked ? card[1].num : card[0].num}
            </Cell>
          )
        )}
      </Grid>
      {gameEnd && <Modal date={date} level={level} time={time} closeModal={closeModal} />}
    </Wrapper>
  );
};

export default Game;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 1% 20%;
  padding: 2% 0;

  & > h1 {
    font-size: 1.3rem;
    font-weight: 600;
  }
  & > h1 > span {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.midBlue};
  }
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  padding: 2rem 8rem;
  gap: 0.5rem;
`;

const Cell = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 1.2rem;
  background-color: ${({ isClicked, theme }) => (isClicked ? theme.colors.darkBlue : theme.colors.midBlue)};

  &.flash {
    background-color: white;
  }

  &.wrong {
    background-color: ${({ theme }) => theme.colors.wrong};
    scale: 1.02;
  }
`;

const Blank = styled.div`
  width: 100px;
  height: 100px;
`;
