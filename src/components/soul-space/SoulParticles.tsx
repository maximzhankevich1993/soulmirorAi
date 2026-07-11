"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export function SoulParticles() {
  const particles = useMemo(() => {
    const positions = new Float32Array(1200 * 3);

    for (let i = 0; i < 1200; i++) {
      const radius = 1.8 + Math.random() * 1.2;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(
        2 * Math.random() - 1
      );

      positions[i * 3] =
        radius *
        Math.sin(phi) *
        Math.cos(theta);

      positions[i * 3 + 1] =
        radius *
        Math.sin(phi) *
        Math.sin(theta);

      positions[i * 3 + 2] =
        radius *
        Math.cos(phi);
    }

    return positions;
  }, []);

  return (
    <Points
      positions={particles}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#D6B25E"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}