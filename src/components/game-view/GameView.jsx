import { useEffect, useRef, useState } from 'react';
import { PHASES_INFO } from '../../constants/phases-info';
import { PLAYER_GRID } from '../../constants/player-grid';
import { ROOMS_TO_PLAY } from '../../constants/room-images';
import ContextMenu from '../context-menu/ContextMenu';
import Timer from '../timer/Timer';

const GameView = ({ level, setLevel }) => {
  const containerRef = useRef(null);
  const [menuCoordinates, setMenuCoordinates] = useState(null);
  const [gridClick, setGridClick] = useState(null);
  const [points, setPoints] = useState(0);
  const [view, setView] = useState(0);

  useEffect(() => {
    const timeToChangeView = PHASES_INFO[view].time * 1000;
    const timeoutId = setTimeout(() => setView(view + 1), timeToChangeView);
    console.log(containerRef);
    return () => clearTimeout(timeoutId);
  }, [view]);

  return (
    <>
      <div className='game-user-info'>
        <div className='info'>
          <h2 className='info-title'>Level</h2>
          <span className='info-data'>{level}</span>
        </div>
        <div className='info'>
          <h2 className='info-title'>User</h2>
          <span className='info-data'>Dorian</span>
        </div>
        <div className='info'>
          <h2 className='info-title'>Points</h2>
          <span className='info-data'>{points}</span>
        </div>
      </div>
      {view === 0 && (
        <>
          <img src={ROOMS_TO_PLAY[0].image} />
          <Timer view={view} />
        </>
      )}
      {view === 1 && <h2>¿LO TIENES?</h2>}
      {view === 2 && (
        <>
          <div
            ref={containerRef}
            className='image-container'
            style={{ '--room-image': `url(${ROOMS_TO_PLAY[level].image})` }}
            onClick={event => showModalOptions(event, containerRef, setMenuCoordinates)}
          >
            {PLAYER_GRID.map(square => (
              <span key={square.row + square.column} className='tile' onClick={() => setGridClick(square.row + square.column)}>
                {square.row + square.column}
              </span>
            ))}
            {menuCoordinates && <ContextMenu menuCoordinates={menuCoordinates} level={level} setLevel={setLevel} gridClick={gridClick} />}
          </div>

          <Timer view={view} level={level} />
        </>
      )}
    </>
  );
};

const showModalOptions = (event, containerRef, setCoordinates) => {
  if (!containerRef.current) return;
  if (event.target.className === 'option') {
    setCoordinates(null);
    return;
  }
  const rect = containerRef.current.getBoundingClientRect();
  const top = event.clientY - (rect.top + 30) + 'px';
  const left = event.clientX - (rect.left - 30) + 'px';

  setCoordinates({ top, left });
};

export default GameView;
