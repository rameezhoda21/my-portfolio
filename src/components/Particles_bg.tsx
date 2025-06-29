'use client';

import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBg() {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        fpsLimit: 60,
        zIndex: -10,
        particles: {
          number: { value: 80 },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 1,
            outModes: { default: 'out' },
          },
          links: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.3,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.5 } },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
