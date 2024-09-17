import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date())
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date())
    },1000)
    return ()=> clearInterval(intervalId)
  },[])

  function formattedTime() {
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    let ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12 || 12
    return `${hours}:${minutes}:${seconds} ${ampm}`
  }
  
  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formattedTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
