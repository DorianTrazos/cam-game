import { useState } from 'react';

const squareGrid = Array(100)
  .fill(0)
  .map((_, index) => {
    const row = String.fromCharCode(65 + Math.floor(index / 10));
    const column = index % 10;
    return { row, column };
  });

const rooms = ['/example.png', 'public/example-2.png'];

const App = () => {
  const [roomCounter, setRoomCounter] = useState(0);
  return (
    <>
      <h1>React</h1>
      <div className='image-container' style={{ '--roomImage': `url(${rooms[roomCounter]})` }} onClick={checkClick}>
        {squareGrid.map(square => (
          <span key={square.row + square.column} data-row={square.row} data-column={square.column} className='tile'>
            {square.row + square.column}
          </span>
        ))}
      </div>
      <button>PREV</button>
      <button onClick={() => changeNextRoom(rooms, roomCounter, setRoomCounter)}>NEXT</button>
    </>
  );
};

const checkClick = ({ target }) => {
  console.log(target.dataset.row);
  console.log(target.dataset.column);
};

const changeNextRoom = (rooms, roomCounter, setRoomCounter) => {
  if (roomCounter < rooms.length - 1) {
    setRoomCounter(roomCounter + 1);
  }
};

export default App;
