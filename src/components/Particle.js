import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <div
      style={{
        position: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
      }}
    >
      <Particles
        id="tsparticles"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: false,
              opacity: 0.03,
            },
            move: {
              direction: "right",
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
            color: {
                value: "#ffffff" // white color
              }
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}

export default Particle;
