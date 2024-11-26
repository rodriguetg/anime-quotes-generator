import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/system';

// Tableau de couleurs pour les pétales
const petalColors = [
  'rgba(255, 223, 186, 0.6)', // Pêche clair
  'rgba(255, 182, 193, 0.6)', // Rose pâle
  'rgba(173, 216, 230, 0.6)', // Bleu clair
  'rgba(221, 160, 221, 0.6)', // Prune clair
  'rgba(255, 218, 185, 0.6)', // Pêche
];

const Petal = styled(motion.div)({
  position: 'absolute',
  width: '20px',
  height: '20px',
  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
});

const generatePetal = (index) => {
  const startX = Math.random() * window.innerWidth;
  const duration = 5 + Math.random() * 5;
  const size = 10 + Math.random() * 15;
  const rotation = Math.random() * 360;
  const delay = Math.random() * 3;
  const color = petalColors[Math.floor(Math.random() * petalColors.length)];
  
  return {
    id: index,
    startX,
    duration,
    size,
    rotation,
    delay,
    color,
  };
};

const AnimatedBackground = () => {
  const [petals, setPetals] = useState([]);
  
  useEffect(() => {
    const initialPetals = Array.from({ length: 30 }, (_, i) => generatePetal(i));
    setPetals(initialPetals);

    const interval = setInterval(() => {
      setPetals(prev => {
        const newPetals = prev.map(petal => {
          if (petal.y > window.innerHeight) {
            return generatePetal(petal.id);
          }
          return petal;
        });
        return newPetals;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: -1,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)', // Fond bleu nuit plus sombre et subtil
      }}
    >
      <AnimatePresence>
        {petals.map((petal) => (
          <Petal
            key={petal.id}
            initial={{
              x: petal.startX,
              y: -50,
              rotate: petal.rotation,
              scale: 0,
            }}
            animate={{
              x: [petal.startX, petal.startX + 100, petal.startX - 100, petal.startX + 50],
              y: ['-5%', '105%'],
              rotate: [petal.rotation, petal.rotation + 360],
              scale: [0, 1, 1, 0.5],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.5, 0.8, 1],
            }}
            style={{
              width: petal.size,
              height: petal.size,
              background: petal.color,
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Overlay pour ajouter de la profondeur */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default AnimatedBackground;
