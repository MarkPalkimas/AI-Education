// src/components/ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: 3 },
          move: { enable: true, speed: 0.5 },
          links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
