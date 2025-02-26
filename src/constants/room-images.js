export const AVAILABLE_ROOMS = [
  {
    changes: null,
    image: '/assets/images/room-1/1.png'
  },
  {
    changes: ['I2', 'I3', 'K2', 'K3'],
    changeType: 'modified',
    image: '/assets/images/room-1/2.png'
  },
  {
    changes: ['K1', 'K2'],
    changeType: 'modified',
    image: '/assets/images/room-1/3.png'
  },
  {
    changes: ['N6', 'N7'],
    changeType: 'modified',
    image: '/assets/images/room-1/4.png'
  }
];

const shuffleRoomChanges = () => {
  const firstElement = AVAILABLE_ROOMS[0];
  const restElements = AVAILABLE_ROOMS.slice(1);

  restElements.sort(() => Math.random() - 0.5);

  return [firstElement, ...restElements];
};

const ROOMS_TO_PLAY = shuffleRoomChanges();

export { ROOMS_TO_PLAY };
