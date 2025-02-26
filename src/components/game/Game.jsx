import { useState } from 'react';
import GameView from '../game-view/GameView';
import StartScreen from '../start-screen/StartScreen';
const Game = () => {
  const [level, setLevel] = useState(1);
  const [phase, setPhase] = useState(0);

  return (
    <>
      <h1>INTERACTIVE GAME</h1>
      <div className='game-container'>
        {phase === 0 && <StartScreen phase={phase} setPhase={setPhase} />}
        {phase === 1 && <GameView level={level} setLevel={setLevel} phase={phase} setPhase={setPhase} />}
        {phase === 2 && <h1>SE ACABÓ</h1>}
      </div>
    </>
  );
};

export default Game;
