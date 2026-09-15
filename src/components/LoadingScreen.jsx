import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.6, 0.05, 0.01, 0.9]
          }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          {/* Tricolore signal-bars mark */}
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-16 h-16 rounded-lg flex items-end justify-center gap-1.5"
            style={{ background: '#1C1B19', paddingBottom: '12px' }}
          >
            <div style={{ width: '6px', height: '22px', background: '#33518C', borderRadius: '1px' }} />
            <div style={{ width: '6px', height: '38px', background: '#FDFCF9', borderRadius: '1px' }} />
            <div style={{ width: '6px', height: '28px', background: '#B8433A', borderRadius: '1px' }} />
          </motion.div>

          {/* France IPTV wordmark */}
          <h1
            className="text-4xl md:text-5xl font-bold text-brand-black"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: '-0.02em',
            }}
          >
            France IPTV
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-brand-gray text-sm mb-8"
        >
          Service de Streaming Premium
        </motion.p>

        {/* Loading Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-12 h-12 mx-auto"
        >
          <svg viewBox="0 0 50 50">
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="#33518C"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="31.415, 31.415"
              transform="rotate(-90 25 25)"
            />
          </svg>
        </motion.div>

        {/* Pulsing Dots */}
        <div className="flex gap-2 justify-center mt-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: i * 0.2
              }}
              className="w-2 h-2 bg-brand-gold rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
