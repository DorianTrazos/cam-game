import { useEffect, useState } from 'react';
import { PHASES_INFO } from '../../constants/phases-info';
import './timer.css';

const Timer = ({ view }) => {
  const totalTime = PHASES_INFO[view].time - 1;
  const [time, setTime] = useState(totalTime);

  useEffect(() => {
    if (time === 0) return;
    const timeoutId = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(timeoutId);
  }, [time]);

  return (
    <>
      <h2 className='timer-title'>{PHASES_INFO[view].title}</h2>
      <div className='timer' style={{ '--time': (time / totalTime) * 100 }} />
    </>
  );
};

export default Timer;
