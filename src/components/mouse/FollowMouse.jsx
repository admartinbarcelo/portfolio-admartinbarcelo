import React, { useState, useEffect, useRef } from 'react';
import './followMouse.css';

function FollowMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef();

  const updatePosition = () => {
    setPosition({ x: window.mouseX, y: window.mouseY });
    requestRef.current = requestAnimationFrame(updatePosition);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      window.mouseX = event.clientX;
      window.mouseY = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    requestRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="follow__mouse" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
    </div>
  );
}

export default FollowMouse;

.follow__mouse {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #fff;
  border-radius: 50%;
  opacity: 0.8;
  pointer-events: none;
  left: -25px;
  top: -25px;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  z-index: 9999;
  cursor: none;
}


