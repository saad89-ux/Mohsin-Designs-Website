'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GlobeScene } from './globe-scene';

export function InteractiveGlobeInner() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <GlobeScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
