'use client';

const AnimatedBackground = () => {
  return (
    <>
      {/* Base Background with Gradient */}
      <div className="fixed inset-0 -z-30 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Blueprint Grid Pattern */}
      <div className="fixed inset-0 -z-20 opacity-25">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(147, 197, 253, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(147, 197, 253, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Diagonal Construction Pattern */}
      <div className="fixed inset-0 -z-20 opacity-15">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              rgba(234, 179, 8, 0.15),
              rgba(234, 179, 8, 0.15) 10px,
              transparent 10px,
              transparent 20px
            )`
          }}
        />
      </div>

      {/* Radial Dots Pattern */}
      <div className="fixed inset-0 -z-20 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Animated Falling Stars */}
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              width: '2px',
              height: '2px',
              background: 'white',
              borderRadius: '50%',
              boxShadow: '0 0 4px 2px rgba(255, 255, 255, 0.3)',
              animation: `fall${i} ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fall0 { 0% { transform: translateY(0) rotate(45deg) scale(0); opacity: 0; }
          20% { transform: translateY(20vh) rotate(45deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg) scale(0); opacity: 0; }
        }
        @keyframes fall1 { 0% { transform: translateY(0) rotate(45deg) scale(0); opacity: 0; }
          20% { transform: translateY(20vh) rotate(45deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg) scale(0); opacity: 0; }
        }
        @keyframes fall2 { 0% { transform: translateY(0) rotate(45deg) scale(0); opacity: 0; }
          20% { transform: translateY(20vh) rotate(45deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg) scale(0); opacity: 0; }
        }
        @keyframes fall3 { 0% { transform: translateY(0) rotate(45deg) scale(0); opacity: 0; }
          20% { transform: translateY(20vh) rotate(45deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg) scale(0); opacity: 0; }
        }
        @keyframes fall4 { 0% { transform: translateY(0) rotate(45deg) scale(0); opacity: 0; }
          20% { transform: translateY(20vh) rotate(45deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg) scale(0); opacity: 0; }
        }
        @keyframes fall5 { 0% { transform: translateY(0) rotate(45deg) scale(0); opacity: 0; }
          20% { transform: translateY(20vh) rotate(45deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg) scale(0); opacity: 0; }
        }
        @keyframes fall6 { 0% { transform: translateY(0) rotate(45deg) scale(0); opacity: 0; }
          20% { transform: translateY(20vh) rotate(45deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg) scale(0); opacity: 0; }
        }
        @keyframes fall7 { 0% { transform: translateY(0) rotate(45deg) scale(0); opacity: 0; }
          20% { transform: translateY(20vh) rotate(45deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg) scale(0); opacity: 0; }
        }
        @keyframes fall8 { 0% { transform: translateY(0) rotate(45deg) scale(0); opacity: 0; }
          20% { transform: translateY(20vh) rotate(45deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg) scale(0); opacity: 0; }
        }
        @keyframes fall9 { 0% { transform: translateY(0) rotate(45deg) scale(0); opacity: 0; }
          20% { transform: translateY(20vh) rotate(45deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg) scale(0); opacity: 0; }
        }
        @keyframes fall10 { 0% { transform: translateY(0) rotate(45deg) scale(0); opacity: 0; }
          20% { transform: translateY(20vh) rotate(45deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg) scale(0); opacity: 0; }
        }
        @keyframes fall11 { 0% { transform: translateY(0) rotate(45deg) scale(0); opacity: 0; }
          20% { transform: translateY(20vh) rotate(45deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg) scale(0); opacity: 0; }
        }
        @keyframes fall12 { 0% { transform: translateY(0) rotate(45deg) scale(0); opacity: 0; }
          20% { transform: translateY(20vh) rotate(45deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg) scale(0); opacity: 0; }
        }
        @keyframes fall13 { 0% { transform: translateY(0) rotate(45deg) scale(0); opacity: 0; }
          20% { transform: translateY(20vh) rotate(45deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg) scale(0); opacity: 0; }
        }
        @keyframes fall14 { 0% { transform: translateY(0) rotate(45deg) scale(0); opacity: 0; }
          20% { transform: translateY(20vh) rotate(45deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg) scale(0); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default AnimatedBackground;