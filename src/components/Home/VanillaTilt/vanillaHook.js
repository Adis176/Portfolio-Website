import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const useVanillaTilt = (options) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const node = tiltRef.current;
    if (node) {
      VanillaTilt.init(node, options);
    }

    return () => {
      if (node && node.vanillaTilt) {
        node.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return tiltRef;
};

export default useVanillaTilt;
