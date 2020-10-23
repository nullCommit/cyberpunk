import React, { useEffect, useState } from 'react';

import '../styles/components/countdown.css';

let interval: any;

const Countdown = () => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [completed, setCompleted] = useState(false);

  const now = new Date();
  const targetDate = Date.parse('november 18, 2020 7:00:00 PM');
  const timeLeft = targetDate - now.getTime();
  const remainingDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const remainingHours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const remainingMin = Math.floor((timeLeft / (1000 * 60)) % 60);
  const remainingSeconds = Math.floor((timeLeft / 1000) % 60);

  const formatResult = (num: number) => {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  useEffect(() => {
    if (completed) {
      clearInterval(interval);
    }
  }, [completed]);

  useEffect(() => {
    if (!completed) {
      interval = setInterval(() => {
        if (timeLeft > 0) {
          setRemainingTime({
            days: remainingDays,
            hours: remainingHours,
            minutes: remainingMin,
            seconds: remainingSeconds,
          });
        } else {
          setCompleted(true);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    completed,
    remainingDays,
    remainingHours,
    remainingMin,
    remainingSeconds,
    timeLeft,
  ]);

  return (
    <div id='cowntdown-timer'>
      <div className='days-content'>
        <span>Days</span>
        <h2>{formatResult(remainingTime.days)}</h2>
      </div>
      <div className='hours-content'>
        <span>Hours</span>
        <h2>{formatResult(remainingTime.hours)}</h2>
      </div>
      <div className='minutes-content'>
        <span>Min</span>
        <h2>{formatResult(remainingTime.minutes)}</h2>
      </div>
      <div className='seconds-content'>
        <span>Sec</span>
        <h2>{formatResult(remainingTime.seconds)}</h2>
      </div>
    </div>
  );
};

export default Countdown;
