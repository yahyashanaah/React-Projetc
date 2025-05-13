import React, { useState, useEffect } from 'react';

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set up the timer to update every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function to stop the timer when component unmounts
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString(); // "10:42:23 AM"
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Live Clock 🕒</h2>
      <h1>{formatTime(time)}</h1>
    </div>
  );
}

export default LiveClock;
