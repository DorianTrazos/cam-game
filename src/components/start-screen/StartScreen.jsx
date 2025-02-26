const StartScreen = ({ phase, setPhase }) => {
  return (
    <div>
      <button onClick={() => setPhase(phase + 1)}>START GAME</button>
      <button>TUTORIAL</button>
    </div>
  );
};

export default StartScreen;
