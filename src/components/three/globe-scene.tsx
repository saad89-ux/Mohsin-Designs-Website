'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function GlobeScene() {
  const globeRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
      // Subtle tilt based on cursor
      const targetX = (state.pointer.x * Math.PI) / 10;
      const targetY = (state.pointer.y * Math.PI) / 10;
      globeRef.current.rotation.x += (targetY - globeRef.current.rotation.x) * 0.05;
      globeRef.current.rotation.z += (-targetX - globeRef.current.rotation.z) * 0.05;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Wireframe Globe */}
      <Sphere args={[1, 64, 64]}>
        <meshBasicMaterial
          color="#0A192F"
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Atmospheric Halo */}
      <Sphere args={[1.05, 32, 32]}>
        <meshPhongMaterial
          color="#00E5FF"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#00E5FF" intensity={2} />
      <pointLight position={[-10, -10, -10]} color="#0A192F" intensity={1} />
    </group>
  );
}
