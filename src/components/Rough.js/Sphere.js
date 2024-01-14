import React, { useState, useEffect, useRef } from 'react';
import './sphere.css'; 

const Sphere = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const boxRef = useRef();

  // X
  const [x, setX] = useState();

  // Y
  const [y, setY] = useState();

  // This function calculate X and Y
  const getPosition = () => {
    const x = boxRef.current.offsetLeft;
    setX(x);

    const y = boxRef.current.offsetTop;
    setY(y);
  };

  // Get the position of the red box in the beginning
  useEffect(() => {
    getPosition();
  }, []);

  // Re-calculate X and Y of the red box when the window is resized by the user
  useEffect(() => {
    window.addEventListener("resize", getPosition);
    return () => {
        document.removeEventListener("resize", getPosition);
    };
  }, []);

//   const containerRef = useRef(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateContainerDimensions = () => {
      const container = boxRef.current;

      if (container) {
        const { width, height } = container.getBoundingClientRect();
        setContainerDimensions({ width, height });
      }
    };

    updateContainerDimensions();

    // Recalculate dimensions if the window is resized
    window.addEventListener('resize', updateContainerDimensions);

    return () => {
      window.removeEventListener('resize', updateContainerDimensions);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateLighting = () => {
  const maxX = window.innerWidth;
  const maxY = window.innerHeight;
    // Calculate lighting based on mouse position
    const lightX = (mousePosition.x / maxX) * 100;
    const lightY = (mousePosition.y / maxY) * 100;

    return {
      lightX,
      lightY,
    };
  };

  const lighting = calculateLighting();

  return (
    <div className="sphere-container" ref={boxRef}>
      <div
        className="sphere"
        style={{
          '--lightX': lighting.lightX + '%',
          '--lightY': lighting.lightY + '%',
        }}
      ></div>
      <div>
        {mousePosition.x}{" "}{mousePosition.y} {"-"}
        {x} {" "} {y} {"*"} {containerDimensions.width} {" "} {containerDimensions.height}
      </div>
    </div>
  );
};

export default Sphere;
