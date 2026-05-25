'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Globe Inner Scene ─── */
function GlobeInner() {
  const groupRef = useRef<THREE.Group>(null);
  const haloRef = useRef<THREE.Mesh>(null);

  // Generate arc curves on the sphere surface
  const arcData = useMemo(() => {
    const pairs: [THREE.Vector3, THREE.Vector3][] = [
      [new THREE.Vector3(0.8, 0.5, 0.3), new THREE.Vector3(-0.4, -0.7, 0.6)],
      [new THREE.Vector3(-0.6, 0.6, 0.5), new THREE.Vector3(0.5, -0.3, -0.8)],
      [new THREE.Vector3(0.3, -0.8, 0.5), new THREE.Vector3(-0.7, 0.4, -0.5)],
    ];

    return pairs.map(([start, end], i) => {
      start.normalize().multiplyScalar(2.02);
      end.normalize().multiplyScalar(2.02);
      const mid = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(2.6);
      const curve = new THREE.CatmullRomCurve3([start, mid, end], false, 'catmullrom', 0.5);
      const points = curve.getPoints(40);
      return {
        points: points.map((p) => [p.x, p.y, p.z] as [number, number, number]),
        color: i === 0 ? '#64FFDA' : '#00E5FF',
        opacity: i === 0 ? 0.5 : 0.3,
        startPt: start,
        endPt: end,
      };
    });
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
    }
    if (haloRef.current) {
      const mat = haloRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.04 + Math.sin(state.clock.elapsedTime * 0.8) * 0.015;
    }
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[8, 6, 4]} intensity={1.5} color="#e0e8ff" />
      <pointLight position={[-6, -4, 6]} intensity={0.6} color="#00E5FF" distance={20} />
      <pointLight position={[4, 8, -4]} intensity={0.3} color="#64FFDA" distance={15} />

      <group ref={groupRef}>
        {/* Core wireframe sphere */}
        <Sphere args={[2, 48, 48]}>
          <meshPhongMaterial
            color="#0a1628"
            emissive="#1A237E"
            emissiveIntensity={0.15}
            transparent
            opacity={0.95}
            wireframe
          />
        </Sphere>

        {/* Inner solid sphere for depth */}
        <Sphere args={[1.96, 32, 32]}>
          <meshPhongMaterial
            color="#050914"
            emissive="#0A192F"
            emissiveIntensity={0.05}
            transparent
            opacity={0.4}
          />
        </Sphere>

        {/* Atmospheric halo — BackSide glow */}
        <Sphere args={[2.25, 32, 32]} ref={haloRef}>
          <meshBasicMaterial
            color="#00E5FF"
            transparent
            opacity={0.04}
            side={THREE.BackSide}
          />
        </Sphere>

        {/* Connection arc lines using Drei's Line component */}
        {arcData.map((arc, i) => (
          <Line
            key={i}
            points={arc.points}
            color={arc.color}
            lineWidth={1.5}
            transparent
            opacity={arc.opacity}
          />
        ))}

        {/* Dot markers at arc endpoints */}
        {arcData.map((arc, i) => (
          <group key={`dots-${i}`}>
            <mesh position={arc.startPt}>
              <sphereGeometry args={[0.04, 8, 8]} />
              <meshBasicMaterial color={i === 0 ? '#64FFDA' : '#64FFDA'} />
            </mesh>
            <mesh position={arc.endPt}>
              <sphereGeometry args={[0.04, 8, 8]} />
              <meshBasicMaterial color={i === 0 ? '#64FFDA' : '#64FFDA'} />
            </mesh>
          </group>
        ))}
      </group>
    </>
  );
}

/* ─── Canvas wrapper (client only) ─── */
function GlobeCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <GlobeInner />
    </Canvas>
  );
}

export default GlobeCanvas;
