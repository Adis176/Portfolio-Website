import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
    options={{
      strings: ['Web Developer', 'AI - ML Enthusiast', 'Leetcoder'],
      autoStart: true,
      loop: true,
    }}
            />
  );
}

export default Type;
