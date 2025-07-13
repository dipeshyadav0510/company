'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageLoaderProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export default function ImageLoader({ src, alt, fill = false, className = '', priority = false }: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${fill ? 'h-full w-full' : ''}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-105 blur-lg' : 'scale-100 blur-0'}
          ${className}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        priority={priority}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-12 w-12"></div>
          </div>
        </div>
      )}
    </div>
  );
} 