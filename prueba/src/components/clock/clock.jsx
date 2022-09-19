import React from 'react';
import { useState, useEffect } from 'react';

function Clock(){
    require('./clock.scss')

  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span className='clockContainer'>
      <p className='clockItem'>{date.toLocaleTimeString()}</p>
    </span>
  );
}

export default Clock;