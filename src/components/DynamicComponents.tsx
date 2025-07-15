'use client';

import dynamic from 'next/dynamic';

const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), {
  ssr: false
});

const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), {
  ssr: false
});

export default function DynamicComponents() {
  return (
    <>
      <AnimatedBackground />
      <WhatsAppButton />
    </>
  );
} 