// 카드 게임 진행을 위한 커스텀 훅 (카드 섞기 + 타이머 + 게임 종료)
import { useState, useEffect } from 'react';
import getDate from '../utils/getDate';
import saveStorage from '../utils/saveStorage';

const useGame = (level, setTime, time) => {
  const gridSize = parseInt(level) + 2; // 카드 column 수
  const perGameSize = gridSize * gridSize; // 1라운드 당 카드 수
  const maxNumber = perGameSize * 2; // 1-2라운드 전체 카드 수

  const [cards, setCards] = useState([]); // 카드 배열
  const [nextNumber, setNextNumber] = useState(1); // 다음 맞춰야 할 카드 숫자  (target)
  const [isRunning, setIsRunning] = useState(false); // 타이머 흐르고 있나
  const [gameEnd, setGameEnd] = useState(false); // 게임 끝! (정보 저장 + 모달)
  const [date, setDate] = useState(''); // 현재 시간 (월-일-시-분-초)

  // 모달 닫는 순간 (게임 새로 set)
  const closeModal = () => {
    setGameEnd(false);
    setTime(0); // 타이머 초기화
    setNextNumber(1); // 담 숫자도 1로
    shuffledCards(); // 카드 섞기
  };

  const shuffledCards = () => {
    const NumsArr = new Set(); // 중복 방지

    while (NumsArr.size < maxNumber) {
      if (NumsArr.size % 2 === 0) {
        NumsArr.add(Math.floor(Math.random() * perGameSize) + 1); // 1 ~( N * N)
      } else {
        NumsArr.add(Math.floor(Math.random() * perGameSize) + perGameSize + 1); // (N*N)+1 ~ (N*N*2)
      }
    }

    const Nums = Array.from(NumsArr); // set -> array 로 바꾸기
    let tempArr = [];
    for (let i = 0; i < maxNumber; i += 2) {
      if (Nums[i + 1] !== undefined) {
        tempArr.push([
          { num: Nums[i], isClicked: false },
          { num: Nums[i + 1], isClicked: false },
        ]);
      }
    }
    setCards(tempArr);
  };

  const handleCardClick = (index) => {
    const clickedCard = cards[index];

    // 카드를 눌렀을때, 타이머가 작동되지 않았다면 Time ON
    if (!isRunning) {
      setIsRunning(true);
    }

    // 옳은 카드 선택시
    if (clickedCard[0].num === nextNumber || clickedCard[1].num === nextNumber) {
      // 카드 선택시, 클릭되는 효과를 위한 깜빡임 효과 (클래스 add -> remove)
      const cardElement = document.getElementById(`card-${index}`);
      cardElement.classList.add('flash');
      setTimeout(() => {
        cardElement.classList.remove('flash');

        // 1라운드 (첫 카드판)
        if (clickedCard[0].num === nextNumber) {
          setCards((prevCards) => {
            const newCards = [...prevCards];
            newCards[index][0].isClicked = true;
            return newCards;
          });
        }
        // 2라운드 (두번쨰 카드판)
        else {
          setCards((prevCards) => {
            const newCards = [...prevCards];
            newCards[index][1].isClicked = true;
            return newCards;
          });
        }
        setNextNumber((prev) => prev + 1);
      }, 80);
    } else {
      // 잘못된 카드 선택시 UI로 알림
      const cardElement = document.getElementById(`card-${index}`);
      cardElement.classList.add('wrong');
      setTimeout(() => {
        cardElement.classList.remove('wrong');
      }, 200);
    }

    // 게임 종료 처리
    if (nextNumber + 1 > maxNumber) {
      setIsRunning(false);
      setGameEnd(true);
      const date = getDate();
      setDate(date);
      saveStorage(date, time, level);
    }
  };

  useEffect(() => {
    shuffledCards();
    setIsRunning(false);
    setTime(0);
    setNextNumber(1);
  }, [level]);

  return {
    cards,
    gridSize,
    nextNumber,
    gameEnd,
    date,
    isRunning,
    closeModal,
    handleCardClick,
    setIsRunning,
  };
};

export default useGame;
