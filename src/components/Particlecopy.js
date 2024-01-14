import React from "react";
// import ISourceOptions from 'react-tsparticles';
import Particles from 'react-tsparticles';
import "./Particles.css"
  const options= {
    background: {
      color: "#000000",
    },
    zIndex: {value: -1000},
    opacity:{ value: 0.2},
    interactivity: {
      events: {
        onClick: {
          enable: true,
          // mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 30,
        },

        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#dddddd",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        // enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 1000,
        },
        value: 80,
      },
      opacity: {
        value: 0.6,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 4,
      },
    },
  };

function Particle() {
  return (
    <Particles id="tsparticles" options={options} style={{zIndex: '-100', width: '100%', height: '100vh'}}/>
  );
}

export default Particle;
