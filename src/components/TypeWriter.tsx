'use client';

import { useState, useEffect, useRef } from 'react';

interface TypeWriterProps {
  text: string;
  className?: string;
  onTypingComplete?: () => void;
  onHalfway?: () => void;
  delay?: number;
}

export default function TypeWriter({ 
  text, 
  className = "", 
  onTypingComplete, 
  onHalfway,
  delay = 0
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const hasTriggeredHalfway = useRef(false);
  const startTime = useRef<number | null>(null);
  const animationFrame = useRef<number>();

  useEffect(() => {
    const typingSpeed = 50; // milliseconds per character
    const totalDuration = text.length * typingSpeed;

    const animate = (timestamp: number) => {
      if (!startTime.current) {
        startTime.current = timestamp;
      }

      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / totalDuration, 1);
      const currentLength = Math.floor(text.length * progress);

      // Check halfway point
      if (!hasTriggeredHalfway.current && progress >= 0.5) {
        hasTriggeredHalfway.current = true;
        onHalfway?.();
      }

      if (progress < 1) {
        setDisplayText(text.slice(0, currentLength));
        animationFrame.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
        setIsComplete(true);
        onTypingComplete?.();
      }
    };

    // Initial delay before starting animation
    const timeoutId = setTimeout(() => {
      animationFrame.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [text, onTypingComplete, onHalfway, delay]);

  return (
    <h2 className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </h2>
  );
} 