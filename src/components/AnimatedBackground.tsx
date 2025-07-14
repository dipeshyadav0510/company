'use client';

import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', {
      willReadFrequently: true,
      alpha: true
    });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      type: 'dot' | 'blueprint' | 'ruler' | 'compass' | 'protractor';
      rotation: number;
      rotationSpeed: number;
      color: string;
    }> = [];

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawBlueprint = (x: number, y: number, size: number, rotation: number, color: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.strokeStyle = 'rgba(131, 20, 20, 0.95)';
      ctx.lineWidth = 1;
      ctx.shadowColor = color;
      ctx.shadowBlur = 15;
      
      const gridSize = size * 2;
      for (let i = -gridSize; i <= gridSize; i += 5) {
        ctx.beginPath();
        ctx.moveTo(i, -gridSize);
        ctx.lineTo(i, gridSize);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(-gridSize, i);
        ctx.lineTo(gridSize, i);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const drawRuler = (x: number, y: number, size: number, rotation: number, color: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.strokeStyle = 'rgba(131, 20, 20, 0.95)';
      ctx.lineWidth = 1;
      ctx.shadowColor = color;
      ctx.shadowBlur = 15;
      
      // Draw main ruler line
      ctx.beginPath();
      ctx.moveTo(-size, 0);
      ctx.lineTo(size, 0);
      ctx.stroke();
      
      // Draw measurement marks
      for (let i = -size; i <= size; i += 5) {
        const height = i % 10 === 0 ? 6 : 3;
        ctx.beginPath();
        ctx.moveTo(i, -height);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const drawCompass = (x: number, y: number, size: number, rotation: number, color: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.strokeStyle = 'rgba(131, 20, 20, 0.95)';
      ctx.lineWidth = 1;
      ctx.shadowColor = color;
      ctx.shadowBlur = 15;
      
      // Draw compass circle
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw compass points
      const points = ['N', 'E', 'S', 'W'];
      points.forEach((point, i) => {
        const angle = (i * Math.PI) / 2;
        const textX = Math.cos(angle) * (size + 10);
        const textY = Math.sin(angle) * (size + 10);
        
        ctx.fillStyle = 'rgba(131, 20, 20, 0.95)';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(point, textX, textY);
      });
      
      ctx.restore();
    };

    const drawProtractor = (x: number, y: number, size: number, rotation: number, color: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.strokeStyle = 'rgba(131, 20, 20, 0.95)';
      ctx.lineWidth = 1;
      ctx.shadowColor = color;
      ctx.shadowBlur = 15;
      
      // Draw protractor arc
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI, false);
      ctx.stroke();
      
      // Draw degree marks
      for (let i = 0; i <= 180; i += 10) {
        const angle = (i * Math.PI) / 180;
        const startX = Math.cos(angle) * size;
        const startY = Math.sin(angle) * size;
        const endX = Math.cos(angle) * (size - 5);
        const endY = Math.sin(angle) * (size - 5);
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const getNeonColor = () => {
      const colors = [
        'rgba(0, 255, 255, 0.6)',  // Cyan
        'rgba(255, 0, 255, 0.6)',  // Magenta
        'rgba(0, 255, 0, 0.6)',    // Green
        'rgba(255, 255, 0, 0.6)',  // Yellow
        'rgba(255, 128, 0, 0.6)'   // Orange
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const createParticles = () => {
      particles = [];
      const types: Array<'dot' | 'blueprint' | 'ruler' | 'compass' | 'protractor'> = [
        'dot', 'blueprint', 'ruler', 'compass', 'protractor'
      ];
      const particleCount = Math.min(30, Math.floor((window.innerWidth * window.innerHeight) / 40000));
      
      for (let i = 0; i < particleCount; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: type === 'dot' ? Math.random() * 2 : 15 + Math.random() * 10,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.3 + 0.7,
          type,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          color: getNeonColor()
        });
      }
    };

    const drawParticle = (particle: typeof particles[0]) => {
      ctx.globalAlpha = particle.opacity;
      
      switch (particle.type) {
        case 'blueprint':
          drawBlueprint(particle.x, particle.y, particle.size, particle.rotation, particle.color);
          break;
        case 'ruler':
          drawRuler(particle.x, particle.y, particle.size, particle.rotation, particle.color);
          break;
        case 'compass':
          drawCompass(particle.x, particle.y, particle.size, particle.rotation, particle.color);
          break;
        case 'protractor':
          drawProtractor(particle.x, particle.y, particle.size, particle.rotation, particle.color);
          break;
        default:
          ctx.fillStyle = particle.color;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
      }
      
      ctx.globalAlpha = 1;
    };

    const drawConnections = () => {
      particles.forEach((particle, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(131, 20, 20, ${0.6 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
    };

    const updateParticle = (particle: typeof particles[0]) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.rotation += particle.rotationSpeed;

      // Wrap around screen edges
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.y > canvas.height) particle.y = 0;
      if (particle.y < 0) particle.y = canvas.height;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        updateParticle(particle);
        drawParticle(particle);
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      initCanvas();
      createParticles();
    };

    // Initialize
    initCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.75 }}
    />
  );
};

export default AnimatedBackground;