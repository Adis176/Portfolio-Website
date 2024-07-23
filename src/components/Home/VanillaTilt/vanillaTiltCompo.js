import React from 'react';
import useVanillaTilt from './vanillaHook.js';

const VanillaTiltComponent = ({ options, children }) => {
  const tiltRef = useVanillaTilt(options);
  return (
    <div ref={tiltRef} className="tilt-root">
      {children}
    </div>
  );
};

export default VanillaTiltComponent;
