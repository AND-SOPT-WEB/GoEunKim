import './App.css';
import Header from './components/Header';
import { useState, useRef } from 'react';
import Ranking from './components/Ranking';
import Game from './components/Game';

function App() {
  const [isGameMode, setIsGameMode] = useState(true); // 게임 || 랭킹 랜더링을 위한 상태변수
  const [time, setTime] = useState(0);
  const [level, setLevel] = useState(1);
  return (
    <>
      <Header time={time} isGameMode={isGameMode} setIsGameMode={setIsGameMode} setLevel={setLevel} />
      {isGameMode ? <Game time={time} setTime={setTime} level={level} /> : <Ranking />}
    </>
  );
}

export default App;
