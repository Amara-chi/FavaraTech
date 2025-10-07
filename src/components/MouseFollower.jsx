import { useEffect, useState } from 'react';

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    let rafId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const trailPoints = [];

    const handleMouseMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;

      // Add trail points
      trailPoints.push({ x: event.clientX, y: event.clientY });
      if (trailPoints.length > 5) {
        trailPoints.shift();
      }
      setTrail([...trailPoints]);
    };

    const handleMouseOver = (event) => {
      const target = event.target;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.hasAttribute('data-cursor-hover');
      
      setIsHovered(isInteractive);
    };

    const handleMouseOut = () => {
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const addEventOnElements = (elements, eventType, callback) => {
      elements.forEach(element => {
        element.addEventListener(eventType, callback);
      });
    };

    const animate = () => {
      // Smooth follow with delay (like the original)
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;

      setPosition({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    animate();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Add hover effects to all buttons and links
    const anchorElements = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');
    
    const hoverActive = () => setIsHovered(true);
    const hoverDeactive = () => setIsHovered(false);

    addEventOnElements(anchorElements, 'mouseover', hoverActive);
    addEventOnElements(anchorElements, 'mouseout', hoverDeactive);
    addEventOnElements(buttons, 'mouseover', hoverActive);
    addEventOnElements(buttons, 'mouseout', hoverDeactive);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      
      // Clean up button and link events
      addEventOnElements(anchorElements, 'mouseover', hoverActive);
      addEventOnElements(anchorElements, 'mouseout', hoverDeactive);
      addEventOnElements(buttons, 'mouseover', hoverActive);
      addEventOnElements(buttons, 'mouseout', hoverDeactive);
      
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor - follows with delay */}
      <div
        data-cursor
        className={`custom-cursor ${isHovered ? 'hovered' : ''} ${!isVisible ? 'disabled' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Multiple trail dots */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="cursor-trail-dot"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: (index + 1) / trail.length * 0.3,
            transform: `scale(${0.2 + (index / trail.length) * 0.8})`,
          }}
        />
      ))}
    </>
  );
}