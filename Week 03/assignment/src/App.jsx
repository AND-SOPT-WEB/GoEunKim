import './App.css';
import Header from './components/Header';
import { useState, useRef } from 'react';

function App() {
  const [isGameMode, setIsGameMode] = useState(true); // 게임 || 랭킹 랜더링을 위한 상태변수
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [level, setLevel] = useState(1);

  return (
    <>
      <Header isGameMode={isGameMode} setIsGameMode={setIsGameMode} setLevel={setLevel} />
    </>
  );
}

export default App;
