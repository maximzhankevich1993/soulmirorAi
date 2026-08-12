"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function SoulPulse() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;

    const time = state.clock.elapsedTime;

    const pulse = 1 + Math.sin(time * 3) * 0.12;

    mesh.current.scale.setScalar(pulse);

    const material = mesh.current.material;

    if (material instanceof THREE.MeshPhysicalMaterial) {
      material.emissiveIntensity =
        3 + Math.sin(time * 2.5) * 1.5;
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.32, 64, 64]} />

      <meshPhysicalMaterial
        color="#D6B25E"
        emissive="#D6B25E"
        emissiveIntensity={4}
        roughness={0}
        metalness={0.2}
        transmission={1}
        thickness={2}
        transparent
        opacity={0.65}
      />
    </mesh>
  );
}