import { useState, useEffect, useRef } from 'react';
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


