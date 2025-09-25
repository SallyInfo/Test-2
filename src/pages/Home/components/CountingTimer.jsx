import React, { useState, useEffect } from 'react';
import '../../../assets/styles/CountingTimer.css';

const CountingTimer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time <= 0) {
      return;
    }

    const timerId = setTimeout(() => {
      setTime(prevTime => prevTime - 1000);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    if (milliseconds <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    const totalSeconds = Math.floor(milliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    const seconds = totalSeconds % 60;
    const minutes = totalMinutes % 60;
    const hours = totalHours % 24;

    const formatNumber = (num) => String(num).padStart(2, '0');

    return {
      days: formatNumber(totalDays),
      hours: formatNumber(hours),
      minutes: formatNumber(minutes),
      seconds: formatNumber(seconds),
    };
  };

  const formattedTime = getFormattedTime(time);

  return (
    <div s className="full-promo-container">
      {/* القسم الخاص بالصورة */}
      <div className="image-section">
        <img src="src/assets/Images/image.png" alt="Golf equipment" className="golf-promo-image" />
      </div>

      {/* القسم الخاص بالمحتوى */}
      <div className="timer-section-container">
        <div className="text-container">
          <span className="limited-edition-text">LIMITED EDITION</span>
          <h2 className="title-text">Hurry up! 30% OFF</h2>
          <p className="subtitle-text">Find clubs that are right for your game</p>
          <p className="offer-expires-text">Offer expires in:</p>
        </div>

        <div className="countdown-container">
          <div className="countdown-box">
            <span className="countdown-number">{formattedTime.days}</span>
          </div>
          <div className="countdown-box">
            <span className="countdown-number">{formattedTime.hours}</span>
          </div>
          <div className="countdown-box">
            <span className="countdown-number">{formattedTime.minutes}</span>
          </div>
          <div className="countdown-box">
            <span className="countdown-number">{formattedTime.seconds}</span>
          </div>
        </div>

        <button className="shop-button">Shop now</button>
      </div>
    </div>
  );
};

export default CountingTimer;