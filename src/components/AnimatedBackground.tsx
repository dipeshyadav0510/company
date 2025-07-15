'use client';

const AnimatedBackground = () => {
  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background: 'linear-gradient(to bottom right, rgba(65, 105, 225, 0.1), rgba(147, 112, 219, 0.1))'
      }}
    />
  );
};

export default AnimatedBackground;