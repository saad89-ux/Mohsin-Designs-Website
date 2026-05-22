import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Wireframe() {
  const mesh = useRef<THREE.Mesh>(null);
  const points = useRef<THREE.Points>(null);

  const dotGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const count = 1400;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Fibonacci sphere
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 1.62;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);

  useFrame((state, dt) => {
    if (mesh.current) {
      mesh.current.rotation.y += dt * 0.12;
      mesh.current.rotation.x = state.pointer.y * 0.25;
      mesh.current.rotation.z = state.pointer.x * 0.15;
    }
    if (points.current) {
      points.current.rotation.y += dt * 0.12;
      points.current.rotation.x = state.pointer.y * 0.25;
      points.current.rotation.z = state.pointer.x * 0.15;
    }
  });

  return (
    <group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.6, 4]} />
        <meshBasicMaterial color="#6aa8ff" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.58, 64, 64]} />
        <meshBasicMaterial color="#0b1226" transparent opacity={0.85} />
      </mesh>
      <points ref={points} geometry={dotGeo}>
        <pointsMaterial size={0.022} color="#9cc4ff" transparent opacity={0.9} sizeAttenuation />
      </points>
      {/* Glow halo */}
      <mesh>
        <sphereGeometry args={[1.95, 48, 48]} />
        <meshBasicMaterial color="#3a82ff" transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

export function Globe({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 38 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <Wireframe />
      </Canvas>
    </div>
  );
}
