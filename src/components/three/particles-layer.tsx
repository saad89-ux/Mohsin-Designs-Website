'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

const ParticlesSceneDynamic = dynamic(() => import('./particles-scene').then((mod) => mod.ParticlesScene), { ssr: false });

export function ParticlesLayer() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
      <Canvas camera={{ fov: 75, position: [0, 0, 40] }} gl={{ alpha: true }}>
        <Suspense fallback={null}>
          <ParticlesSceneDynamic />
        </Suspense>
      </Canvas>
    </div>
  );
}
