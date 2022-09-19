import React from "react";
import { useState, useEffect } from 'react';


const Card = () => {
    require('./card.scss')

    const [time, setTime] = useState(Date.now());

useEffect(() => {
  const interval = setInterval(() => setTime(Date.now()), 4000);
  return () => {
    clearInterval(interval);
  };
}, []);

    return(
        <div>
    <img className="image" src="https://picsum.photos/200" alt="" />
    </div>
    )
}

export default Card